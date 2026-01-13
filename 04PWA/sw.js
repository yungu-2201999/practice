self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('cache-v5').then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                'index.css',
            ])
        })
    )
})

self.addEventListener('activate', event => {
    console.log('activate', event)
    // 3. 清理缓存
    event.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => {
            if(cacheName !== 'cache-v5'){
                return caches.delete(cacheName);
            }
        }))
    }))
})

self.addEventListener('fetch', event => {
    console.log('fetch', event)
    // 2. 使用缓存
    event.respondWith(
        caches.open('cache-v5').then(cache => {
            return cache.match(event.request).then(response => {
                if (response) {
                    return response
                }
                return fetch(event.request).then(networkResponse => {
                    cache.put(event.request, networkResponse.clone())
                    return networkResponse
                }).catch(() => {
                    if (event.request.mode === 'navigate') {
                        return cache.match('index.html')
                    }
                })
            })
        })
    )
})

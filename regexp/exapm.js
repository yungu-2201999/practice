/**
 * 匹配生日
 * 1997-10-01
 */

const birsdayReg = /^\d{4}-\d{2}-\d{1,2}$/

console.log(birsdayReg.test("1999-10-234"));


/**
 * 匹配单词
 * cat
 */

const testWrod = /\bcat\b/

console.log(testWrod.test("cat"))

/**
 * 捕获组捕获生日
 * 1974-10-1
 */

const birthdayExp = /$(\w{4})-(\w{2})-(\w{2})/
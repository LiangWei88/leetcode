const assert = require('assert');
const modInstance = require('../src/13.罗马数字转整数')

describe('13.罗马数字转整数', () => {
  it('存在主函数', () => {
    assert.equal(typeof modInstance, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    const testTime = 10;
    // let memUse = 0;

    console.time('test');
    for (let index = 0; index < testTime; index++) {
      test();
      // memUse += process.memoryUsage().rss;
    }
    // console.log(`Memory: ${Math.round(memUse / testTime / 1024 / 1024 * 100) / 100} MB`);
    console.timeEnd('test');

  })
})

function test() {
  assert.equal(modInstance("I"), 1, 'I')
  assert.equal(modInstance("II"), 2, 'II')
  assert.equal(modInstance("III"), 3, 'III')
  assert.equal(modInstance("IV"), 4, 'IV')
  assert.equal(modInstance("V"), 5, 'V')
  assert.equal(modInstance("VI"), 6, 'VI')
  assert.equal(modInstance("VII"), 7, 'VII')
  assert.equal(modInstance("VIII"), 8, 'VIII')
  assert.equal(modInstance("IX"), 9, 'IX')
  assert.equal(modInstance("X"), 10, 'X')
  assert.equal(modInstance("XL"), 40, 'XL')
  assert.equal(modInstance("L"), 50, 'L')
  assert.equal(modInstance("LIV"), 54, 'LIV')
  assert.equal(modInstance("LVIII"), 58, 'LVIII')
  assert.equal(modInstance("XC"), 90, 'XC')
  assert.equal(modInstance("C"), 100, 'C')
  assert.equal(modInstance("CD"), 400, 'CD')
  assert.equal(modInstance("D"), 500, 'D')
  assert.equal(modInstance("CM"), 900, 'CM')
  assert.equal(modInstance("M"), 1000, 'M')
  assert.equal(modInstance("MMMCMXCIX"), 3999, 'MMMCMXCIX')
}
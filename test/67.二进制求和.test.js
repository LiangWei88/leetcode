const assert = require('assert');
const { addBinary } = require('../src/67.二进制求和')

describe('67.二进制求和', () => {
  it('存在主函数', () => {
    assert.equal(typeof addBinary, 'function', '必须导出一个函数')
  })
  it('测试功能', () => {
    assert.strictEqual(addBinary("0", "0"), "0")
    assert.strictEqual(addBinary("1", "1"), "10")
    assert.strictEqual(addBinary("1", "0"), "1")
    assert.strictEqual(addBinary("111", "0"), "111")
    assert.strictEqual(addBinary("0", "1"), "1")
    assert.strictEqual(addBinary("11", "1"), "100")
    assert.strictEqual(addBinary("1", "11"), "100")
    assert.strictEqual(addBinary("1010", "1011"), "10101")
    assert.strictEqual(addBinary(
      "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"),
      "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000")
    assert.strictEqual(addBinary(
      "11001000011101111111010011101001111111110000110101000",
      "1010110011100010000110100011001101110001111001001010001100000100011111011011111"),
      "1010110011100010000110100110010110001111111000011101110110000100010000010000111")
  })
})

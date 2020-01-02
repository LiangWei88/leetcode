const assert = require('assert');
const modInstance = require('../src/20.有效的括号')
const parseStr = modInstance.parseStr
const isValid = modInstance.isValid

describe('20.有效的括号', () => {
  it('存在函数', () => {
    assert.equal(typeof modInstance, 'object', '必须导出一个对象')
    assert.equal(typeof parseStr, 'function', '必须导出一个parseStr函数')
  })
  it('处理字符', () => {
    let workingArr;
    let inputStr;
    let expected;
    let actual;
    //------------------
    workingArr = []
    inputStr = '('
    expected = {
      workingArr: ['('],
      isValid: true
    }
    actual = parseStr(workingArr, inputStr);
    assert.deepStrictEqual(
      actual,
      expected
    );
    //------------------
    workingArr = ['(']
    inputStr = '['
    expected = {
      workingArr: ['(', '['],
      isValid: true
    }
    actual = parseStr(workingArr, inputStr);
    assert.deepStrictEqual(
      actual,
      expected
    );
    //------------------
    workingArr = ['{', '[', '(']
    inputStr = '{'
    expected = {
      workingArr: ['{', '[', '(', '{'],
      isValid: true
    }
    actual = parseStr(workingArr, inputStr);
    assert.deepStrictEqual(
      actual,
      expected
    );
    //------------------
    workingArr = ['{', '[', '(']
    inputStr = ')'
    expected = {
      workingArr: ['{', '['],
      isValid: true
    }
    actual = parseStr(workingArr, inputStr);
    assert.deepStrictEqual(
      actual,
      expected
    );
    //------------------
    workingArr = ['{', '[', '(']
    inputStr = ']'
    expected = {
      workingArr: ['{', '['],
      isValid: false
    }
    actual = parseStr(workingArr, inputStr);
    assert.deepStrictEqual(
      actual,
      expected
    );
  })
  it('判断合法性', () => {
    assert.strictEqual(
      isValid(''),
      true
    )
    assert.strictEqual(
      isValid('()'),
      true
    )
    assert.strictEqual(
      isValid("()[]{}"),
      true
    )
    assert.strictEqual(
      isValid("{[]}"),
      true
    )
    assert.strictEqual(
      isValid("(]"),
      false
    )
    assert.strictEqual(
      isValid("()]"),
      false
    )
    assert.strictEqual(
      isValid("()("),
      false
    )
    assert.strictEqual(
      isValid("{(})"),
      false
    )
    assert.strictEqual(
      isValid("{()]"),
      false
    )
  });
})

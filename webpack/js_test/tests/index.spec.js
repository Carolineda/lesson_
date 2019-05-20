// 自测自写代码
// 工作流里面的自测方法，可以将代码的准确性 ：99%
// 通过写测试代码 让代码通过测试
const {add} = require('../index');

// 代码如约运行 预期代码
const expect = require('chai').expect;



// 测试代码,describe it expect (描述，举例)
describe("两数相加结果为和",()=>{
    // 举例
    it('两个字符串数相加，应该转变类型后返回其值',()=>{
        expect(add("11","22")).to.equal(33);
    });
    it("当参数类型错误时，请返回NaN", () => {
        expect(add(0,null)).to.equal(NaN);
    })
});
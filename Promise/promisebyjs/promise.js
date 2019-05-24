// 原生实现then方法
function MyPromise(callback){
    var self = this
    var state = null
    // 记录resolve参数
    var param = null


    // 执行传入的方法 并改变promise对象的状态
    callback(resolve,reject)
    // resolve 方法 执行成功
    function resolve(data){
        let parmise 
        state = true
        param = data
        nextResolve(asynconFulfilled(param))
        // 执行记录onFulfilled
        parmise = asynconFulfilled(param)
        if(parmise === undefined)
        {
            // 如果parmise === undefined ，就不能解析parmise.constructor

        }
        else if(parmise.constructor === self.constructor){
            // 等待传递进来的promise对象执行完毕，然后根据传递进来的promise对象的状态执行resolve 或者是reject
            // 注意：param参数是个形参，在then方法的promise中执行
            promise.then(function(param){
                resolve(param)
            },function(param) {
                reject(param)
            })
        }
        else
        {
            // 这是前面.then() 返回的不是promise对象
            resolve(promise)
        }
    }   

    // reject方法
    function reject (err)
    {
        state = false
        param = err
        nextReject(asynconRejected(param))
    }


    // 没有执行完毕的方法
        var nextResolve = null
        var nextReject =null
        // 记录then方法的参数onFulfilled,onRejected
        var asynconFulfilled = null
        var asynconRejected = null


    // 定义then方法
    this.then = function(onFulfilled,onRejected){
        // 返回一个新的Promise对象  constructor构造器
        return new self.constructor(function(resolve,reject){
            if(state === true){
                // param是promise对象完成后的结果
                resolve(onFulfilled(param))
            }
            else if(state === false)
            {
                reject(onRejected(param))
            }
            // 没有执行完毕
            else {
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected
            }
        })
    }

}
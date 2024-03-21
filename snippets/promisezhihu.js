const CustomPromise = class  {
    // 定义一个静态的全部状态的map
    static STATUS_MAP = {
      Pending: 'Pending',
      Fulfilled: 'Fulfilled',
      Rejected: 'Rejected',
    }
    // Promise的状态
    status = CustomPromise.STATUS_MAP.Pending
    // then方法传入的onfulfilled函数组成的列表
    onfulfilled = []
    // then方法传入的onrejected函数组成的列表
    onrejected = []
    
    result = undefined
    reason = undefined
  
    // then方法返回的Promise的参数executor的回调函数resolve组成的列表
    resolve = []
    // then方法返回的Promise的参数executor的回调函数reject组成的列表
    reject = []
    // then方法返回的Promise列表
    promises = []
  
    /**
     * 构造函数
     * @param {function} executor Promise执行器
     * @returns
     */
    constructor (executor) {
      if (typeof executor === 'undefined' || typeof executor !== 'function') {
        throw new TypeError('CustomPromise resolver is not a function')
      }
  
      /**
       * 设置成功的result以及顺序执行onfulfilled函数
       * @param {*} result 
       */
      const setResult = (result) => {
        this.result = result
        this.status = CustomPromise.STATUS_MAP.Fulfilled
        if (this.onfulfilled.length > 0) {
          this.onfulfilled.forEach((onfulfilled_item, index) => {
            this.excuteOnfulfilled(onfulfilled_item, index, this.result)
          })
        }
      }
  
      /**
       * 设置失败的reason以及顺序执行onrejected函数
       * @param {*} result 
       */
      const setReason= (reason) => {
        this.reason = reason
        this.status = CustomPromise.STATUS_MAP.Rejected
        if (this.onrejected.length > 0) {
          this.onrejected.forEach((onrejected_item, index) => {
            this.excuteOnrejected(onrejected_item, index, this.reason)
          })
        }
      }
      try {
        const resolve = (result) => {
          if (this.status === CustomPromise.STATUS_MAP.Pending) { // Promise内部状态具有凝固效果，一但确定了就不再发生变化
            if (result !== null && (typeof result === 'function' || typeof result === 'object')) {
              let called = false
              try {
                const { then } = result // resolve方法可以接受一个thenable对象
                if (typeof then === 'function') {
                  const then_ = then.bind(result)
                  then_(res => {
                    if (called) return // 确保thenable对象then方法的resolvePromise回调函数只执行一次
                    called = true
                    setResult(res)
                  }, err => {
                    if (called) return
                    called = true
                    setReason(err)
                  })
                } else {
                  setResult(result)
                }
              } catch (error) {
                if (called) return
                setReason(error)
              }
            } else {
              setResult(result)
            }
          }
        }
        const reject = (reason) => {
          if (this.status === CustomPromise.STATUS_MAP.Pending) {
            setReason(reason)
          }
        }
  
        const executor_ = executor.bind(null, resolve, reject) // 为执行器绑定参数
        executor_() // 执行器执行（同步）
      } catch (e) {
        if (this.status === CustomPromise.STATUS_MAP.Fulfilled || this.status === CustomPromise.STATUS_MAP.Rejected) return
        setReason(e)
      }
  
    }
  
    /**
     * then方法
     * @param {function} onfulfilled 
     * @param {function} onrejected 
     * @returns 
     */
    then (onfulfilled, onrejected) {
      this.onfulfilled.push(onfulfilled)
      if (this.status === CustomPromise.STATUS_MAP.Fulfilled) { // Promise对象在状态凝固之后仍然是可以调用then方法的
        this.onfulfilled.forEach((item, index) => {
          if (item === onfulfilled) {
            this.excuteOnfulfilled(item, index, this.result)
          }
        })
      }
      this.onrejected.push(onrejected)
      if (this.status === CustomPromise.STATUS_MAP.Rejected) {
        this.onrejected.forEach((item, index) => {
          if (item === onrejected) {
            this.excuteOnrejected(item, index, this.reason)
          }
        })
      }
      const customPromise = new CustomPromise((resolve, reject) => {
        this.resolve.push(resolve)
        this.reject.push(reject)
      })
      this.promises.push(customPromise)
      return customPromise // then方法返回新的Promise对象
    }
  
    /**
     * 执行onfulfilled函数
     * @param {function} onfulfilled 
     * @param {number} index 
     * @param {*} result 
     */
    excuteOnfulfilled (onfulfilled, index, result) {
      if (typeof onfulfilled === 'function') {
        setTimeout(() => {
          let x = null
          try {
            x = onfulfilled(result)
          } catch (error) {
            this.reject[index](error)
          }
  
          if (x === this.promises[index]) {
            this.reject[index](new TypeError('[onFulfilled] return the same value with [then] function'))
          }
          this.resolutionProcedure(x, this.promises[index], this.resolve[index], this.reject[index])
        }, 0)
      } else {
        if (this.status === CustomPromise.STATUS_MAP.Fulfilled) {
          setTimeout(() => {
            this.resolve[index](result)
          }, 0)
        }
      }
    }
  
    /**
     * 执行onrejected函数
     * @param {function} onrejected 
     * @param {number} index 
     * @param {*} reason 
     */
    excuteOnrejected (onrejected, index, reason) {
      if (typeof onrejected === 'function') {
        setTimeout(() => {
          let x = null
          try {
            x = onrejected(reason)
          } catch (error) {
            this.reject[index](error)
          }
  
          if (x === this.promises[index]) {
            this.reject[index](new TypeError('[onrejected] return the same value with [then] function'))
          }
          this.resolutionProcedure(x, this.promises[index], this.resolve[index], this.reject[index])
        }, 0)
      } else {
        if (this.status === CustomPromise.STATUS_MAP.Rejected) {
          setTimeout(() => {
            this.reject[index](reason)
          }, 0)
        }
      }
    }
  
    /**
     * Promise 解决过程（重点）
     * @param {*} x then方法回调函数resolvePromise执行后返回的值
     * @param {CustomPromise} promise then方法返回的Promise
     * @param {function} resolve then方法返回的Promise的参数executor的回调函数resolve
     * @param {function} reject then方法返回的Promise的参数executor的回调函数reject
     * @returns 
     */
    resolutionProcedure (x, promise, resolve, reject) {
      if (x instanceof CustomPromise) {
        x.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      } else if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        let called = false
        try {
          const { then } = x // then方法回调函数resolvePromise执行后返回的值是一个thenable对象，执行then方法
          if (typeof then === 'function') {
            const then_ = then.bind(x)
            const resolvePromise = y => {
              if (called) return // 确保resolvePromise只执行一次
              called = true
              // then方法回调函数resolvePromise执行后返回的值是一个thenable对象，执行then方法后，如果then方法的resolvePromise参数被回调
              // 对resolvePromise参与回调的参数y继续执行Promise 解决过程，也就是调用resolutionProcedure方法
              this.resolutionProcedure(y, promise, resolve, reject)
            }
            const rejectPromise = r => {
              if (called) return
              called = true
              reject(r)
            }
            then_(resolvePromise, rejectPromise)
          } else {
            resolve(x)
          }
        } catch (error) {
          if (called) return
          reject(error)
        }
      } else {
        resolve(x)
      }
    }
  
    /**
     * 静态的resolved方法，返回一个已经成功的Promise
     * @param {*} result 
     * @returns 
     */
    static resolved (result) {
      return new CustomPromise((resolve, reject) => {
        if (result !== null && (typeof result === 'function' || typeof result === 'object')) {
          let called = false
          try {
            const { then } = result
            if (typeof then === 'function') {
              const then_ = then.bind(result)
              then_(res => {
                if (called) return
                called = true
                resolve(res)
              }, err => {
                called = true
                reject(err)
              })
              
            } else {
              resolve(result)
            }
          } catch (error) {
            if (called) return
            reject(error)
          }
          
        } else {
          resolve(result)
        }
      })
    }
  
    /**
     * 静态的rejected方法，返回一个已经失败的Promise
     * @param {*} result 
     * @returns 
     */
    static rejected (reason) {
      return new CustomPromise((resolve, reject) => {
        reject(reason)
      })
    }
  
    /**
     * 
     * @returns 测试用
     */
    static deferred () {
      const result = {};
      result.promise = new CustomPromise(function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      });
      return result;
    }
  }
  
module.exports = CustomPromise;
  
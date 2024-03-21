//  Promise


function Promise(constr){
	
	this.promiseState = 'pedding';
	this.promiseResult = undefined;
	this.callback = [];
	
	let _this = this
	function resolve(value){
		if(_this.promiseState == 'pedding') {
			_this.promiseState = 'fulfilled';
			_this.promiseResult = value;
			_this.callback.forEach(item => {
				item.onResolve(value)
			});
		}
	}
	
	function reject(value){
		if(_this.promiseState == 'pedding') {
			_this.promiseState = 'rejected';
			_this.promiseResult = value;
			debugger
			_this.callback.forEach(item => {
				item.onReject(value)
			});
		}
	}
	
	// function 
	try{
		constr(resolve, reject);
	} catch(e){
		reject(e)
	}
	
}

Promise.prototype.then = function(onResolve, onReject){
	
	if(typeof onResolve !== 'function'){
		onResolve = value => value
	}
	if(typeof onReject !== 'function'){
		onReject = reason => {
			throw reason;
		}
	}
	
	return new Promise((resolve, reject) => {
		if(this.promiseState == 'fulfilled'){
			// if(this.promiseResult)
			if(this.promiseResult instanceof Promise) {
				if(this.promiseResult.promiseState == 'fulfilled') {
					resolve(onResolve(this.promiseResult.promiseResult))
				} else if(this.promiseResult.promiseState == 'rejected'){
					resolve(onReject(this.promiseResult.promiseResult))
				}
			} else {
				resolve(onResolve(this.promiseResult))
			}
			// onResolve(this.promiseResult);
		} else if(this.promiseState == 'rejected'){
			if(this.promiseResult instanceof Promise) {
				if(this.promiseResult.promiseState == 'fulfilled') {
					resolve(this.promiseResult.promiseResult)
				} else if(this.promiseResult.promiseState == 'rejected'){
					reject(this.promiseResult.promiseResult)
				}
			} else {
				resolve(onReject(this.promiseResult))
			}
			// onReject(this.promiseResult);
		} else if(this.promiseState == 'pedding'){
			this.callback.push({
				onResolve: () => {
					resolve(onResolve(this.promiseResult))
				}, 
				onReject: () => {
					resolve(onReject(this.promiseResult))
				}
			})
		}
	})
}

Promise.prototype.catch = function(onReject) {
	return this.then(undefined, onReject)
}


Promise.defer = Promise.deferred = function(){
	let dfd = {};
	dfd.promise = new Promise((resolve, reject)=>{
		dfd.resolve = resolve;
		dfd.reject = reject;
	});
	return dfd;
  }
  module.exports =  Promise
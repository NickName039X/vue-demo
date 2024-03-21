/**
 * 
  2.1.2.1: When fulfilled, a promise: must not transition to any other state.
  √ already-fulfilled
  √ immediately-fulfilled
  √ eventually-fulfilled
  √ trying to fulfill then immediately reject
  √ trying to fulfill then reject, delayed
  √ trying to fulfill immediately then reject delayed

2.1.3.1: When rejected, a promise: must not transition to any other state.
  √ already-rejected
  √ immediately-rejected
  √ eventually-rejected
  √ trying to reject then immediately fulfill
  √ trying to reject then fulfill, delayed
  √ trying to reject immediately then fulfill delayed

2.2.1: Both `onFulfilled` and `onRejected` are optional arguments.
  2.2.1.1: If `onFulfilled` is not a function, it must be ignored.
    applied to a directly-rejected promise
      √ `onFulfilled` is `undefined`
      √ `onFulfilled` is `null`
      √ `onFulfilled` is `false`
      √ `onFulfilled` is `5`
      √ `onFulfilled` is an object
    applied to a promise rejected and then chained off of
      √ `onFulfilled` is `undefined`
      √ `onFulfilled` is `null`
      √ `onFulfilled` is `false`
      √ `onFulfilled` is `5`
      √ `onFulfilled` is an object
  2.2.1.2: If `onRejected` is not a function, it must be ignored.
    applied to a directly-fulfilled promise
      √ `onRejected` is `undefined`
      √ `onRejected` is `null`
      √ `onRejected` is `false`
      √ `onRejected` is `5`
      √ `onRejected` is an object
    applied to a promise fulfilled and then chained off of
      √ `onFulfilled` is `undefined`
      √ `onFulfilled` is `null`
      √ `onFulfilled` is `false`
      √ `onFulfilled` is `5`
      √ `onFulfilled` is an object

2.2.2: If `onFulfilled` is a function,
  2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument.
    √ already-fulfilled
    √ immediately-fulfilled
    √ eventually-fulfilled
  2.2.2.2: it must not be called before `promise` is fulfilled
    √ fulfilled after a delay
    √ never fulfilled
  2.2.2.3: it must not be called more than once.
    √ already-fulfilled
    √ trying to fulfill a pending promise more than once, immediately
    √ trying to fulfill a pending promise more than once, delayed
    √ trying to fulfill a pending promise more than once, immediately then delayed
    √ when multiple `then` calls are made, spaced apart in time
    √ when `then` is interleaved with fulfillment

2.2.3: If `onRejected` is a function,
  2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument.
    √ already-rejected
    √ immediately-rejected
    √ eventually-rejected
  2.2.3.2: it must not be called before `promise` is rejected
    √ rejected after a delay
    √ never rejected
  2.2.3.3: it must not be called more than once.
    √ already-rejected
    √ trying to reject a pending promise more than once, immediately
    √ trying to reject a pending promise more than once, delayed
    √ trying to reject a pending promise more than once, immediately then delayed
    √ when multiple `then` calls are made, spaced apart in time
    √ when `then` is interleaved with rejection

2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code.
  `then` returns before the promise becomes fulfilled or rejected
    √ already-fulfilled
    √ immediately-fulfilled
    √ eventually-fulfilled
    √ already-rejected
    √ immediately-rejected
    √ eventually-rejected
  Clean-stack execution ordering tests (fulfillment case)
    √ when `onFulfilled` is added immediately before the promise is fulfilled
    √ when `onFulfilled` is added immediately after the promise is fulfilled
    √ when one `onFulfilled` is added inside another `onFulfilled`
    √ when `onFulfilled` is added inside an `onRejected`
    √ when the promise is fulfilled asynchronously
  Clean-stack execution ordering tests (rejection case)
    √ when `onRejected` is added immediately before the promise is rejected
    √ when `onRejected` is added immediately after the promise is rejected
    √ when `onRejected` is added inside an `onFulfilled`
    √ when one `onRejected` is added inside another `onRejected`
    √ when the promise is rejected asynchronously

2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value).
  strict mode
    √ fulfilled
    √ rejected
  sloppy mode
    √ fulfilled
    √ rejected

2.2.6: `then` may be called multiple times on the same promise.
  2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`.
    multiple boring fulfillment handlers
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    multiple fulfillment handlers, one of which throws
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    results in multiple branching chains with their own fulfillment values
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` handlers are called in the original order
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      even when one handler is added inside another handler
        √ already-fulfilled
        √ immediately-fulfilled
        √ eventually-fulfilled
  2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`.
    multiple boring rejection handlers
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    multiple rejection handlers, one of which throws
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    results in multiple branching chains with their own fulfillment values
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` handlers are called in the original order
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
      even when one handler is added inside another handler
        √ already-rejected
        √ immediately-rejected
        √ eventually-rejected

2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)`
  √ is a promise
  2.2.7.1: If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure `[[Resolve]](promise2, x)`
    √ see separate 3.3 tests
  2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason.
    The reason is `undefined`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is `null`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is `false`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is `0`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is an error
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is an error without a stack
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is a date
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is an object
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is an always-pending thenable
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is a fulfilled promise
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    The reason is a rejected promise
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
  2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value.
    `onFulfilled` is `undefined`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` is `null`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` is `false`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` is `5`
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` is an object
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
    `onFulfilled` is an array containing a function
      √ already-fulfilled
      √ immediately-fulfilled
      √ eventually-fulfilled
  2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason.
    `onRejected` is `undefined`
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` is `null`
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` is `false`
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` is `5`
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` is an object
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected
    `onRejected` is an array containing a function
      √ already-rejected
      √ immediately-rejected
      √ eventually-rejected

2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason.
  √ via return from a fulfilled promise
  √ via return from a rejected promise

2.3.2: If `x` is a promise, adopt its state
  2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected.
    √ via return from a fulfilled promise
    √ via return from a rejected promise
  2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value.
    `x` is already-fulfilled
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `x` is eventually-fulfilled
      √ via return from a fulfilled promise
      √ via return from a rejected promise
  2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason.
    `x` is already-rejected
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `x` is eventually-rejected
      √ via return from a fulfilled promise
      √ via return from a rejected promise

2.3.3: Otherwise, if `x` is an object or function,
  2.3.3.1: Let `then` be `x.then`
    `x` is an object with null prototype
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `x` is an object with normal Object.prototype
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `x` is a function
      √ via return from a fulfilled promise
      √ via return from a rejected promise
  2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason.
    `e` is `undefined`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is `null`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is `false`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is `0`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is an error
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is an error without a stack
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is a date
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is an object
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is an always-pending thenable
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is a fulfilled promise
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `e` is a rejected promise
      √ via return from a fulfilled promise
      √ via return from a rejected promise
  2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise`
    Calls with `x` as `this` and two function arguments
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    Uses the original value of `then`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)`
      `y` is not a thenable
        `y` is `undefined`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is `null`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is `false`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is `5`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an object
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an array
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
      `y` is a thenable
        `y` is a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
      `y` is a thenable for a thenable
        `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that tries to fulfill twice for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is a thenable that fulfills but then throws for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an already-fulfilled promise for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an already-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an eventually-fulfilled promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then`
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an already-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
        `y` is an eventually-fulfilled promise for an eventually-rejected promise
          `then` calls `resolvePromise` synchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
          `then` calls `resolvePromise` asynchronously
            √ via return from a fulfilled promise
            √ via return from a rejected promise
    2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r`
      `r` is `undefined`
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is `null`
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is `false`
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is `0`
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is an error
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is an error without a stack
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is a date
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is an object
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is an always-pending thenable
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is a fulfilled promise
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      `r` is a rejected promise
        `then` calls `rejectPromise` synchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `then` calls `rejectPromise` asynchronously
          √ via return from a fulfilled promise
          √ via return from a rejected promise
    2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
      calling `resolvePromise` then `rejectPromise`, both synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` synchronously then `rejectPromise` asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` then `rejectPromise`, both asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` then `resolvePromise`, both synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` synchronously then `resolvePromise` asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` then `resolvePromise`, both asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` twice synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` twice, first synchronously then asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` twice, both times asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` twice synchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` twice, first synchronously then asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      calling `rejectPromise` twice, both times asynchronously
        √ via return from a fulfilled promise
        √ via return from a rejected promise
      saving and abusing `resolvePromise` and `rejectPromise`
        √ via return from a fulfilled promise
        √ via return from a rejected promise
    2.3.3.3.4: If calling `then` throws an exception `e`,
      2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it.
        `resolvePromise` was called with a non-thenable
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `resolvePromise` was called with an asynchronously-fulfilled promise
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `resolvePromise` was called with an asynchronously-rejected promise
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `rejectPromise` was called
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `resolvePromise` then `rejectPromise` were called
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `rejectPromise` then `resolvePromise` were called
          √ via return from a fulfilled promise
          √ via return from a rejected promise
      2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason.
        straightforward case
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `resolvePromise` is called asynchronously before the `throw`
          √ via return from a fulfilled promise
          √ via return from a rejected promise
        `rejectPromise` is called asynchronously before the `throw`
          √ via return from a fulfilled promise
          √ via return from a rejected promise
  2.3.3.4: If `then` is not a function, fulfill promise with `x`
    `then` is `5`
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `then` is an object
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `then` is an array containing a function
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `then` is a regular expression
      √ via return from a fulfilled promise
      √ via return from a rejected promise
    `then` is an object inheriting from `Function.prototype`
      √ via return from a fulfilled promise
      √ via return from a rejected promise

2.3.4: If `x` is not an object or function, fulfill `promise` with `x`
  The value is `true` with `Boolean.prototype` modified to have a `then` method
    √ already-fulfilled
    √ immediately-fulfilled
    √ eventually-fulfilled
    √ already-rejected
    √ immediately-rejected
    √ eventually-rejected
  The value is `1` with `Number.prototype` modified to have a `then` method
    √ already-fulfilled
    √ immediately-fulfilled
    √ eventually-fulfilled
    √ already-rejected
    √ immediately-rejected
    √ eventually-rejected


872 passing (49s)
 */
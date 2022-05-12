// A Promise is a function of:
// (resolve fun, reject fun) => { preprocessing logic }
const pr = new Promise(
    (resolveFun, rejectFun) => {
        if (true) {
            resolveFun('preprocessed value');
        } else {
            rejectFun('preprocessed value');
        }
    });

// each .then() we can provide the (resolve fun, reject fun)
pr.then(
    (x) => { console.log('this is resolve fun ', x); },
    (x) => { console.log('this is reject fun ', x); }
);

// if inside the return then we can chain promises, otherwise p2 will be undefined
pr.then(
    () => { return pr; },
    () => { return pr; }
).then(
    (x) => { console.log('this is chained resolve fun ', x); },
    (x) => { console.log('this is chained reject fun ', x); }
);

// can resolve immediately
const p1 = Promise.resolve('foo');

// can throw instead of reject
const p3 = new Promise(() => {});

// trailing .catch() handles rejection
p3.then(() => { }) // resolve "defined"
    .then(() => { throw new Error() }) // resolve not defined, error thrown // TODO why does JS skip this?
    .then(() => { console.log('never reached')})
    .catch(() => console.log('error'));
// => p3 error: rejected in the Promise


// A fulfilled promise
const p4 = new Promise((resolve, reject) => {
    resolve(4);
});


// A Promise that times out after ms milliseconds
const delay = (ms) => {
    return
}

// Whichever Promise fulfills first is the result passed to our handler
const p5 = Promise.race(
    [
        Promise.resolve('foo'),
        new Promise((resolve) => {setTimeout(resolve, 9000);}).then(() => 'bar')
    ]
)

p5.then((x) => {console.log(x);})
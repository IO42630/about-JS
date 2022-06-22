const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('http://localhost:3000')
    .then(function (response) {
        return response.text();
    }).then(
    (text) => console.log(text)
);

// define an async func and exe it.
(async () => {
    const response = await fetch('http://localhost:3000');
    const br = await response.text();
    console.log(br);
})();

// PROMISIFY START
const callBackFunc = (text, callback) => callback(text);
callBackFunc('Hello Callback.', (x) => console.log(x));

const promiseFunc = (text) => {
    return new Promise((resolve) => callBackFunc(
        text, callback => resolve(callback)
    ))
}
promiseFunc('hello B').then((x) => console.log(x));
// PROMISIFY END

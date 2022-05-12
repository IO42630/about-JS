// Through exception handling we can catch and manage errors rather then
// crashing by surrounding problem code in a try block and handling it
// in a catch block


let throwSomeError = function () {
    throw new RangeError()
}

try {
    throwSomeError()
} catch (ex) {
    if (ex instanceof RangeError) {
        //
    }
}

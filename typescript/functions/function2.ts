function withOptionalParam(foo?: string, bar?: string) {
    return 2;
}

// params are filled consecutively
withOptionalParam();
withOptionalParam('foo');
withOptionalParam('foo', 'bar');



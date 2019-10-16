// flow静态代码检测工具，出自facebook
//@flow
function concat (a: ?string, b: string) {
    return a;
}

concat ("foo", "bar"); // Works!
concat (null, 'bbb');  // Works!
concat (undefined, 'bbb');  // Works!


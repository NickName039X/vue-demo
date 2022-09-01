// flow静态代码检测工具，出自facebook
//@flow

//Maybe types string/null/undefined/void
function concat (a: ?string, b: ?string) {
    return a;
}

concat ("foo", "bar"); // Works!
concat (null, 'bbb');  // Works!
concat (undefined, 'bbb');  // Works!
concat ("foo",null);  // Works!
concat ("foo");  // Works!

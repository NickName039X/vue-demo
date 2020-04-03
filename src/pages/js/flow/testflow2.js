//@flow
function truthy(a, b): boolean %checks {
    return !!a && !!b;
}

function lianjie(a: ?string, b: ?string): string {
    if (truthy(a, b)) {
        return a + b;
    }
    return '';
}

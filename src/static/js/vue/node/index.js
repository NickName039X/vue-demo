const isInstalled = packageName => {
    try {
        require.resolve(packageName);

        return true;
    } catch (err) {
        return false;
    }
};
console.log(isInstalled('webpack'));
console.log(isInstalled('webpack-cli'));
console.log(isInstalled('react'));

//分割线

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
})

function completer(line) {
    const completions = '.help .error .exit .quit .q'.split(' ');
    const hits = completions.filter((c) => c.startsWith(line));
    // Show all completions if none found
    return [hits.length ? hits : completions, line];
}

rl.on('line', (line) => {
    console.log(`监听--Received: ${line}`);
});
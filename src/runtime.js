const { performance } = require('perf_hooks');

function analyseAsyncFunction(asyncFunc) {
    return async function f(...args) {
        const time = performance.now();
        const res = await asyncFunc(...args);
        const end = performance.now();
        console.log(`${asyncFunc.name}: Benchmark took ${end - time} ms`);
        return res;
    }
}

module.exports = { analyseAsyncFunction };

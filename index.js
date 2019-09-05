const { analyseAsyncFunction } = require('./src/runtime');

const sleep = (milliseconds) => {
    var start = new Date().getTime();
    for (var i = 0; i < 1e1000; i++) {

        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

analyseAsyncFunction(sleep)(5000)

module.exports = { analyseAsyncFunction };
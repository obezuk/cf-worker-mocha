import 'mocha';

import 'mocha-loader!./test/test.js';

var testResults;

async function mochaRun() {
    return new Promise(function (accept, reject) {
        var runner = mocha.run(function () {
            testResults = runner.testResults;
            accept();
        });
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleMochaRequest(event.request))
});

async function handleMochaRequest(request) {

    if (!testResults) {
        await mochaRun();
    }

    var headers = new Headers({
        "content-type": "application/json"
    })

    var statusCode = 200;

    if (testResults.failures != 0) {
        statusCode = 500;
    }

    return new Response(JSON.stringify(testResults), {
        "status": statusCode,
        "headers": headers
    });

}

Object.assign(global, require('exports-loader?handleRequest,addition!./worker.js'));
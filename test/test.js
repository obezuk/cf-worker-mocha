const assert = require('assert')

before(async function() {
    Object.assign(global, new (require('@dollarshaveclub/cloudworker'))(require('fs').readFileSync('worker.js', "utf8")).context);
});

describe('Worker Test', async function() {

    it('returns a body that says hello', async function () {
        var url = new URL('https://example.com');
        var req = new Request(url);
        var res = await handleRequest(req);
        var body = await res.text();
        assert.equal(body, 'Hello World!');
    });

    it('Addition', async function() {
        var res = await addition(1, 1);
        assert.equal(res, 2);
    });

})
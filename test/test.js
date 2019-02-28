var assert = require('assert')

let Headers, Request, Response, fetch, URL, handleRequest, addition;

before(async function() {

    var fs = require('fs')
    var Cloudworker = require('@dollarshaveclub/cloudworker');
    var cw = new Cloudworker(fs.readFileSync('worker.js', "utf8"));

    Headers = cw.context.Headers;
    Request = cw.context.Request;
    Response = cw.context.Response;
    fetch = cw.context.fetch;
    URL = cw.context.URL;
    handleRequest = cw.context.handleRequest;
    addition = cw.context.addition;

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
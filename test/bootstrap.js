before(async function () {
    Object.assign(global, new (require('@dollarshaveclub/cloudworker'))(require('fs').readFileSync('worker.js', "utf8")).context);
});
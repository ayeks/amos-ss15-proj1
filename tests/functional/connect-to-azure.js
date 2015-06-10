define([
    'intern!object',
    'intern/chai!assert',
    'require'
], function (registerSuite, assert, require) {
    registerSuite({
        name: 'index-connect-to-azure',

        // before the suite starts
        setup: function () {
            return this.remote
                .get(require.toUrl('http://amos-proj1-test.azurewebsites.net/'));
        }
    });
});
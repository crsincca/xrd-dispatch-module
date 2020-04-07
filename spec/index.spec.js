/* global require,describe,it,expect */
'use strict';

describe('Dispatcher', function () {

    var dispatcher = require('../index.js');

    it('should dispatch messages with payload', function () {
        dispatcher.on('test-message', function(payload) {
            expect(payload).toEqual(12345);
        });

        dispatcher.emit('test-message', 12345);
    });

});

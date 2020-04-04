'use strict';

import dispatcher from './index';

dispatcher.on('test-message', function(payload) {
    if (payload !== 12345) {
        throw 'error';
    }
});

dispatcher.emit('test-message', 12345);
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('myEvent', (p1, p2) => {
    console.log('Callback is execute in responce of custom event');
    console.log(`Its parameter are ${p1} and ${p2}`);
});

customEmitter.emit('myEvent', 'arg1', 'arg2');
customEmitter.emit('myEvent', 'arg3', 'arg4');


const pirateSpeak = require('pirate-speak')
const additions = {
    car: 'vessel',
    truck: 'vessel',
    suv: 'vessel',
    amazon: 'arrtozone'
}

pirateSpeak.dictionary.this = 'this'

for (var key in additions) {
    if (pirateSpeak.dictionary[key] === undefined) {
        pirateSpeak.dictionary[key] = additions[key]

    }
}














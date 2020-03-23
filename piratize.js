const pirateSpeak = require('pirate-speak')
const additions = {
    car: 'boat',
    truck: 'ship',
    suv: 'vessel',
    rear: 'aft',
    front: 'stern',
    left: 'port',
    right: 'starboard',
    steering: 'helm',
    interior: 'belowdecks',
    exterior: 'hull',
    amazon: 'arrtozone'
}

pirateSpeak.dictionary.this = 'this'

function addToDictionary(word) {
    if (word && typeof word === 'String') {
        additions[word] = word
    }
    for (var key in additions) {
        if (pirateSpeak.dictionary[key] === undefined) {
            pirateSpeak.dictionary[key] = additions[key]
        }

    }
    console.log('additions made')
}

module.exports.addToDictionary = addToDictionary
















const pirateSpeak = require('pirate-speak')
const additions = {
    car: 'vessel',
    truck: 'vessel',
    suv: 'vessel'
}

pirateSpeak.dictionary.this = 'this'

for (var key in additions) {
    if (pirateSpeak.dictionary[key] === undefined) {
        pirateSpeak.dictionary[key] = additions[key]

    }
}







const piratize = function (text) {
    return pirateSpeak.translate(text)

}




module.exports.piratize = piratize


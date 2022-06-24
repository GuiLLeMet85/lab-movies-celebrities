//  Add your code here

const moongose = require ('mongoose')
const { Schema } = moongose;

const celebritySchema = new Schema ({
    name: String,
    occupation: String,
    catchPhrase: String
});

const Celebrity = moongose.model('Celebrity', celebritySchema);
module.exports = Celebrity;
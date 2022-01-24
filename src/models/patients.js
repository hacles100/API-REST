const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientsSchema = new Schema ({
    name: String,
    age: Number
});

//modelo de pacientes do mongo
module.exports = mongoose.model('Patients', PatientsSchema);
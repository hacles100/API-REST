const patients = require('../models/patients');
const PatientModel = require('../models/patients');

const transformer = patient => ({

        type: 'patients',
        id: patient.id,
        attributes: {
            name: patient.name,
            age: patient.age,
        },
        links: {
            self: `/api/v1/patients/${patient.id}`
        }
});


const getAll = async (req, h) => {
  const patients =  await PatientModel.find({});  // lista todos os pacientes
  return { data: patients.map(transformer) };
};


const find = async (req, h) => {
    const patient = await PatientModel.findById(req.params.id);
    return { data: transformer(patient) }
};


const save = async (req, h) => {

    const { name, age } = req.payload;

    const patient = new PatientModel;
    patient.name = name;
    patient.age = age;

    await patient.save();

    return h.response(transformer(patient)).code(201);
   
};

const remove = async (req, h) => {
    await PatientModel.findOneAndDelete({ _id: req.params.id });
    return h.response().code(204);
};

module.exports = {
    getAll,
    save,
    remove,
    find
};
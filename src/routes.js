const patientController = require('./controllers/patients');

module.exports = [
    {   
      method: 'GET',
      path: '/api/v1/patients',
      handler: patientController.getAll  
   },

   {
       method: 'GET',
       path: '/api/v1/patients/{id}',
       handler: patientController.find
   },

   {
       method: 'POST',
       path: '/api/v1/patients',
       handler: patientController.save
   },

   {
      method: 'DELETE',
      path: '/api/v1/patients/{id}',
      handler: patientController.remove,
      options: {
          cors: true
      }
   }

  ]
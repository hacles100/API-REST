'use strict';


require('./services/mongo');
const Hapi = require('@hapi/hapi');  // importação do Hapi
const routes = require('./routes');



// Inicializaçao do meu server na porta 3000
const init = async () => {  
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

// definição da rota
    server.route(routes);

    await server.start(); 
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {  // erro no meu app

    console.log(err);
    process.exit(1); // encerra meu processo no nodeJS
});

init();
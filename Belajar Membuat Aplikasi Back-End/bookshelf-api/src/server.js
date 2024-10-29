const Hapi = require('@hapi/hapi');
const fs = require('fs');
const path = require('path');


const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // Load all route files dynamically
    // eslint-disable-next-line no-undef
    const routeFiles = fs.readdirSync(path.join(__dirname, 'routes')).filter(file => file.endsWith('.js'));
    for (const file of routeFiles) {
        const routes = require(`./routes/${file}`);
        server.route(routes);
    }

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();
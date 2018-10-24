const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

class SwaggerConfiguration{
    static getSwaggerUi() {
        return swaggerUi 
    };
    
    static swaggerDoc() { 
        return  swaggerDocument
    };

    // Initialize the Swagger middleware
    static configureMiddleware(app) {
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    };
}

module.exports = SwaggerConfiguration;


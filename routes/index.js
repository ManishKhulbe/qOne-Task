// const responseHandler = require('../responseHandler');
// const basicAuth = require('../middleware/basicAuth');
const errorHandler = require("../middleware/error");


const v1Route = require('../module/v1/index.routes');

module.exports = function(app){
    
    // Attach V1 Routes
    // app.use(basicAuth.basicAuthentication);
    app.use('/api/v1', v1Route);
    app.use(() => errorHandler);
    // Attach ErrorHandler to Handle All Errors
    // app.use(responseHandler.handleError);

}
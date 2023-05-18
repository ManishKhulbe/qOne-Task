
// const basicAuth = require('../middleware/basicAuth');
const v1Route = require('../module/v1/index.routes');
const responseHandler = require('../responseHandler');

module.exports = function(app){
    // Attach V1 Routes
    app.use('/api/v1', v1Route);
    // Attach ErrorHandler to Handle All Errors
    app.use(responseHandler.handleError);
}
import errorHandler from 'errorhandler';


import app from './app';

const server = app.listen(app.get("port"), () => {
    console.log("App is running on %d", app.get("port"))
})


export default server;
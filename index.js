const buildApp = require('./scr/app')
const config = require('./scr/config')

const startApp = async () => {
    const appOption = {
        logger: true
    }
    const app = buildApp()

    app.listen(config.port , config.hostname)
}

startApp()
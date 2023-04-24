import app from "./app";

function main() {
    try {
        app.listen(3002, 'localhost', async () => {
            console.log('Server INICIADO!')
        })
    } catch (err) {
        console.error('Server com ERROR!', err)
    }
}

main()
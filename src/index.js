import app from './app'
//import './db/connection'
const port = app.get('port')
app.listen(port)

console.log(`server running on ${port}`)

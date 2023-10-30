// import json server
const jsonserver = require('json-server')
// import cros
const cors=require('cors')


// create json server
const server=jsonserver.create()

// json type data -->  js data - before resolve  -->'middlewares'
const middleware=jsonserver.defaults()

// create router
const router=jsonserver.router('db.json')


// apply in server
server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log(`____Json Server Started At Port: ${PORT}_____`);
})
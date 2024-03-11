const jsonServer=require('json-server')
const EMSServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT

EMSServer.use(middleware)
EMSServer.use(router)

EMSServer.listen(PORT,()=>{
    console.log(`EMS server started at port ${PORT}`);
})
const cds = require('@sap/cds')

const {Travel} = cds.entities("travel")

const travelService = (srv)=>{
    try {
        srv.on('CREATE',"insertTravel",async(req)=>{
            const data = req.data
            const result = await cds.tx(req).run(INSERT.into(Travel).entries(data))
            return result;
           })    
    } catch (error) {
       console.log("error is :"+error); 
    }
}
    
module.exports = travelService
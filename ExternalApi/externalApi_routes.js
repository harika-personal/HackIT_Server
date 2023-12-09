import * as dao from "./exteralApi_dao.js";

function ExternalApiRoutes(app) {

    const getExternalEvents = async (request, response) => {
   

        try {
            const externalEventsDetails = await dao.getAllEvents();
            response.json(externalEventsDetails);
            
        }
        catch (error){
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
        
        
    };   
    app.get("/getEvents", getExternalEvents);

}
export default ExternalApiRoutes;
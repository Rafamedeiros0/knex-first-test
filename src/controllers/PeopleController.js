const connection = require('../database/connection');

module.exports = {
    async index (request,response){
        const ongs = await connection('people').select('*');
        return response.json(ongs);
    },
    async create (request,response){
        const { gbid, name, photo} = request.body;

        await connection('people').insert({
            gbid,
            name,
            photo,            
        })
        
        return response.json({ gbid });
    }
};


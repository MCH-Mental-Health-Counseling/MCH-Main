const chatbot = require('../chatbot/chatbot');

module.exports = app =>{
  app.get('/', (req,res)=>{
    res.send({'hello':'jonny'})
  });
  app.post('/api/df_text_query', async(req,res)=>{
    /*
    console.log(req)
    const {text,userId}=req.body;
    const resultQuery = await chatbot.textQuery(text, userId);
    console.log(resultQuery)
    const resObj = {
    fulfillmentText: resultQuery.fulfillmentText
    };
    res.send(resultQuery)
    */
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult);
  });

  app.post('/api/df_event_query',async(req,res)=>{
    //let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
    //res.send(responses[0].queryResults);
    let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
    res.send(responses[0].queryResult);
  });
}
const chatbot = require('../chatbot/chatbot')
module.export = app =>{
  app.get('text_query', async(req,res)=>{
    console.log(req)
    const {text, userId} = req.body;
    const resultQuery = await chatbot.textQuery(text, userId)
    console.log(resultQuery)
    res.send("Text Query")
  })
/*
  app.post('/event_query', (req,res)=>{
    console.log(req)
    res.send("Text Query")
  })
  */
}
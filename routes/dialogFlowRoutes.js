const dialogflow = require{'dialogflow'};
const config = require('../config/keys');

const sessionClient = new dialogflow.SessionClient();

const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);

module.exports = app =>{
    app.get('/', (req,res)=>{
        res.send({'Hello everyone,': 'welcome to MCH'});
    });
    
    app.post('/api/df_text_query', (req,res)=>{
        const request = {
            session: sessionPath, 
            queryInput: {
              text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: config.dialogFlowSessionLanguageCode,
              },
            },
          };
        res.send({'do':'text query'})
    });
    
    app.post('/api/df_event_query',(req,res)=>{
        res.send({'do':'event query'})
    });
}
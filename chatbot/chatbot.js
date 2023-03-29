'use strict'

const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/keys');
const {struct} = require('pb-util');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
  client_email: config.googleClientEmail,
  private_key: config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
/*const sessionPath = sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
);*/


module.exports = {
    textQuery: async function(text,userID, parameters = {}){
        let sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId+userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload:{
                    data:parameters
                }
            }
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },

    eventQuery: async function(event,userID, parameters = {}){
        let sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId+userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: struct.encode(parameters),
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload:{
                    data:parameters
                }
            }
        };
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },


    handleAction: function(responses){
        return responses;
    }
}



/*
const textQuery = async(userText, userId)=>{
    const request ={
        session: sessionPath,
        queryInput:{
            text:{
                text:userText,
                languageCode:languageCode
            }
        }
    }

    try{
        const response = await sessionClient.detectIntent(request)
        console.log(response[0])
        return response
    }catch(err){
        console.log(err)
        return err
    }
}

module.exports ={
    textQuery,
    eventQuery
}
*/
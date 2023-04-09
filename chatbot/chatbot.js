'use strict'

const dialogflow = require('@google-cloud/dialogflow');
const config = require('../config/keys');
const {struct} = require('pb-util');
const mongoose = require('mongoose');

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

//const Registration = mongoose.model('registration');

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
        responses = self.handleAction(responses);
        return responses;
    },


    handleAction: function(responses){
        let queryResult = responses[0].queryResult;

        switch (queryResult.action) {
            case 'recommenddoctors-yes':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);
                }
                break;
        }

        // console.log(queryResult.action);
        // console.log(queryResult.allRequiredParamsPresent);
        // console.log(queryResult.fulfillmentMessages);
        // console.log(queryResult.parameters.fields);
        return responses;
    },


saveRegistration: async function(fields){
    const registration = new Registration({
        name: fields.name.stringValue,
        email: fields.email.stringValue,
        dateSent: Date.now()
    });
    try{
        let reg = await registration.save();
        console.log(reg);
    } catch (err){
        console.log(err);
    }
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
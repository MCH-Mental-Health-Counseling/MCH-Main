module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    googlePrivateKeyID: process.env.GOOGLE_PRIVATE_KEY_ID,
    googlePrivateKey: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_LANGUGAGE_CODE
};
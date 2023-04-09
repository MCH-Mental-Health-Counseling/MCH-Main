const {WebhookClient} = require('dialogflow-fulfillment');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function anxious(agent) {
            agent.add(`Welcome to my Snoopy fulfillment!`);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('anxious', anxious);

        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

}
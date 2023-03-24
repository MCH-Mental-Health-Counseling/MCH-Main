/*module.exports = {
    googleProjectID: 'mch-abdv',
    googlePrivateKeyId:"2940e881fe23b152198d829080660e8c3ac383be",
    googlePrivateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMYZ6/i5fHBKez\ntCvY7kHwwHbEBAylJFl70s8L5lNrjSyNdO6QIhsulrxRRJ07TfFBBleDdA72XjGv\n9H5tRZ1oWtbQH0yfrXjVW/oXCY6GzrRYavJoU5TbI1g10vj9pFgQOE0wgd99K1LW\nb5tluUaUN7HuD09FoP+97CVMR8StrGgbpPigoYw6owfLp88CrxOsL/yGlD0lvidQ\nY/obomyhUvw4djNrr8F9evOZ9FPJD/leLBGqgOl0ii4/qKZoEvug5OovmIVs8N22\nKzCMRvvqpRGmnq+Cep4BcAHdfV9RBAQZDT9HTOspIf8Tv72o6sGpkf6n4N9o3YtS\n8BPrTLwxAgMBAAECggEABWvvhKBE2fQvKK62XQ5Q9Hx+igubdEQHFahNcsDc5KT9\nkhEQhQVKmE1KWJOL4jdal4F+D9Aj13g/NC41rlti5hJG0YWLCE9XPb2vYC4SOFRC\nZ3gKzyasc7W30NG0ZjIWXfPIZGmFjrH4BBU415V3IFZr42dHkI7JSfX6NVBQENVO\nVvy57I0iscfcrvAXLe1/MwUQ6wYtwQrEIU3zpJHQ1CE/xpVuY4tNo84XIvXJNek4\nCpVKDwCnWNWC7C6q13+xtJ76/l9iQ0UqyzsfUB9ILRG4XH3NdsM0NBET/1znQoTK\ngbpVMAjyzOk9C/jm3VSppswRg0KMYFCSBDk1s1A9gwKBgQDtBBa1MAgbD/MfLAeI\nPr1Z06li31VO24bGvhHR77J2hEutO9/wZgssF1GhxsUWiL8wwANO6OYxBuZSrsPX\nNX9a//3zLqH7QMV5AfUc0lwvIeG5rrzWMTcEGjF1rxJD79+XRdaLexjfpAMHMcDh\nkFtls4pPjryMld5HdmmYpT4hMwKBgQDcwF86oywR+tJMMkAHcZqIg3KoEiM0yrEh\nY7QDuSjQ8J7FxWj8RTpjBcAKxItSNLFjjrj5fdYoyM+N3H7CXK+TVE2VZXtEyyPM\n5pWQfMsF3ejBl2g5ZAOf5p0l/wR0CZe4grCRI5QBO6LEKnOn3EF2/OslEs0OTESl\ncng1i7d1CwKBgQC4WE7FHBeh3NTu8NLm8E1b+VmssiHq1KnOGHVJwNIghiNKGODD\nXMrhvz1Zw3z1WuTBqQapsFGh3kj0FEP0NgLZJ3RAWYvZHPa6eIBJq3/RlNu5DSSI\nv/yXbzv62XEub/qK8OG+2L5u62UDinoHtryvrGYuHMmf2szo7juRYyygqwKBgQC/\n6j7gK5vUxcquk8E2t30x0ZWMqLgS3WTBMnz9/6uMeqSOK+Hp8AWisQ0UT2sQPN87\nPolx3gSh0HMhUeCh+RJrc48/ospYNIMbUBwXUWbv4szIAWmK+3hrO4LD1cF5YB2X\nO4dlpxi1ObN397A07ze6yodj48SB+ax0aeA4LQ+BoQKBgAytv/iW3lR3FHlPgJEN\ntgfmrhKtmylJOT7VdACkLBnrgZjMsewy5ECSGtXdy3HgQmgTm7zjHj+yJxxPuVSU\nFLV3mq35rnbJEjX3TL1e/xUrOCMyFAhYXoymJ8me5T3iPhoW63Kd6gaGtuKrhBft\nwPT1Ha5EBQ40iDsnkd+mgTU9\n-----END PRIVATE KEY-----\n",
    googleClientEmail:"dialogflow-mch-chatbot@mch-abdv.iam.gserviceaccount.com",
    dialogFlowSessionID: 'mch-bot-session',
    dialogFlowSessionLanguageCode: 'en-US'
}*/

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}
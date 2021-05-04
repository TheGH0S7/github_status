const request = require('request');
request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
    console.log(body);
});
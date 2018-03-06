// var gcal = require('google-calendar');
// var fs = require('fs');
// var readline = require('readline');
// var google = require('googleapis');
// var googleAuth = require('google-auth-library');
// var SCOPES = ['https://www.googleapis.com/auth/calendar'];
// var TOKEN_DIR = '/home/ashwin/Documents/'
// var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

// fs.readFile('client_secret.json', function processClientSecrets(err, content) {
//   if (err) {
//     console.log('Error loading client secret file: ' + err);
//     return;
//   }
//   authorize(JSON.parse(content), listEvents);
//   authorize(JSON.parse(content), createEvent);
// });


// function authorize(credentials, callback) {
//   var clientSecret = credentials.installed.client_secret;
//   var clientId = credentials.installed.client_id;
//   var redirectUrl = credentials.installed.redirect_uris[0];
//   var auth = new googleAuth();
//   var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

//   fs.readFile(TOKEN_PATH, function(err, token) {
//     if (err) {
//       getNewToken(oauth2Client, callback);
//     } else {
//       oauth2Client.credentials = JSON.parse(token);
//       callback(oauth2Client);
//     }
//   });
// }

// function getNewToken(oauth2Client, callback) {
//   var authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: SCOPES
//   });
//   console.log('Authorize this app by visiting this url: ', authUrl);
//   var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question('Enter the code from that page here: ', function(code) {
//     rl.close();
//     oauth2Client.getToken(code, function(err, token) {
//       if (err) {
//         console.log('Error while trying to retrieve access token', err);
//         return;
//       }
//       oauth2Client.credentials = token;
//       storeToken(token);
//       callback(oauth2Client);
//     });
//   });
// }


// function storeToken(token) {
//   try {
//     fs.mkdirSync(TOKEN_DIR);
//   } catch (err) {
//     if (err.code != 'EEXIST') {
//       throw err;
//     }
//   }
//   fs.writeFile(TOKEN_PATH, JSON.stringify(token));
//   console.log('Token stored to ' + TOKEN_PATH);
// }

// function listEvents(auth) {
//   var calendar = google.calendar('v3');
//   calendar.events.list({
//     auth: auth,
//     calendarId: 'primary',
//     timeMin: (new Date()).toISOString(),
//     maxResults: 100,
//     singleEvents: true,
//     orderBy: 'startTime'
//   }, function(err, response) {
//     if (err) {
//       console.log('The API returned an error: ' + err);
//       return;
//     }
//     var events = response.items;
//     if (events.length == 0) {
//       console.log('No upcoming events found.');
//     } else {
//       console.log('Upcoming 10 events:');
//       for (var i = 0; i < events.length; i++) {
//         var event = events[i];
//         var start = event.start.dateTime || event.start.date;
//         console.log('%s - %s', start, event.summary);
//       }
//     }
//   });
// }

// function createEvent(auth)

// {
//   var calendar = google.calendar('v3');
//   var event = {
//     'summary': 'My birthday',
//     'location': 'Chennai',
//     'description': 'Hahahah ',
//     'start': {
//       'dateTime': '2018-10-09T09:00:00-07:00',
//       'timeZone': 'America/Los_Angeles',
//     },
//     'end': {
//       'dateTime': '2018-10-09T17:00:00-07:00',
//       'timeZone': 'America/Los_Angeles',
//     },
//     'recurrence': [
//       'RRULE:FREQ=DAILY;COUNT=2'
//     ],
//     'attendees': [
//       {'email': 'vknaveenkumar@gmail.com'},
//       {'email': 'achu10ragvi@gmail.com'},
//     ],
//     'reminders': {
//       'useDefault': false,
//       'overrides': [
//         {'method': 'email', 'minutes': 24 * 60},
//         {'method': 'popup', 'minutes': 1},
//       ],
//     },
//   };
    
//       // "end": 
//       // {
//       //   "date": "2017-10-10"
//       // },
//       // "start": 
//       // {
//       //   "date": "2017-09-09"
//       // },
//       // "attendees": 
//       // [
//       //   {
//       //     "email": "vknaveenkumar@gmail.com"
//       //   }
//       // ]
    
  
  
//   calendar.events.insert({
//     auth: auth,
//     calendarId: 'primary',
//     resource: event,
//     sendNotifications:true, 

//   }, function(err, event) {
//     if (err) {
//       console.log('There was an error contacting the Calendar service: ' + err);
//       return;
//     }
//     console.log('Event created: %s', event.htmlLink);
//   });

// }
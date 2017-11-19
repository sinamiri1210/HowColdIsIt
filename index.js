var telegram = require('telegram-bot-api');
var weather = require('weather-js');


var api = new telegram({
        token: '464555761:AAEKdU0uuMgBcM1LQhFMY8Jxkw5E4Q8DjzM',
        updates: {
        	enabled: true
    }
});

//stats
api.getMe()
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.log(err);
});


//get a new message
api.on('message', function(message) {
    // Received text message
    console.log(message);


    if(message.text == 'Hello' || message.text == 'Hi' || message.text == 'hello' || message.text == 'hi') {
      api.sendMessage({
        chat_id: message.chat.id,
        text: 'Hi ' + message.from.first_name + '!\n' + 'Send me \'weather\' or \'temperature\' to check how weather is in Vaasa.'
      })
    }

    if (message.text == 'Weather' || message.text == 'weather') {
      weather.find({search: 'Vaasa, Finland', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log(JSON.stringify(result, null, 2));
        var current = result[0].current
        api.sendMessage({
          chat_id: message.chat.id,
          text: 'It is ' + current.temperature + '°C now with ' + current.skytext + ' and feels like ' + current.feelslike + '°C. ' +
              'Humidity is ' + current.humidity + ' and wind speed is ' + current.windspeed + '.'
        })
      });

    }


    if (message.text == 'temp' || message.text == 'temperature') {
      weather.find({search: 'Vaasa, Finland', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log(JSON.stringify(result, null, 2));
        var current = result[0].current
        api.sendMessage({
          chat_id: message.chat.id,
          text: current.temperature + '°C and feels like ' + current.feelslike + '°C.'
        })
      });

    }
    api.sendMessage({
      chat_id: '155946908',
      text: 'New message from ' + message.from.first_name + ': ' + message.text
    })
});

// api.on('inline.query', function(message) {
//     // Received inline query
//     console.log(message);
// });
//
// api.on('inline.result', function(message) {
//     // Received chosen inline result
//     console.log(message);
// });
//
// api.on('inline.callback.query', function(message) {
//     // New incoming callback query
//     console.log(message);
// });
//
// api.on('edited.message', function(message) {
//     // Message that was edited
//     console.log(message);
// });
//
// api.on('update', function(message) {
//     // Generic update object
//     // Subscribe on it in case if you want to handle all possible
//     // event types in one callback
//     console.log(message);
// });

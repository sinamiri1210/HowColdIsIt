var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '464555761:AAEKdU0uuMgBcM1LQhFMY8Jxkw5E4Q8DjzM',
        updates: {
        	enabled: true
    }
});

api.getMe()
.then(function(data)
{
    console.log(data);
})
.catch(function(err)
{
    console.log(err);
});


//get a new message
api.on('message', function(message)
{
    // Received text message
    console.log(message);
});

api.on('inline.query', function(message)
{
    // Received inline query
    console.log(message);
});

api.on('inline.result', function(message)
{
    // Received chosen inline result
    console.log(message);
});

api.on('inline.callback.query', function(message)
{
    // New incoming callback query
    console.log(message);
});

api.on('edited.message', function(message)
{
    // Message that was edited
    console.log(message);
});

api.on('update', function(message)
{
    // Generic update object
    // Subscribe on it in case if you want to handle all possible
    // event types in one callback
    console.log(message);
});

/**
 * Local Notifications - test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
localNotificationsTest =
{
	init: function()
	{
        // trigger log error when not supported
        if (!localNotifications.isSupported()) console.error('Not supported');

        // define callback functions
        var callbackFunctions = {
            'onshow': localNotificationsTest.onshow,
            'onclick': localNotificationsTest.onclick,
            'onclose': localNotificationsTest.onclose,
            'onerror': localNotificationsTest.onerror
        };

        // bind click to button
        return localNotifications.post(
            'message-title',
            'message-body',
            'my-unique-tag',
            callbackFunctions
        );
	},

    onclick: function()
    {
        console.log('User has clicked on the notification.');
    },

    onclose: function()
    {
        console.log('Notification has been closed, is triggered after onclick.');
    },

    onshow: function()
    {
        console.log('Notification shown to user.');
    },

    onerror: function()
    {
        console.log('User has denied notifications.');
    }
}

// init
localNotificationsTest.init();

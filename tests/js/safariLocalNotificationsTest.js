/**
 * Safari Local Notifications - test
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
safariLocalNotificationsTest =
{
	init: function()
	{
        // trigger log error when not supported
		if (!safariLocalNotifications.isSupported()) console.error('Not supported');

        // bind click to button
        safariLocalNotifications.post('testmessage', 'mijn body', 'mijn tag', safariLocalNotificationsTest.afterPost());
	},
    
    afterPost: function()
    {
        console.log('in after post function');
    }
}

// init
safariLocalNotificationsTest.init();

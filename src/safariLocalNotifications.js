/**
 * Safari Local Notifications
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
safariLocalNotifications =
{
    identifier: null, // web.com.example.domain
    permissionData: null,
    init: function()
    {
        // not supported, remain silently
        if (!safariLocalNotifications.isSupported()) return;
    },

    /**
     * Get permission state
     *
     * @return string Possibilities are 'default', 'granted' and 'denied'
     */
    getPermissionState: function()
    {
        return Notification.permission;
    },

    /**
     * Is supported
     * Note: working locally (localhost) is not supported
     *
     * @return bool
     */
    isSupported: function()
    {
        return ('Notification' in window);
    },

	/**
	 * Post a message
	 */
    post: function(notificationMessage, notificationBody, notificationTag, callbackAfterNotification)
    {  
        // not yet subscribed
        if (safariLocalNotifications.getPermissionState() === 'default') {
            // request permission
            Notification.requestPermission(function() {
                safariLocalNotifications.post(
                    notificationMessage,
                    notificationBody,
                    notificationTag,
                    callbackAfterNotification
                )
            });
        }

        // define new notification
        var n = new Notification(
            notificationMessage,
            {
              'body': notificationBody,
              'tag' : notificationTag
            }
        );

        // remove the notification from Notification Center when clicked.
        n.onclick = function () {
            this.close();
        };

        // callback function when the notification is closed.
        n.onclose = function () {
            callbackAfterNotification;
        };
	}
}

// initialize
safariLocalNotifications.init();

/**
 * Local Notifications
 *
 * @author Jeroen Desloovere <jeroen@siesqo.be>
 */
localNotifications =
{
    identifier: null, // f.e.: web.com.example.domain
    permissionData: null,
    init: function()
    {
        // not supported, stop silently
        if (!localNotifications.isSupported()) return;
    },

    /**
     * Get permission state
     *
     * @return string Possibilities are 'default', 'granted' and 'denied'
     */
    getPermissionState: function()
    {
        return window.Notification.permission;
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
     *
     * @return bool
     * @param string notificationMessage
     * @param string notificationBody
     * @param string notificationTag Should be unique
     * @param string[optional] callbackForSuccess
     * @param string[optional] callbackForDenied
     */
    post: function(notificationMessage, notificationBody, notificationTag, callbacks)
    {
        // not yet subscribed
        if (localNotifications.getPermissionState() === 'default') {
            // request permission
            return Notification.requestPermission(function() {
                localNotifications.post(
                    notificationMessage,
                    notificationBody,
                    notificationTag,
                    callbacks
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

        // notify when shown successfull
        n.onshow = function () {
            return (callbacks.onshow) ? callbacks.onshow() : true;
        };

        // remove the notification from Notification Center when clicked.
        n.onclick = function () {
            this.close();
            return (callbacks.onclick) ? callbacks.onclick() : true;
        };

        // callback function when the notification is closed.
        n.onclose = function () {
            return (callbacks.onclose) ? callbacks.onclose() : true;
        };

        // notification cannot be presented to the user, this event is fired if the permission level is set to denied or default.
        n.onerror = function () {
            return (callbacks.onerror) ? callbacks.onerror() : true;
        };
    }
}

// initialize
localNotifications.init();

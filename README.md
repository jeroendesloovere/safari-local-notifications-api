# Safari Local Notifications API

This jQuery Safari Local Notifications class can send local notifications to the Safari visitors of your website.

## Example

```
var title = 'message-title';
var body = 'message-body';
var tag = 'my-unique-tag-01';

// define callback functions
var callbackFunctions = {
    'onshow': myCustomFunction,
    'onclick': myCustomFunction,
    'onclose': myCustomFunction,
    'onerror': myCustomFunction
};

// trigger a notification to be shown
return localNotifications.post(
    title,
    body,
    tag,
    callbackFunctions
);

function myCustomFunction()
{
    alert('Action done');
}
```
[Check full source code for example](/examples)

## Contributing

It would be great if you could help us improve this class. GitHub does a great job in managing collaboration by providing different tools, the only thing you need is a [GitHub](http://github.com) login.

* Use **Pull requests** to add or update code
* **Issues** for bug reporting or code discussions
* Or regarding documentation and how-to's, check out **Wiki**
More info on how to work with GitHub on help.github.com.

## License

The module is licensed under [MIT](./LICENSE.md). In short, this license allows you to do everything as long as the copyright statement stays present.
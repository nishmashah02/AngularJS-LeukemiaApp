cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-calendar.Calendar",
    "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
    "pluginId": "cordova-plugin-calendar",
    "clobbers": [
      "Calendar"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-calendar": "5.1.3",
  "cordova-plugin-inappbrowser": "3.0.0"
};
// BOTTOM OF METADATA
});
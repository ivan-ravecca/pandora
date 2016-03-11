System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            // Then we call bootstrap with AppComponent.
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
/*

Notice that we import the bootstrap function
from angular2/platform/browser, not angular2/core.

Bootstrapping isn't core because there isn't a single way to bootstrap the app.
True, most applications that run in a browser call the bootstrap function
from this library.

But it is possible to load a component in a different environment.
We might load it on a mobile device with Apache Cordova or NativeScript.

We might wish to render the first page of our application on the server
to improve launch performance or facilitate SEO.

These targets require a different kind of bootstrap function that
we'd import from a different library.
 */ 
//# sourceMappingURL=main.js.map
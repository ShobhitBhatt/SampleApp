//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SampleApp",
    appName: "SampleApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.12.49.88",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.12.49.88:80/middleware/MWServlet",
    secureurl: "https://10.12.49.88:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
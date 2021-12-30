///reference path="util.ts"
///reference path="types.ts"


$(() => {
    var pageToLoad = getParameterByName("v");
    if (!pageToLoad)
        pageToLoad = "home";

    var defGetPageDetails;

    if (pageToLoad == "activity")
        defGetPageDetails = getActivityPageDetails(getParameterByName("a"))
    else
        defGetPageDetails = getPartialPageDetails(pageToLoad);

    defGetPageDetails.then(
        (pageDetails: PageDetails) => { loadFiles(pageDetails) },
        () => { console.log("error") });

    if (pageToLoad == "activity") {
        renderActivityBannerContent();
    }
});

async function getPartialPageDetails(pageToLoad: string): Promise<PageDetails> {
    var def = $.Deferred<PageDetails>();

    var pageDetails: PageDetails = {
        htmlPath: "partials/" + pageToLoad + ".html",
        jsPath: "assets/js/release/partials/" + pageToLoad + ".js"
    }

    def.resolve(pageDetails);

    return def.promise();
}

async function getActivityPageDetails(activityId: string): Promise<PageDetails> {
    var def = $.Deferred<PageDetails>();

    getActivityDetails(activityId).then(
        (activityDetails: Activity) => {
            var pageDetails: PageDetails = {
                htmlPath: "partials/activities/" + activityDetails.parentFolderName + "/index.html",
                jsPath: "assets/js/release/activities/" + activityDetails.parentFolderName + "/index.js",
                cssPath: "assets/css/activities/" + activityDetails.parentFolderName + "/css/main.css",
            }
            def.resolve(pageDetails);
        },
        () => {
            def.reject()
        })

    return def.promise();
}

async function loadFiles(pageDetails: PageDetails): Promise<void> {
    fileExists(pageDetails.htmlPath).then((htmlResult) => {
        if (htmlResult) {
            loadHTMLFile(pageDetails.htmlPath);

            fileExists(pageDetails.jsPath).then((jsResult) => {
                if (jsResult) loadJSFile(pageDetails.jsPath);
            });

            if (pageDetails.cssPath)
                fileExists(pageDetails.cssPath).then((cssResult) => {
                    if (cssResult) loadCSSFile(pageDetails.cssPath ?? "");
                });
        }
    });
}

async function fileExists(file: string): Promise<boolean> {
    const response = await fetch(file, { method: 'HEAD', cache: 'no-store' });
    return (response.status == 200) ? true : false;

}

function loadHTMLFile(filePath: string) {
    $("#mainContent").load(encodeURI(filePath));
}

function loadJSFile(filePath: string) {
    let node = document.createElement('script');
    node.src = filePath;
    node.type = 'text/javascript';
    $("head").append(node);
}

function loadCSSFile(filePath: string) {
    let node = document.createElement('link');
    node.href = filePath;
    node.rel = 'stylesheet';
    $("head").append(node);
}
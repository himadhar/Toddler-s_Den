
$(() => {
    var pageToLoad = getParameterByName("v");
    if (!pageToLoad)
        pageToLoad = "home";

    var htmlPath = "partials/" + pageToLoad + ".html";
    var jsPath = "assets/js/release/partials/" + pageToLoad + ".js";

    fileExists(htmlPath).then((htmlResult) => {
        if (htmlResult) {
            loadHTMLFile(htmlPath);

            fileExists(jsPath).then((jsResult) => {
                if (jsResult) loadJSFile(jsPath);
            });
        }
    });



});

function getParameterByName(name: string): string {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

async function fileExists(file: string): Promise<boolean> {
    const response = await fetch(file, { method: 'HEAD', cache: 'no-store' });
    return (response.status == 200) ? true : false;

}

function loadHTMLFile(filePath: string) {
    $("#mainContent").load(filePath);
}

function loadJSFile(filePath: string) {
    let node = document.createElement('script');
    node.src = filePath;
    node.type = 'text/javascript';
    $("head").append(node);
}
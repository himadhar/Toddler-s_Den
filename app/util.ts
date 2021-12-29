///reference path="types.ts"

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

async function readActivityList(): Promise<Activity[]> {
    var def = $.Deferred<Activity[]>();
    fetch('../app/activities/activityList.json', { method: 'GET', cache: 'no-store' })
        .then(response => response.json())
        .then((data: Activity[]) => { def.resolve(data) });

    return def.promise();
}

async function getActivityDetails(id: string): Promise<Activity> {
    var def = $.Deferred<Activity>();
    var data = await readActivityList();

    var result = data.find((act) => act.id == id);
    if (result)
        def.resolve(result);
    else
        def.reject();

    return def.promise();
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function getRandomColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
}
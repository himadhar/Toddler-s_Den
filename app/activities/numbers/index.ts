///reference path="utils.ts"
///reference path="app/activities/activityMain.ts"

$(() => {
    new NumberActivity();

});

class NumberActivity extends ActivityMain {
    constructor() {
        super("0123456789", "#numbersDiv", "#number");
    }

    attachHandlers(): void {
        super.attachHandlers();
        var _thisRef = this;
        document.addEventListener('keydown', function (e) {
            let key = Number(e.key);
            if (!isNaN(key) && key != null)
                _thisRef.loadDetails(key.toString());

        });
    }
}
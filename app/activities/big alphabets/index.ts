///reference path="utils.ts"
///reference path="app/activities/activityMain.ts"

$(() => {
    new BigAlphaActivity();

});

class BigAlphaActivity extends ActivityMain {
    constructor() {
        super("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "#bigAlphaMainDiv", "#alpha", "#imgAlpha", 2);
    }

    attachHandlers(): void {
        super.attachHandlers();
        var _thisRef = this;
        document.addEventListener('keydown', function (e) {
            switch (e.code) {
                case "KeyA": case "KeyB": case "KeyC": case "KeyD": case "KeyE":
                case "KeyF": case "KeyG": case "KeyH": case "KeyI": case "KeyJ":
                case "KeyK": case "KeyL": case "KeyM": case "KeyN": case "KeyO":
                case "KeyP": case "KeyQ": case "KeyR": case "KeyS": case "KeyT":
                case "KeyU": case "KeyV": case "KeyW": case "KeyX": case "KeyY": case "KeyZ":
                    _thisRef.loadDetails(e.key.toUpperCase());
                    break;
            }

        });
    }
}
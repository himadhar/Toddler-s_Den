///reference path="utils.ts"

$(() => {
    var activity = new BigAlphaActivity();
    activity.setHeightWidth();
    activity.loadDetails();
    activity.attachHandlers();
})

class BigAlphaActivity {

    BigAlphaActivity() {

    }

    loadDetails(selectedChar?: string) {
        this.showRandomAlphabet(selectedChar);
    }

    setHeightWidth() {
        $("#bigAlphaMainDov").height($(window).height() ?? 400 - 200);
        $("#bigAlphaMainDov").width($("#mainContent").width() ?? "100px");
    }

    attachHandlers() {
        var _thisRef = this;
        $("#alpha").on("click", function () {
            _thisRef.loadDetails();
        });

        document.addEventListener('keydown', function (e) {
            switch (e.code) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                    _thisRef.loadDetails();
                    break;
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

    generateRandomAlphabets(): string {
        var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charIndex = getRandomInt(0, 26);
        return validChars[charIndex];
    }

    showRandomAlphabet(selectedChar?: string) {
        var alpha: string = selectedChar ?? this.generateRandomAlphabets();
        $("#alpha").text(alpha);
        $("#alpha").css('color', getRandomColor());
        $("#imgAlpha").removeAttr('class');
        var randomSprite = getRandomInt(1, 2);
        $("#imgAlpha").addClass('sprite' + randomSprite);
        $("#imgAlpha").addClass('sprite-' + alpha + randomSprite);
    }
}
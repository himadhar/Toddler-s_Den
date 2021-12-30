///reference path="utils.ts"

$(() => {
    var activity = new SmallAlphaActivity();
    activity.setHeightWidth();
    activity.loadDetails();
    activity.attachHandlers();
})

class SmallAlphaActivity {
    SmallAlphaActivity() {

    }

    loadDetails() {
        this.showRandomAlphabet();
    }

    setHeightWidth() {
        $("#smallAlphaMainDov").height($(window).height() ?? 400 - 200);
        $("#smallAlphaMainDov").width($("#mainContent").width() ?? "100px");
    }

    attachHandlers() {
        var _thisRef = this;
        $("#alpha").on("click", function () {
            _thisRef.loadDetails();
        });

        document.addEventListener('keydown', function (e) {
            switch (e.key) {
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                    _thisRef.loadDetails();
                    break;
            }
        });
    }

    generateRandomAlphabets(): string {
        var validChars = 'abcdefghijklmnopqrstuvwxyz';
        var charIndex = getRandomInt(0, 26);
        return validChars[charIndex];
    }

    showRandomAlphabet() {
        var alpha: string = this.generateRandomAlphabets();
        $("#alpha").text(alpha);
        $("#alpha").css('color', getRandomColor());
    }
}
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

    loadDetails() {
        this.showRandomAlphabet();
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

         document.addEventListener('keydown', function(e) {
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
        var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charIndex = getRandomInt(26);
        return validChars[charIndex];
    }

    showRandomAlphabet() {
        var alpha: string = this.generateRandomAlphabets();
        $("#alpha").text(alpha);
        $("#alpha").css('color', getRandomColor());
        $("#imgAlpha").removeAttr('class');
        $("#imgAlpha").addClass('sprite');
        $("#imgAlpha").addClass('sprite-' + alpha);
    }
}
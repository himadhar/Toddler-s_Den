class ActivityMain {
    charactersToShow: string = "";
    mainDivId: string = "";
    contentDivId: string = "";
    imageDivId: string = "";
    numberOfSprites: number = 1;

    constructor(charactersToShow: string, mainDivId: string, contentDivId: string, imageDivId?: string, numberOfSprites?: number) {
        this.charactersToShow = charactersToShow;
        this.mainDivId = mainDivId;
        this.contentDivId = contentDivId;
        this.imageDivId = imageDivId;
        this.numberOfSprites = numberOfSprites;
        this.setHeightWidth();
        this.loadDetails();
        this.attachHandlers();
    }

    setHeightWidth() {
        $(this.mainDivId).height($(window).height() ?? 400 - 200);
        $(this.mainDivId).width($("#mainContent").width() ?? "100px");
    }

    attachHandlers() {
        var _thisRef = this;
        $(_thisRef.contentDivId).on("click", function () {
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
            }
        });
    }


    loadDetails(selectedChar?: string) {
        this.showRandomCharacter(selectedChar);
    }

    generateRandomCharacters(): string {
        var validChars = this.charactersToShow;
        var charIndex = getRandomInt(0, validChars.length - 1);

        return validChars[charIndex];
    }

    showRandomCharacter(selectedChar?: string) {
        var alpha: string = selectedChar ?? this.generateRandomCharacters();
        $(this.contentDivId).text(alpha);
        $(this.contentDivId).css('color', getRandomColor());
        if (this.imageDivId) {
            $(this.imageDivId).removeAttr('class');
            var randomSprite = getRandomInt(1, this.numberOfSprites);
            $(this.imageDivId).addClass('sprite' + randomSprite);
            $(this.imageDivId).addClass('sprite-' + alpha + randomSprite);
        }
    }
}
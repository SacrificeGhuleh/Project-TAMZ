class Note {
    constructor(duration, tone, disabled) {
        this.id = "Note " + ++G_Notes;
        if (document.getElementById(this.id)) throw "Error, multiple IDs";
        this.placeIndex = G_PlaceIndex;
        this.barIndex = G_Bars;
        this.duration = duration;
        this.tone = tone;
        this.disabled = disabled;
        this.LoadAudio();
        //this.Draw()
        //console.log(this.getJson());
    }

    getPath() {
        //var str = "samples/wav/";
        var str = "samples/mp3/"
        switch (this.getString()) {
            case 'e':
                //str += (24 + this.getFret()) + ".wav";
                str += (24 + this.getFret()) + ".mp3";
                break;
            case 'h':
                //str += (19 + this.getFret()) + ".wav";
                str += (19 + this.getFret()) + ".mp3";
                break;
            case 'g':
                //str += (15 + this.getFret()) + ".wav";
                str += (15 + this.getFret()) + ".mp3";
                break;
            case 'D':
                //str += (10 + this.getFret()) + ".wav";
                str += (10 + this.getFret()) + ".mp3";
                break;
            case 'A':
                //str += (5 + this.getFret()) + ".wav";
                str += (5 + this.getFret()) + ".mp3";
                break;
            case 'E':
                //str += this.getFret() + ".wav";
                str += this.getFret() + ".mp3";
                break;
        }

        return str;
    }

    getString() {
        return this.tone.charAt(0);
    }

    getFret() {
        return parseInt(this.tone.substr(1, this.tone.length));
    }

    Draw() {
        if (typeof this.disabled === "undefined") {
            var str = "";
            var y;
            var x;
            //console.log(ScreenWidth);
            x = 4 * (offset + 1) + (this.placeIndex * (ScreenWidth-40 - (offset + 1) * 4) / 64);
            switch (this.getString()) {
                case 'e':
                    y = 5 + scale * (0 + this.barIndex * 40)
                    break;
                case 'h':
                    y = 5 + scale * (5 + this.barIndex * 40)
                    break;
                case 'g':
                    y = 5 + scale * (10 + this.barIndex * 40)
                    break;
                case 'D':
                    y = 5 + scale * (15 + this.barIndex * 40)
                    break;
                case 'A':
                    y = 5 + scale * (20 + this.barIndex * 40)
                    break;
                case 'E':
                    y = 5 + scale * (25 + this.barIndex * 40)
                    break;
            }

            str += "<text id = \"" + this.id + "_background\"x = \"" + x + "\" y = \"" + y + "\"font-size=\"14\" fill = \"white\" stroke = \"#ffffff\" stroke-width= \"1\">" + this.getFret() + "</text>";
            str += "<text id = \"" + this.id + "\" x = \"" + x + "\" y = \"" + y + "\"font-size=\"14\" fill = \"black\">" + this.getFret() + "</text>";

            $("#NoteSheet").append(str);
            refreshSvg();
        }
    }

    LoadAudio() {

        this.audio = new Audio(this.getPath());
        this.audio.volume = 1;
        this.audio.load();
    }

    Reload() {
        this.audio.load();
        this.audio.volume = 1;
    }

    Play() {
        //console.log("Playing" + this.id);
        if (typeof this.disabled === "undefined") document.getElementById(this.id).setAttribute("fill", "red");
        this.audio.play();
    }
    Stop() {
        if (typeof this.disabled === "undefined") document.getElementById(this.id).setAttribute("fill", "black");
        this.Fade();
    }

    async Fade() {
        while (this.audio.volume > 0) {
            this.audio.volume = (this.audio.volume - 0.005).toFixed(3);
            sleep(10);
        }
    }

    getSimplified() {
        var obj = {
            duration: this.duration, tone: this.tone, disabled: this.disabled
        };
        return obj;
    }

};
class SubBar {
    constructor(...args) {
        this.notes = new Array();
        for (var i = 0; i < args.length; i++) {
            if ($.isArray(args[i])) {
                this.notes = args[i];
                this.duration = this.notes[0].duration;
            }
            else
            this.Add(args[i]);
        }
        G_PlaceIndex += (64 / this.duration);
        this.Draw();
    }

    Add(n) {
        this.notes.push(n)
        this.duration = n.duration;
    }

    Draw() {
        for (var i = 0; i < this.notes.length; i++) {
            this.notes[i].Draw();
        }
    }

    Sleep(ms) { //VELMI PRASACKE, NAHRADIT!!
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > ms) {
                break;
            }
        }
    }

    Stop() {
        for (var i = 0; i < this.notes.length; i++) {
            this.notes[i].Stop();
        }
    }

    Play() {
        for (var i = 0; i < this.notes.length; i++) {
            this.notes[i].Play();
        }
    }
    getSimplified() {
        var arr = new Array();
        for (var n of this.notes) {
            arr.push(n.getSimplified());
        }

        var obj = {
            notes : arr
        };

        return obj;
    }
    
}
class Song {
    constructor(interpret, song, tempo, ...args) {
        
        $("#Interpret").text(interpret);
        $("#Song").text(song);
        this.tempo = tempo;
        G_Tempo = this.tempo;
        setDelay()
        this.bars = new Array();
        this.interpret = interpret;
        this.song = song;
        
        for (var i = 0; i < args.length; i++) {
            if ($.isArray(args[i])) {
                this.bars = args[i];
            }
            else
            this.Add(args[i]);
        }
        //console.log(JSON.stringify(this.getSimplified()));
    }

    async Play() {
        document.getElementById("playBtn").disabled = true;
        document.getElementById("stopBtn").disabled = false;
        playLoop:
        for (var bar of this.bars) {
            for (var subBar of bar.subBars) {
                if (stopped) break playLoop;
                subBar.Play();
                await sleep((G_Delay / subBar.duration));
                subBar.Stop();
            }
        }
        stopped = false;

        for (var bar of this.bars) {
            for (var subBar of bar.subBars) {
                for (var note of subBar.notes) {
                    note.Reload();
                }
            }
        }
        //console.log("End of Play async method");
        document.getElementById("playBtn").disabled = false;
        document.getElementById("stopBtn").disabled = true;
    }

    Add(item) {
        this.bars.push(item);
    }

    Draw() {
        for (bar of this.bars) {
            bar.Draw();
        }
    }

    getSimplified() {
        var arr = new Array();
        for (var b of this.bars) {
            arr.push(b.getSimplified());
        }

        var obj = {
            interpret: this.interpret, song: this.song, tempo: this.tempo, bars: arr
        };
        return obj;
    }
}
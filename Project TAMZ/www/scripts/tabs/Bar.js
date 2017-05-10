class Bar {
    constructor(...args) {
        G_PlaceIndex = 0;
        document.getElementById("NoteSheet").setAttribute("height", (G_Bars + 1) * 80);
        this.Draw();
        this.id = "Bar " + ++G_Bars;
        this.subBars = new Array();
        for (var i = 0; i < args.length; i++) {
            if ($.isArray(args[i])) {
                this.subBars = args[i];
            }
            else
            this.Add(args[i]);
        }
        var sum = 0;
        for (var i = 0; i < this.subBars.length; i++) {
            sum += 64 / this.subBars[i].duration;
        }
        if (sum < 64) alert("Incomplete bar " + this.id);
        if (sum > 64) alert("Too much notes in bar " + this.id);

    }

    Draw() {
        var str = "";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (0 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (0 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (5 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (5 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (10 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (10 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (15 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (15 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (20 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (20 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        str += "<line x1=\"" + offset + "\" y1=\"" + scale * (25 + G_Bars * 40) + "\" x2=\"" + (ScreenWidth - offset) + "\" y2=\"" + scale * (25 + G_Bars * 40) + "\" style=\"stroke: rgb(0, 0, 0); stroke - width:2\" />";
        $("#NoteSheet").prepend(str);
        refreshSvg();
    }

    Add(s) {
        this.subBars.push(s);
    }

    getSimplified() {
        var arr = new Array();
        for (var s of this.subBars) {
            arr.push(s.getSimplified());
        }
        var obj = {
            subBars: arr
        };
        return obj;
    }
}
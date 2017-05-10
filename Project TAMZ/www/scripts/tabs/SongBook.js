function loadTrooper() {
    createSvg();
    currentSong = new Song("Iron Maiden", "The Trooper", 160,
        new Bar(
            new SubBar(new Note(8, "A7")),
            new SubBar(new Note(8, "A7")),
            new SubBar(new Note(16, "A7")),
            new SubBar(new Note(16, "A5")),
            new SubBar(new Note(8, "E7")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(16, "A5")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(8, "E5"))
        ),
        new Bar(
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "D5")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "A7"))
        ),
        new Bar(
            new SubBar(new Note(8, "A7")),
            new SubBar(new Note(8, "A7")),
            new SubBar(new Note(16, "A7")),
            new SubBar(new Note(16, "A5")),
            new SubBar(new Note(8, "E7")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(16, "A5")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(8, "E5"))
        ),
        new Bar(
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "D5")),
            new SubBar(new Note(8, "A5")),
            new SubBar(new Note(8, "A7"))
        ),
        new Bar(
            new SubBar(new Note(8, "A7"), new Note(8, "A10","D")),
            new SubBar(new Note(8, "A7"), new Note(8, "A10", "D")),
            new SubBar(new Note(16, "A7"), new Note(16, "A10", "D")),
            new SubBar(new Note(16, "A5"), new Note(16, "A9", "D")),
            new SubBar(new Note(8, "E7"), new Note(8, "E10", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(16, "A5"), new Note(16, "A9", "D")),
            new SubBar(new Note(16, "A3"), new Note(16, "A7", "D")),
            new SubBar(new Note(8, "E5"), new Note(8, "E8", "D"))
        ),
        new Bar(
            new SubBar(new Note(8, "A3"), new Note(8, "A7", "D")),
            new SubBar(new Note(8, "A3"), new Note(8, "A7", "D")),
            new SubBar(new Note(16, "A3"), new Note(16, "A7", "D")),
            new SubBar(new Note(16, "A2"), new Note(16, "A5", "D")),
            new SubBar(new Note(8, "E3"), new Note(8, "E7", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(8, "D5"), new Note(8, "D9", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(8, "A7"), new Note(8, "A10", "D"))
            ),
        new Bar(
            new SubBar(new Note(8, "A7"), new Note(8, "A10", "D")),
            new SubBar(new Note(8, "A7"), new Note(8, "A10", "D")),
            new SubBar(new Note(16, "A7"), new Note(16, "A10", "D")),
            new SubBar(new Note(16, "A5"), new Note(16, "A9", "D")),
            new SubBar(new Note(8, "E7"), new Note(8, "E10", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A9", "D")),
            new SubBar(new Note(16, "A5"), new Note(16, "A9", "D")),
            new SubBar(new Note(16, "A3"), new Note(16, "A7", "D")),
            new SubBar(new Note(8, "E5"), new Note(8, "E8", "D"))
        ),
        new Bar(
            new SubBar(new Note(8, "A3"), new Note(8, "A7", "D")),
            new SubBar(new Note(8, "A3"), new Note(8, "A7", "D")),
            new SubBar(new Note(16, "A3"), new Note(16, "A7", "D")),
            new SubBar(new Note(16, "A2"), new Note(16, "A5", "D")),
            new SubBar(new Note(8, "E3"), new Note(8, "E7", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A5", "D")),
            new SubBar(new Note(8, "D5"), new Note(8, "D5", "D")),
            new SubBar(new Note(8, "A5"), new Note(8, "A5", "D")),
            new SubBar(new Note(8, "A7"), new Note(8, "D9"), new Note(8, "A7", "D"), new Note(8, "D9", "D"))
        ),
        new Bar(
            new SubBar(new Note(8, "A7"), new Note(8, "A7")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(8, "e7"), new Note(8, "g7")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9"))
        ),
        new Bar(
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(4, "g9"), new Note(4, "A10")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10"))
        ),
        new Bar(
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(8, "e7"), new Note(8, "g7")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9"))
        ),
        new Bar(
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(4, "g9"), new Note(4, "A10")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10"))
        ),
        new Bar(
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(8, "e7"), new Note(8, "g7")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9"))
        ),
        new Bar(
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(4, "g9"), new Note(4, "A10")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10"))
        ),
        new Bar(
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(8, "e7"), new Note(8, "g7")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9")),
            new SubBar(new Note(16, "h7"), new Note(16, "D7")),
            new SubBar(new Note(16, "h8"), new Note(16, "D9"))
        ),
        new Bar(
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10")),
            new SubBar(new Note(4, "g9"), new Note(4, "A10")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "h8"), new Note(8, "D9")),
            new SubBar(new Note(8, "g7"), new Note(8, "A9")),
            new SubBar(new Note(8, "g9"), new Note(8, "A10"))
        )
    );
    //saveSong(currentSong);
}

function loadAlabama() {
    createSvg();
    currentSong = new Song("Lynyrd Skynyrd", "Sweet Home Alabama", 100,
        new Bar(
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(16, "h3")),
            new SubBar(new Note(8, "g2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(16, "h3")),
            new SubBar(new Note(8, "g0")),
            new SubBar(new Note(16, "D0"))
        ),
        new Bar(
            new SubBar(new Note(16,"E3")),
            new SubBar(new Note(16, "E0")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(4, "g0")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "D2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(16, "g2")),
            new SubBar(new Note(16, "g0"))
        ),
        new Bar(
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(16, "h3")),
            new SubBar(new Note(8, "g2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(16, "h3")),
            new SubBar(new Note(8, "g0")),
            new SubBar(new Note(16, "D0"))
        ),
        new Bar(
            new SubBar(new Note(16, "E3")),
            new SubBar(new Note(16, "E0")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(4, "g0")),
            new SubBar(new Note(16, "g2")),
            new SubBar(new Note(16, "g0")),
            new SubBar(new Note(16, "g0")),
            new SubBar(new Note(16, "g4")),
            new SubBar(new Note(16, "g0")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "g5")),
            new SubBar(new Note(16, "g7"))
        ),
        new Bar(
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(4, "e2"),new Note(4, "h3"), new Note(4, "g2")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(4, "h3"), new Note(4, "g0"), new Note(4, "D2"))
        ),
        new Bar(
            new SubBar(new Note(16,"E3")),
            new SubBar(new Note(16, "E0")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(4, "h3"), new Note(4, "g0"), new Note(4, "D0")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "D2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(16, "g2")),
            new SubBar(new Note(16, "g0"))
        ),
        new Bar(
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(8, "D0")),
            new SubBar(new Note(4, "e2"),new Note(4, "h3"), new Note(4, "g2")),
            new SubBar(new Note(16, "A3")),
            new SubBar(new Note(16, "A0")),
            new SubBar(new Note(8, "A3")),
            new SubBar(new Note(4, "h3"), new Note(4, "g0"), new Note(4, "D2"))
        ),
        new Bar(
            new SubBar(new Note(16, "E3")),
            new SubBar(new Note(16, "E0")),
            new SubBar(new Note(8, "E3")),
            new SubBar(new Note(4, "h3"), new Note(4, "g0"), new Note(4, "D0")),
            new SubBar(new Note(16, "A1")),
            new SubBar(new Note(16, "A2")),
            new SubBar(new Note(16, "D0")),
            new SubBar(new Note(16, "g0")),
            new SubBar(new Note(4, "g0"))
            )
    );
}

function loadChords() { //Chords playing test
    createSvg();
    currentSong = new Song("Guitar", "Chords", 140,
        new Bar(new SubBar(new Note(1, "A3"), new Note(1, "D2"), new Note(1, "g0"), new Note(1, "h1"), new Note(1, "e0") )), //C
        new Bar(new SubBar(new Note(1, "A0"), new Note(1, "D0"), new Note(1, "g2"), new Note(1, "h3"), new Note(1, "e1") )), //Dm
        new Bar(new SubBar(new Note(1, "E0"), new Note(1, "A2"), new Note(1, "D2"), new Note(1, "g1"), new Note(1, "h0"), new Note(1, "e0") )), //E
        new Bar(new SubBar(new Note(1, "E1"), new Note(1, "A3"), new Note(1, "D3"), new Note(1, "g1"), new Note(1, "h1"), new Note(1, "e1") )), //Fm
        new Bar(new SubBar(new Note(1, "E3"), new Note(1, "A2"), new Note(1, "D0"), new Note(1, "g0"), new Note(1, "h3"), new Note(1, "e3") )), //G
        new Bar(new SubBar(new Note(1, "E0"), new Note(1, "A0"), new Note(1, "D2"), new Note(1, "g2"), new Note(1, "h1"), new Note(1, "e0") )), //Am
        new Bar(new SubBar(new Note(1, "E2"), new Note(1, "A2"), new Note(1, "D4"), new Note(1, "g4"), new Note(1, "h4"), new Note(1, "e2") )), //H
        new Bar(
            new SubBar(new Note(2, "D9"), new Note(2, "g9"), new Note(2, "h12")),
            new SubBar(new Note(4, "D9"), new Note(4, "g9"), new Note(4, "h12")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h12")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h9"))
        ),
        new Bar(
            new SubBar(new Note(2, "D9"), new Note(2, "g11"), new Note(2, "h9")),
            new SubBar(new Note(4, "D9"), new Note(4, "g11"), new Note(4, "h9")),
            new SubBar(new Note(8, "D9"), new Note(8, "g11"), new Note(8, "h9")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h9"))
        ),
        new Bar(
            new SubBar(new Note(2, "A11"), new Note(2, "D11"), new Note(2, "g13")),
            new SubBar(new Note(4, "A11"), new Note(4, "D11"), new Note(4, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D11"), new Note(8, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D11"), new Note(8, "g11"))
        ),
        new Bar(
            new SubBar(new Note(2, "A12"), new Note(2, "D14"), new Note(2, "g13")),
            new SubBar(new Note(4, "A12"), new Note(4, "D14"), new Note(4, "g13")),
            new SubBar(new Note(8, "A12"), new Note(8, "D14"), new Note(8, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D14"), new Note(8, "g13"))
        ),
        new Bar(
            new SubBar(new Note(2, "D9"), new Note(2, "g9"), new Note(2, "h12")),
            new SubBar(new Note(4, "D9"), new Note(4, "g9"), new Note(4, "h12")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h12")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h9"))
        ),
        new Bar(
            new SubBar(new Note(2, "D9"), new Note(2, "g11"), new Note(2, "h9")),
            new SubBar(new Note(4, "D9"), new Note(4, "g11"), new Note(4, "h9")),
            new SubBar(new Note(8, "D9"), new Note(8, "g11"), new Note(8, "h9")),
            new SubBar(new Note(8, "D9"), new Note(8, "g9"), new Note(8, "h9"))
        ),
        new Bar(
            new SubBar(new Note(2, "A11"), new Note(2, "D11"), new Note(2, "g13")),
            new SubBar(new Note(4, "A11"), new Note(4, "D11"), new Note(4, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D11"), new Note(8, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D11"), new Note(8, "g11"))
        ),
        new Bar(
            new SubBar(new Note(2, "A12"), new Note(2, "D14"), new Note(2, "g13")),
            new SubBar(new Note(4, "A12"), new Note(4, "D14"), new Note(4, "g13")),
            new SubBar(new Note(8, "A12"), new Note(8, "D14"), new Note(8, "g13")),
            new SubBar(new Note(8, "A11"), new Note(8, "D14"), new Note(8, "g13"))
        )
        
    );
}

function load64() { // Notes placement test
    createSvg();
    currentSong = new Song("64 Notes", "Wut", 100,
        new Bar(
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),

            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E0")),
            new SubBar(new Note(64, "E3"))

        )
    );
}
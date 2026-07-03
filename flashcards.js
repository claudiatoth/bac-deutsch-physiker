// ============================================
// LERNKARTEN — Die Physiker (BAC germană maternă)
// Claudia Toth · Figuren · Werk/Epoche · Themen/Symbole · Zitate · Wortschatz
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; fără audio la nivel matern.
// ⚠️ Dürrenmatt d.1990 = NU gemeinfrei → doar citate scurte, verificate.
// ============================================

const flashcardsData = [
    // === Figuren (7) ===
    { de: 'Friedrich Dürrenmatt', ro: 'Autorul (1921–1990) · dramaturg elvețian' },
    { de: 'Die Physiker (1962)', ro: 'Werk · Komödie/Tragikomödie „in zwei Akten"' },
    { de: 'Johann Wilhelm Möbius', ro: 'Genie-Physiker; spielt verrückt (Salomo), verbirgt die Weltformel; opfert alles' },
    { de: '„Newton" (Herbert Georg Beutler)', ro: 'în realitate Geheimagent (Alec Jasper Kilton), din Vest' },
    { de: '„Einstein" (Ernst Heinrich Ernesti)', ro: 'în realitate Geheimagent (Joseph Eisler), din Est' },
    { de: 'Fräulein Dr. Mathilde von Zahnd', ro: 'bucklige Ärztin; singura cu adevărat nebună; kopiert die Formel, will Weltherrschaft' },
    { de: 'Schwester Monika', ro: 'îngrijitoarea lui Möbius; îl iubește; e erdrosselt de el (fürs Geheimnis)' },

    // === Werk & Epoche (6) ===
    { de: 'die Komödie / Tragikomödie', ro: 'Gattung · „eine Komödie in zwei Akten"; groteske Komödie' },
    { de: 'die Moderne / Nachkriegsliteratur', ro: 'Epoche · modernes Drama (Kalter Krieg, Atomzeit)' },
    { de: 'das Sanatorium „Les Cerisiers"', ro: 'Schauplatz · das Irrenhaus (lumea pe dos)' },
    { de: 'die Weltformel', ro: '„System aller möglichen Erfindungen" · cunoașterea periculoasă' },
    { de: 'die drei klassischen Einheiten', ro: 'Ort · Zeit · Handlung (ironic de strict)' },
    { de: 'die „21 Punkte zu den Physikern"', ro: 'comentariul de dramaturgie al lui Dürrenmatt' },

    // === Themen & Symbole (6) ===
    { de: 'die Verantwortung der Wissenschaft', ro: 'tema centrală (răspunderea în Atomzeit)' },
    { de: '„Was einmal gedacht wurde …"', ro: 'cunoașterea e ireversibilă (unwiderruflich)' },
    { de: 'Wahnsinn ↔ Vernunft', ro: 'cei raționali sunt închiși, singura nebună învinge' },
    { de: 'die schlimmstmögliche Wendung', ro: 'dramaturgia lui Dürrenmatt; tritt durch Zufall ein' },
    { de: 'König Salomo', ro: 'Tarnung (Möbius) / Wahn (von Zahnd)' },
    { de: 'der Kalte Krieg', ro: 'cei doi agenți; abuzul de știință prin putere' },

    // === Zitate (7) — cardul ESTE citatul ===
    { de: '„Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden."', ro: 'Kernaussage: cunoașterea e ireversibilă' },
    { de: '„Ich bin Salomo. Ich bin der arme König Salomo."', ro: 'finalul lui Möbius (identificarea cu Salomo)' },
    { de: '„Eine Geschichte ist dann zu Ende gedacht, wenn sie ihre schlimmstmögliche Wendung genommen hat."', ro: 'din „21 Punkte" (dramaturgia)' },
    { de: '„Was alle angeht, können nur alle lösen."', ro: 'din „21 Punkte": responsabilitatea e a tuturor' },
    { de: '„Aber meine Weisheit zerstörte meine Gottesfurcht …"', ro: 'din „Salomo-Psalm"-ul lui Möbius' },
    { de: 'die schlimmstmögliche Wendung (im Stück)', ro: 'von Zahnd a copiat deja formula → jertfa e zadarnică' },
    { de: 'die drei toten Krankenschwestern', ro: 'prețul secretului (jertfele „necesității")' },

    // === Wortschatz DE → RO (7) ===
    { de: 'der Physiker', ro: 'fizicianul' },
    { de: 'das Irrenhaus / die Heilanstalt', ro: 'ospiciul / sanatoriul' },
    { de: 'die Verantwortung', ro: 'răspunderea / responsabilitatea' },
    { de: 'der Wahnsinn', ro: 'nebunia' },
    { de: 'die Komödie', ro: 'comedia' },
    { de: 'der Zufall', ro: 'hazardul / întâmplarea' },
    { de: 'verbergen', ro: 'a ascunde / a tăinui' }
];

// ============================================
// RUNTIME — render + flip (.flipped) + navigare (fără audio)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} Lernkarten:</strong> Figuren · Werk &amp; Epoche · Themen &amp; Symbole · Zitate · Wortschatz.<br>
            Klick auf die Karte für die Erklärung · Pfeile zum Blättern.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Karte 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Klick für die Erklärung</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Zurück</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Weiter →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.innerHTML = c.de;
    ro.innerHTML = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Karte ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);

// ============================================
// ÜBUNGEN — Die Physiker (BAC germană maternă)
// Claudia Toth · 5 Übungen: Multiple Choice + Lückentext (autoverificare)
// Delimitator ' ; apostrof = ’ (U+2019); ghilimele „ " ; & = &amp;
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ß/g, 'ss')
        .replace(/[.!?;:,]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
function answerMatches(input, accept) {
    const n = normalizeAnswer(input);
    if (!n) return false;
    return accept.some(a => normalizeAnswer(a) === n);
}

const ex1Data = {
    instr: '👇 Wähle die richtige Antwort. (Wissen über Werk, Epoche und Inhalt)',
    questions: [
        { q: 'Wer ist der Autor von „Die Physiker"?', options: ['Bertolt Brecht', 'Friedrich Dürrenmatt', 'Max Frisch', 'Thomas Mann'], correct: 1 },
        { q: 'In welche Epoche gehört das Werk?', options: ['in den Barock', 'in die Moderne / Nachkriegsliteratur', 'in die Romantik', 'in die Aufklärung'], correct: 1 },
        { q: 'Welcher Gattung gehört das Werk an?', options: ['Ballade', 'Komödie (Tragikomödie)', 'Sonett', 'Heldenepos'], correct: 1 },
        { q: 'Wo spielt die Handlung?', options: ['an einer Universität', 'in einem Irrenhaus / Sanatorium', 'in einem Labor', 'auf einem Schiff'], correct: 1 },
        { q: 'Was will Möbius vor der Welt verbergen?', options: ['seinen Reichtum', 'seine Weltformel (das gefährliche Wissen)', 'seine Familie', 'seine Krankheit'], correct: 1 },
        { q: 'Wer ist in Wahrheit die einzig Wahnsinnige?', options: ['Möbius', 'Fräulein Doktor von Zahnd', 'Schwester Monika', 'der Inspektor'], correct: 1 },
        { q: 'Wie endet das Stück?', options: ['die Physiker fliehen erfolgreich', 'ihr Opfer ist vergebens — von Zahnd hat alles kopiert', 'Möbius wird geheilt', 'der Inspektor verhaftet alle'], correct: 1 }
    ]
};

const ex2Data = {
    instr: '👇 Ordne jedem Motiv / Zitat seine richtige Bedeutung zu.',
    questions: [
        { q: '„Was einmal gedacht wurde …"', options: ['das Wissen ist unwiderruflich', 'ein Zauberspruch', 'ein Gesetz', 'ein Gebet'], correct: 0 },
        { q: '„die schlimmstmögliche Wendung"', options: ['der schlimmste Ausgang, durch Zufall (Dürrenmatts Dramaturgie)', 'ein Happy End', 'der Anfang des Stücks', 'eine Regieanweisung'], correct: 0 },
        { q: '„König Salomo"', options: ['Tarnung bei Möbius / Wahn bei von Zahnd', 'ein realer König im Stück', 'ein Arzt', 'ein Agent'], correct: 0 },
        { q: 'das Irrenhaus „Les Cerisiers"', options: ['die verkehrte Welt (Vernünftige drin, Wahnsinnige herrscht)', 'ein Gefängnis', 'eine Schule', 'ein Schloss'], correct: 0 },
        { q: '„Newton" und „Einstein"', options: ['zwei Geheimagenten (Ost &amp; West)', 'zwei echte Physiker', 'zwei Ärzte', 'zwei Brüder'], correct: 0 }
    ]
};

const ex3Data = {
    instr: '👇 Welcher Begriff ist gemeint? (wichtig für Prüfungsteil I &amp; II)',
    questions: [
        { q: 'Ein Stück, das komisch und tragisch zugleich ist, heißt …', options: ['Tragikomödie', 'Ballade', 'Ode', 'Novelle'], correct: 0 },
        { q: 'Der überraschende Wendepunkt (durch Zufall) ist die …', options: ['schlimmstmögliche Wendung / Peripetie', 'Exposition', 'Anrede', 'Kadenz'], correct: 0 },
        { q: 'Ort, Zeit und Handlung als strenge Regel = die drei …', options: ['klassischen Einheiten', 'Reime', 'Aufzüge', 'Strophen'], correct: 0 },
        { q: 'Der Missbrauch der Wissenschaft durch rivalisierende Mächte spielt im …', options: ['Kalten Krieg', 'Mittelalter', 'Barock', 'Vormärz'], correct: 0 },
        { q: 'Dürrenmatts Kommentar zum Stück heißt die „21 …"', options: ['Punkte zu den Physikern', 'Szenen', 'Regeln', 'Sonette'], correct: 0 }
    ]
};

const ex4Data = {
    instr: '👇 Ergänze die Sätze mit dem passenden Wort. (ä=ae, ö=oe, ü=ue gehen auch)',
    items: [
        { before: 'Die Komödie „Die Physiker" schrieb Friedrich', after: '.', accept: ['Dürrenmatt', 'Duerrenmatt'], hint: 'autorul', answer: 'Dürrenmatt' },
        { before: 'Das Werk gehört zur Epoche der', after: '.', accept: ['Moderne', 'Nachkriegsliteratur'], hint: 'epoca', answer: 'Moderne' },
        { before: 'Möbius verbirgt seine welterschütternde', after: '.', accept: ['Weltformel'], hint: 'formula lumii', answer: 'Weltformel' },
        { before: 'Die einzig wirklich Wahnsinnige ist Fräulein Doktor von', after: '.', accept: ['Zahnd'], hint: 'numele doctoriței', answer: 'Zahnd' },
        { before: '„Was einmal gedacht wurde, kann nicht mehr', after: 'werden."', accept: ['zurückgenommen', 'zurueckgenommen'], hint: 'retras', answer: 'zurückgenommen' }
    ]
};

const ex5Data = {
    instr: '👇 Bewerbungsbrief (Prüfungsteil III): Wähle das Richtige.',
    questions: [
        { q: 'Welche zwei Elemente bringen je 2 Punkte?', options: ['Datum und Unterschrift', 'Betreffzeile und Anrede', 'Absender und Anlagen', 'Grußformel und Empfänger'], correct: 1 },
        { q: 'Welche Grußformel ist passend (formell)?', options: ['Tschüss und bis bald', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Servus'], correct: 2 },
        { q: 'Wie beginnt man den Brieftext, wenn man den Namen nicht kennt?', options: ['Hallo!', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag, Leute,'], correct: 1 },
        { q: 'Welcher Satz passt in eine Bewerbung?', options: ['Ich will unbedingt diesen Job.', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Gebt mir bitte die Stelle.', 'Ich brauche dringend Geld.'], correct: 1 }
    ]
};

function buildMC(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.questions.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' + it.q + '</label><div class="mc-options">';
        it.options.forEach(function (opt, j) {
            const id = prefix + '-q' + i + '-o' + j;
            html += '<div class="mc-option"><input type="radio" name="' + prefix + '-q' + i + '" id="' + id + '" value="' + j + '"><label for="' + id + '">' + opt + '</label></div>';
        });
        html += '</div><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkMC(data, prefix) {
    let correct = 0;
    data.questions.forEach(function (it, i) {
        const sel = document.querySelector('input[name="' + prefix + '-q' + i + '"]:checked');
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (sel && parseInt(sel.value, 10) === it.correct) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.options[it.correct]; }
        }
    });
    return { correct: correct, total: data.questions.length };
}

function resetMC(containerId, data, prefix) {
    data.questions.forEach(function (it, i) {
        const sels = document.querySelectorAll('input[name="' + prefix + '-q' + i + '"]');
        sels.forEach(function (s) { s.checked = false; });
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function buildLueckentext(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.items.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' +
            it.before + ' <input type="text" id="' + prefix + '-in-' + i + '" placeholder="(' + it.hint + ')" autocomplete="off"> ' + it.after +
            '</label><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkLueckentext(data, prefix) {
    let correct = 0;
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (input && answerMatches(input.value, it.accept)) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.answer; }
        }
    });
    return { correct: correct, total: data.items.length };
}

function resetLueckentext(data, prefix) {
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        if (input) input.value = '';
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function checkEx1() { return checkMC(ex1Data, 'ex1'); }
function checkEx2() { return checkMC(ex2Data, 'ex2'); }
function checkEx3() { return checkMC(ex3Data, 'ex3'); }
function checkEx4() { return checkLueckentext(ex4Data, 'ex4'); }
function checkEx5() { return checkMC(ex5Data, 'ex5'); }

function resetEx1() { resetMC('ex1-container', ex1Data, 'ex1'); }
function resetEx2() { resetMC('ex2-container', ex2Data, 'ex2'); }
function resetEx3() { resetMC('ex3-container', ex3Data, 'ex3'); }
function resetEx4() { resetLueckentext(ex4Data, 'ex4'); }
function resetEx5() { resetMC('ex5-container', ex5Data, 'ex5'); }

(function () {
    function buildAll() {
        buildMC('ex1-container', ex1Data, 'ex1');
        buildMC('ex2-container', ex2Data, 'ex2');
        buildMC('ex3-container', ex3Data, 'ex3');
        buildLueckentext('ex4-container', ex4Data, 'ex4');
        buildMC('ex5-container', ex5Data, 'ex5');
    }
    if (document.readyState !== 'loading') { buildAll(); }
    else { document.addEventListener('DOMContentLoaded', buildAll); }
})();

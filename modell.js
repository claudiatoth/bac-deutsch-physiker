// ============================================
// MODELL-PRÜFUNG — Die Physiker (BAC germană maternă)
// Claudia Toth · Prüfungsteil I + II + III rezolvate complet
// „Versuch zuerst selbst → dann aufdecken". Galben = zu merken. 🏅 = warum 10p.
// Reutilizează toggleMuster() din theory.js.
// Prüfungsteil I: Goethe „Der Zauberlehrling" (1797, Auszug) — verbatim verifiziert (gemeinfrei).
// Prüfungsteil II: Charakterisierung Möbius (Dürrenmatt, Die Physiker) — opera studiată.
// ============================================

const modellHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Aici ai o <strong>probă BAC completă</strong> (Prüfungsteil I + II + III), rezolvată integral. La <strong>Prüfungsteil I</strong> ai „Der Zauberlehrling" de Goethe (Auszug) — perechea perfectă: ucenicul dezlănțuie forțe pe care nu le mai poate opri („<strong>Die ich rief, die Geister, / Werd ich nun nicht los</strong>"), exact ca <strong>cunoașterea</strong> din Die Physiker, care nu mai poate fi retrasă. La <strong>Prüfungsteil II</strong> ai o Charakterisierung completă a lui <strong>Möbius</strong>. <strong>Încearcă întâi singur</strong>, apoi dezvăluie. Ce e <span class="merken">galben</span> merită memorat.</div>
        </div>
    </div>
    <div class="strategie">Prüfungsteil II (Charakterisierung pe opera studiată) se învață și aduce nota. La Prüfungsteil I textul e necunoscut → memorezi METODA. La III memorezi tiparul scrisorii.</div>

    <!-- ================= SUBIECT I ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📄 Prüfungsteil I — Textinterpretation</h4></div>
    <p>Lesen Sie den Gedichtauszug und bearbeiten Sie die Aufgaben.</p>
    <div class="gedicht">
        <span class="titel">Johann Wolfgang von Goethe: Der Zauberlehrling (1797) — Auszug</span>
        <div class="strophe">Hat der alte Hexenmeister<br>Sich doch einmal wegbegeben!<br>Und nun sollen seine Geister<br>Auch nach meinem Willen leben.</div>
        <div class="strophe" style="text-align:center; color:#8a8175; font-style:normal;">[…]</div>
        <div class="strophe">Ach, ich merk es! Wehe! wehe!<br>Hab ich doch das Wort vergessen!</div>
        <div class="strophe" style="text-align:center; color:#8a8175; font-style:normal;">[…]</div>
        <div class="strophe">Die ich rief, die Geister,<br>Werd ich nun nicht los.</div>
        <div class="strophe" style="text-align:center; color:#8a8175; font-style:normal;">[…]</div>
        <div class="strophe">In die Ecke,<br>Besen! Besen!<br>Seids gewesen.<br>Denn als Geister<br>Ruft euch nur, zu seinem Zwecke,<br>Erst hervor der alte Meister.</div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 1:</strong> Interpretieren Sie den Gedichtauszug, indem Sie auf die äußere Form und auf die sprachliche Gestaltung eingehen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1a')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1a">
        <p><strong>Einleitung:</strong> Der Auszug stammt aus der <span class="merken">Ballade „Der Zauberlehrling" (1797) von J. W. von Goethe</span>. Ein <strong>Zauberlehrling</strong> nutzt die Abwesenheit seines Meisters, um selbst zu zaubern — doch er <strong>ruft Geister, die er nicht mehr beherrschen kann</strong>.</p>
        <p><strong>Äußere Form:</strong> eine <span class="merken">Ballade</span> (erzählendes Gedicht in Strophen); der treibende Rhythmus und der wiederkehrende <strong>Kehrreim</strong> spiegeln das drängende Geschehen.</p>
        <p><strong>Sprachliche Gestaltung:</strong></p>
        <ul>
            <li>Der <span class="merken">Imperativ / Befehl</span>: „Walle! walle" bzw. „In die Ecke, / Besen! Besen!" — der Wille, zu befehlen.</li>
            <li>Die <span class="merken">Ausrufe der Panik</span>: „Ach, ich merk es! Wehe! wehe! / Hab ich doch das Wort vergessen!" — die wachsende Angst und Ohnmacht.</li>
            <li>Der <span class="merken">berühmte Kehrreim</span>: „Die ich rief, die Geister, / Werd ich nun nicht los." — der Kontrollverlust.</li>
            <li>Der <span class="merken">Meister als rettende Autorität</span>: „Erst hervor der alte Meister" — nur der Meister kann die Geister bannen.</li>
        </ul>
        <p><strong>Schluss:</strong> Der Auszug gestaltet die <strong>entfesselten Kräfte, die der Mensch nicht beherrscht</strong>. Das ist verwandt mit Dürrenmatts „Die Physiker": Auch dort ist das <strong>entfesselte Wissen</strong> nicht mehr zurückzunehmen („Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden"). Ein wichtiger Unterschied: Bei Goethe <strong>rettet der Meister</strong> — bei Dürrenmatt fehlt eine solche rettende Instanz (die „Meisterin" von Zahnd ist selbst wahnsinnig).</p>
        <div class="warum"><ul>
            <li>Einleitung mit Autor, Werk, Epoche und Deutungshypothese (entfesselte Kräfte) ✔</li>
            <li>äußere Form (Ballade, Kehrreim, treibender Rhythmus) benannt ✔</li>
            <li>mindestens 3 sprachliche Mittel <strong>mit Beleg</strong> (Imperativ, Panik-Ausrufe, Kehrreim, Meister-Motiv) ✔</li>
            <li>Schluss mit Deutung (+ Bezug zu Die Physiker: Wissen ist unwiderruflich) ✔</li>
        </ul></div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 2:</strong> Beide Texte handeln von Kräften, die der Mensch entfesselt, aber nicht mehr beherrscht. Wer trägt Ihrer Meinung nach die Verantwortung für die Folgen von Wissen und Technik? Belegen Sie mit mindestens zwei Beispielen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1b')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1b">
        <p><span class="merken">Meiner Meinung nach</span> trägt <strong>jeder Verantwortung</strong>, der Kräfte entfesselt — doch die Folgen betreffen am Ende <strong>alle</strong>.</p>
        <p><strong>Einerseits</strong> zeigt „Der Zauberlehrling", wie leichtfertig der Mensch Mächte ruft, die er nicht bändigen kann: „Die ich rief, die Geister, / Werd ich nun nicht los" — hier braucht es noch den <strong>Meister</strong>, der eingreift. <strong>Andererseits</strong> zeigt „Die Physiker", dass es in der modernen Welt <strong>keinen rettenden Meister</strong> mehr gibt: Möbius will sein Wissen allein zurückhalten, doch der Zufall (von Zahnd) macht sein Opfer zunichte. Deshalb gilt Dürrenmatts Satz: „<strong>Was alle angeht, können nur alle lösen</strong>." Die Verantwortung des Einzelnen genügt nicht.</p>
        <p><span class="merken">Abschließend vertrete ich die Auffassung</span>, dass Wissenschaftler zwar Verantwortung tragen, die Kontrolle über die Folgen aber nur die <strong>Gemeinschaft</strong> gemeinsam übernehmen kann.</p>
        <div class="warum"><ul>
            <li>beide Texte richtig erfasst (entfesselte, unbeherrschbare Kräfte) ✔</li>
            <li>klare eigene Position (Verantwortung des Einzelnen ↔ der Gemeinschaft) ✔</li>
            <li><strong>zwei</strong> Argumente mit Beispielen (Zauberlehrling / Die Physiker) ✔</li>
            <li>Redemittel der Meinungsäußerung + Rückbezug auf die Texte ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT II ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📝 Prüfungsteil II — Charakterisierung (Möbius)</h4></div>
    <p><strong>Aufgabe:</strong> Charakterisieren Sie die Figur <em>Johann Wilhelm Möbius</em> aus Dürrenmatts „Die Physiker". Gehen Sie auf soziale Stellung, Charakterzüge, Entwicklung und Beziehungen ein.</p>
    <button class="muster-btn" onclick="toggleMuster('s2')">🔓 Muster-Charakterisierung aufdecken</button>
    <div class="muster-antwort" id="s2">
        <p><strong>Einleitung:</strong> In der Komödie <span class="merken">„Die Physiker" (1962) von Friedrich Dürrenmatt</span> steht <strong>Johann Wilhelm Möbius</strong> im Mittelpunkt — ein genialer Physiker, der aus Verantwortung Wahnsinn vorspielt und am Ende tragisch scheitert.</p>
        <p><strong>Soziale Stellung:</strong> Möbius ist ein <span class="merken">genialer Physiker</span>, der die „Weltformel" entdeckt hat. Er lebt (scheinbar wahnsinnig) im Sanatorium <strong>„Les Cerisiers"</strong>; seine Familie hat er verlassen.</p>
        <p><strong>Charakterzüge:</strong> Er ist <span class="merken">verantwortungsbewusst und selbstlos</span>, zugleich <strong>einsam</strong> und bereit zum äußersten Opfer. Um sein gefährliches Wissen zu verbergen, spielt er den Wahnsinnigen (König Salomo) — und wird sogar zum <strong>Mörder</strong> (an Schwester Monika).</p>
        <p><strong>Entwicklung:</strong> von der vorgespielten Verrücktheit über das <strong>Opfer</strong> (Familie, Monika, Freiheit) bis zur Enthüllung seiner wahren Genialität im 2. Akt — und schließlich zum <strong>tragischen Scheitern</strong>: „<em>Ich bin Salomo. Ich bin der arme König Salomo.</em>"</p>
        <p><strong>Beziehungen:</strong> Zu <strong>Schwester Monika</strong> (die ihn liebt — er tötet sie fürs Geheimnis), zu den beiden <strong>Agenten</strong> (er überzeugt sie zu bleiben) und zu <strong>von Zahnd</strong>, die sein Opfer durch den Zufall vernichtet.</p>
        <p><strong>Schluss:</strong> <span class="merken">Zusammenfassend</span> verkörpert Möbius das <strong>Gewissen der Wissenschaft</strong>: Er handelt maximal verantwortungsvoll — und scheitert dennoch an der grotesken Wirklichkeit (der schlimmstmöglichen Wendung).</p>
        <div class="warum"><ul>
            <li>Einleitung: Werk, Autor, <strong>Jahr</strong>, Gattung und Figur ✔</li>
            <li>soziale Stellung (genialer Physiker, Sanatorium) ✔</li>
            <li>Charakterzüge <strong>mit Belegen</strong> (verantwortungsbewusst, selbstlos, Mörder aus „Notwendigkeit") ✔</li>
            <li>Entwicklung (Tarnung → Opfer → Scheitern) + Beziehungen (Monika, Agenten, von Zahnd) ✔</li>
            <li>Schluss mit Deutung (das Gewissen der Wissenschaft) ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT III ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">✉️ Prüfungsteil III — Bewerbungsbrief</h4></div>
    <p><strong>Aufgabe:</strong> Sie heißen Robert Neumann und bewerben sich auf eine Anzeige des <em>Science Centers „ExperiMINT"</em> um einen Ferienjob als Aushilfe (Empfang &amp; Besucherführung). Schreiben Sie einen vollständigen Bewerbungsbrief.</p>
    <button class="muster-btn" onclick="toggleMuster('s3')">🔓 Muster-Bewerbung aufdecken</button>
    <div class="muster-antwort" id="s3">
        <p style="color:#5A5147;">Robert Neumann<br>Str. Lungă 20<br>500035 Kronstadt</p>
        <p style="color:#5A5147;">Science Center „ExperiMINT"<br>z. Hd. Frau Dr. Kern<br>Str. Republicii 5<br>500030 Kronstadt</p>
        <p style="color:#5A5147;">Kronstadt, den 3. Juli 2026</p>
        <p><span class="merken"><strong>Betreff: Bewerbung um einen Ferienjob als Aushilfe im Science Center</strong></span></p>
        <p><span class="merken">Sehr geehrte Frau Dr. Kern,</span></p>
        <p><span class="merken">mit großem Interesse habe ich Ihre Anzeige gelesen</span> und bewerbe mich hiermit um die Stelle als Aushilfe in den Sommerferien.</p>
        <p>Ich besuche die zwölfte Klasse und begeistere mich sehr für <strong>Naturwissenschaften</strong>, besonders für <strong>Physik</strong> — auch die Frage nach der Verantwortung der Wissenschaft (wie in Dürrenmatts „Die Physiker") beschäftigt mich. <span class="merken">Zu meinen Stärken gehören</span> Zuverlässigkeit, Freundlichkeit und Freude am Umgang mit Menschen. Außerdem spreche ich gut Deutsch, Rumänisch und Englisch, was bei Besuchern hilfreich ist.</p>
        <p>Gern möchte ich am Empfang helfen, Gäste begrüßen und bei Experimenten und Führungen unterstützen. <span class="merken">Über ein persönliches Vorstellungsgespräch würde ich mich sehr freuen.</span></p>
        <p><span class="merken">Mit freundlichen Grüßen</span><br>Robert Neumann</p>
        <p style="color:#5A5147; font-size:0.85rem;">Anlage: Lebenslauf</p>
        <div class="warum"><ul>
            <li>Absender, Empfänger, Ort + Datum ✔</li>
            <li><strong>Betreffzeile (2 P)</strong> und <strong>Anrede (2 P)</strong> korrekt ✔</li>
            <li>Einleitung (Bezug zur Anzeige) + Hauptteil (Stärken) + Schluss (Gespräch) ✔</li>
            <li>Grußformel, Unterschrift, Anlage ✔</li>
        </ul></div>
    </div>
`;

// ============================================
// INJECTARE
// ============================================
(function () {
    function inject() {
        const c = document.getElementById('modell-container');
        if (c) c.innerHTML = modellHTML;
    }
    if (document.readyState !== 'loading') { inject(); }
    else { document.addEventListener('DOMContentLoaded', inject); }
})();

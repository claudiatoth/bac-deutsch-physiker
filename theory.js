// ============================================
// THEORIE — BAC kompakt: Die Physiker (Friedrich Dürrenmatt, 1962)
// Limba și literatura germană maternă · Claudia Toth
// Conținut în germană; note de strategie scurte în RO.
// Moderne / Nachkriegsliteratur — Komödie (Tragikomödie) · Charakterisierung.
// ⚠️ Dürrenmatt d.1990 = NU e gemeinfrei → doar citate scurte de studiu (verificate), fără reproducerea scenelor.
// Prüfungsteil-I-Gedicht „Der Zauberlehrling" (Goethe, 1797, Auszug) verbatim verifiziert (gemeinfrei).
// ============================================

const theoryHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Dürrenmatts <em>Die Physiker</em> (1962) ist DIE <strong>groteske Komödie</strong> über die <strong>Verantwortung der Wissenschaft</strong>. In einem Irrenhaus verstecken sich drei „verrückte" Physiker — doch der geniale <strong>Möbius</strong> spielt nur Wahnsinn, um seine welterschütternde <strong>Weltformel</strong> zu verbergen. Am Ende siegt die <strong>schlimmstmögliche Wendung</strong>: die einzig wirklich Wahnsinnige, die Ärztin <strong>von Zahnd</strong>, hat längst alles kopiert. Merke dir <strong>Komödie</strong>, <strong>Verantwortung der Wissenschaft</strong> und „<strong>Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden</strong>". Öffne mai jos secțiune cu secțiune. ⚛️</div>
        </div>
    </div>

    <!-- 0: BAC auf einen Blick -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🆘 BAC auf einen Blick (die SOS-Seite)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="sos-box">
                <h4>Die Physiker — das Wichtigste in 1 Minute</h4>
                <div class="sos-row"><div class="sos-k">Autor</div><div class="sos-v">Friedrich Dürrenmatt (1921–1990) — Schweizer Dramatiker</div></div>
                <div class="sos-row"><div class="sos-k">Werk / Jahr</div><div class="sos-v">Die Physiker — geschrieben 1961, <strong>Uraufführung 1962</strong> (Zürich)</div></div>
                <div class="sos-row"><div class="sos-k">Epoche</div><div class="sos-v"><strong>Moderne / Nachkriegsliteratur</strong> — modernes Drama (Dürrenmatts groteske Dramaturgie)</div></div>
                <div class="sos-row"><div class="sos-k">Gattung</div><div class="sos-v"><strong>Komödie</strong> („eine Komödie in zwei Akten") — genauer <strong>Tragikomödie / groteske Komödie</strong></div></div>
                <div class="sos-row"><div class="sos-k">Schauplatz</div><div class="sos-v">das Sanatorium/Irrenhaus <strong>„Les Cerisiers"</strong>, geleitet von Fräulein Doktor <strong>Mathilde von Zahnd</strong></div></div>
                <div class="sos-row"><div class="sos-k">Aufbau</div><div class="sos-v"><strong>2 Akte</strong>; die <strong>drei klassischen Einheiten</strong> (Ort, Zeit, Handlung) — ironisch streng</div></div>
                <div class="sos-row"><div class="sos-k">Hauptfiguren</div><div class="sos-v"><strong>Möbius</strong> (Genie, spielt verrückt) · <strong>„Newton"</strong> &amp; <strong>„Einstein"</strong> (in Wahrheit Geheimagenten) · Dr. <strong>von Zahnd</strong> (die einzig wirklich Wahnsinnige)</div></div>
                <div class="sos-row"><div class="sos-k">Themen</div><div class="sos-v"><strong>Verantwortung der Wissenschaft</strong> · Wahnsinn ↔ Vernunft · <strong>Zufall &amp; schlimmstmögliche Wendung</strong> · Missbrauch der Macht</div></div>
                <div class="sos-row"><div class="sos-k">Kernaussage</div><div class="sos-v">Möbius versteckt seine <strong>Weltformel</strong> im Irrenhaus, um die Menschheit zu schützen; die drei Physiker opfern ihre Freiheit — doch die wahnsinnige von Zahnd hat alles <strong>kopiert</strong> und will die Weltherrschaft. <strong>Das Opfer ist vergebens.</strong></div></div>
                <div class="sos-row"><div class="sos-k">Schlüsselzitat</div><div class="sos-v">„<strong>Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden.</strong>"</div></div>
            </div>
            <div class="strategie">Pagina de memorat pe de rost. Autor (Dürrenmatt) – Jahr (1962) – Epoche (Moderne/Nachkriegszeit) – Gattung (Komödie/Tragikomödie) trebuie să iasă automat în Einleitung.</div>
        </div>
    </div>

    <!-- 1: Die Handlung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📜 Die Handlung (Inhalt &amp; Aufbau)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <h4>1. Akt — drei „verrückte" Physiker &amp; zwei Morde</h4>
                <p>Im Sanatorium <strong>„Les Cerisiers"</strong> leben drei Physiker als angebliche Geisteskranke: <strong>„Newton"</strong>, <strong>„Einstein"</strong> und <strong>Johann Wilhelm Möbius</strong>, dem angeblich <strong>König Salomo erscheint</strong>. „Newton" und „Einstein" haben je eine <strong>Krankenschwester erdrosselt</strong>; der <strong>Inspektor Voß</strong> ermittelt, ist aber machtlos, weil die Täter „unzurechnungsfähig" sind. Als Möbius' frühere Frau mit den Kindern zum <strong>Abschied</strong> kommt und seine Pflegerin <strong>Schwester Monika</strong> mit ihm fliehen will, <strong>erdrosselt auch Möbius</strong> sie — um sein Geheimnis zu wahren.</p>
            </div>
            <div class="theory-box">
                <h4>2. Akt — die Wahrheit &amp; die schlimmstmögliche Wendung</h4>
                <p>Es zeigt sich: Alle drei sind <strong>bei Verstand</strong>. „Newton" und „Einstein" sind <strong>Geheimagenten rivalisierender Großmächte</strong> (Ost &amp; West), die Möbius und seine <strong>Weltformel</strong> für ihre Seite gewinnen wollen. Möbius überzeugt sie: Nur wenn alle drei <strong>im Irrenhaus bleiben</strong> und schweigen, ist die Welt sicher — sie stimmen zu und <strong>opfern ihre Freiheit</strong>. Doch dann kommt die <strong>schlimmstmögliche Wendung</strong>: Dr. <strong>von Zahnd</strong> enthüllt, dass <strong>sie</strong> die einzig Wahnsinnige ist, dass <strong>ihr</strong> Salomo erscheint und dass sie Möbius' Manuskripte längst <strong>kopiert</strong> hat, um mit der Weltformel die <strong>Weltherrschaft</strong> zu erringen. Die drei sind gefangen, ihr Opfer war <strong>vergebens</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselzitate (verbatim, kurz)</h4>
                <div class="zitat">„Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden."</div>
                <div class="zitat">Möbius am Ende: „Ich bin Salomo. Ich bin der arme König Salomo."</div>
                <div class="zitat">Dürrenmatt (21 Punkte): „Eine Geschichte ist dann zu Ende gedacht, wenn sie ihre schlimmstmögliche Wendung genommen hat."</div>
            </div>
            <div class="bac-wissen">Reține lanțul: 3 „nebuni" + 2 crime → Möbius o ucide și pe Monika (ca să-și păstreze secretul) → în actul 2: toți 3 sunt sănătoși, „Newton"/„Einstein" = agenți; Möbius îi convinge să rămână în ospiciu ca să salveze lumea → <strong>schlimmstmögliche Wendung</strong>: von Zahnd, singura nebună, a copiat deja formula și vrea puterea mondială. <strong>Jertfa e zadarnică.</strong></div>
        </div>
    </div>

    <!-- 2: Die Figuren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 Die Figuren verstehen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">

            <div class="theory-box">
                <h4>👤 Johann Wilhelm Möbius — das geniale, tragische Opfer</h4>
                <p><em>Ein genialer Physiker, der die „Weltformel" entdeckt hat und Wahnsinn (König Salomo) nur vorspielt, um die Menschheit vor seinem Wissen zu schützen.</em></p>
                <div class="merkmale">
                    <span class="chip plus">genial</span><span class="chip plus">verantwortungsbewusst</span><span class="chip plus">selbstlos (opfert alles)</span>
                    <span class="chip minus">einsam/isoliert</span><span class="chip minus">Mörder (aus „Notwendigkeit")</span><span class="chip minus">am Ende gescheitert</span>
                </div>
                <p>Möbius <strong>opfert alles</strong> — Familie, Freiheit, sogar Schwester Monika —, um sein gefährliches Wissen zu verbergen. Er handelt aus <strong>Verantwortung</strong>, wird dabei aber zum <strong>Mörder</strong> und scheitert tragisch: Sein Opfer ist durch den <strong>Zufall</strong> (von Zahnd) vergebens.</p>
                <div class="bac-wissen">Möbius = personajul-cheie pt Charakterisierung: geniul care alege <strong>responsabilitatea</strong> în locul faimei, se sacrifică total — și eșuează din cauza hazardului. Studiul conștiinței omului de știință.</div>
            </div>

            <div class="theory-box">
                <h4>👤 „Newton" &amp; „Einstein" — die Geheimagenten (der Kalte Krieg)</h4>
                <p>Sie geben sich als die verrückten Physiker <strong>Newton</strong> und <strong>Einstein</strong> aus, sind aber <strong>Geheimagenten</strong> rivalisierender Großmächte (Ost &amp; West). Sie verkörpern den <strong>Kalten Krieg</strong> und die <strong>Instrumentalisierung der Wissenschaft</strong> durch die Macht — die Physik soll für Rüstung und Herrschaft missbraucht werden.</p>
            </div>

            <div class="theory-box">
                <h4>👤 Fräulein Doktor Mathilde von Zahnd — die einzig wirklich Wahnsinnige</h4>
                <p>Die <strong>bucklige Psychiaterin</strong> und Besitzerin des Sanatoriums. Sie ist die <strong>einzige, die wirklich wahnsinnig ist</strong>: Ihr erscheint (nach eigener Überzeugung) König Salomo. Sie hat Möbius' Manuskripte <strong>heimlich kopiert</strong> und plant, mit der Weltformel über ihren <strong>Konzern/Trust</strong> die <strong>Weltherrschaft</strong> zu erringen. Sie verkörpert die <strong>schlimmstmögliche Wendung</strong>.</p>
            </div>

            <div class="theory-box">
                <h4>🔗 Figurenkonstellation</h4>
                <div class="konstell">
                    <div class="konstell-center">die 3 Physiker (Vernunft &amp; Opfer) ⟷ Dr. von Zahnd (Wahnsinn &amp; Macht)</div>
                    <div class="konstell-card"><div class="kf">Möbius ↔ „Newton" / „Einstein"</div><div class="kb">er will schützen — sie (Agenten) wollen die Formel für Ost/West 🕵️</div></div>
                    <div class="konstell-card"><div class="kf">Möbius ↔ Schwester Monika</div><div class="kb">sie liebt ihn und will fliehen — er tötet sie fürs Geheimnis 💔</div></div>
                    <div class="konstell-card"><div class="kf">die 3 Physiker ↔ von Zahnd</div><div class="kb">die Vernünftigen sind gefangen, die Wahnsinnige siegt 🔑</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Themen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 Die wichtigsten Themen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>1. Die Verantwortung der Wissenschaft</h4>
                <p>Das zentrale Thema: Darf der Wissenschaftler alles erforschen — und wer trägt die <strong>Verantwortung</strong> für die Folgen? Im <strong>Atomzeitalter</strong> kann Wissen die Menschheit vernichten. Möbius zieht die radikale Konsequenz und will sein Wissen <strong>verbergen</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>2. „Was einmal gedacht wurde …" — Wissen ist unwiderruflich</h4>
                <p>Einmal gemachte Entdeckungen lassen sich <strong>nicht zurücknehmen</strong>. Möbius' Versuch, das Wissen zu löschen (er verbrennt seine Manuskripte), scheitert — von Zahnd hat es längst kopiert. Das Wissen ist in der Welt.</p>
            </div>
            <div class="theory-box">
                <h4>3. Wahnsinn ↔ Vernunft</h4>
                <p>Die Verkehrung: Die <strong>Vernünftigen</strong> (die drei Physiker) sitzen im Irrenhaus und opfern sich, während die <strong>einzig Wahnsinnige</strong> (von Zahnd) frei ist und siegt. Wer ist hier eigentlich „verrückt"?</p>
            </div>
            <div class="theory-box">
                <h4>4. Der Zufall &amp; die schlimmstmögliche Wendung</h4>
                <p>Nach Dürrenmatts Dramaturgie (die „21 Punkte") nimmt die Geschichte ihre <strong>schlimmstmögliche Wendung</strong> — durch den <strong>Zufall</strong>: dass ausgerechnet die Ärztin wahnsinnig und machtgierig ist. So wird jeder Plan des Einzelnen zunichte.</p>
            </div>
            <div class="theory-box">
                <h4>5. Macht &amp; Missbrauch</h4>
                <p>Der <strong>Kalte Krieg</strong> (die beiden Agenten) und von Zahnds Griff nach der <strong>Weltherrschaft</strong> zeigen: Die Macht will die Wissenschaft <strong>missbrauchen</strong>. „Was alle angeht, können nur alle lösen" — der Einzelne ist machtlos.</p>
            </div>
            <div class="strategie">La BAC: tema-vedetă e <strong>die Verantwortung der Wissenschaft</strong> + „Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden". Leagă fiecare temă de o scenă (crimele, actul 2, finalul von Zahnd).</div>
        </div>
    </div>

    <!-- 4: Symbole -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎭 Symbole &amp; Motive leicht erklärt</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <table class="theory-table">
                    <thead><tr><th>Symbol / Motiv</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">das Irrenhaus „Les Cerisiers"</td><td>die <strong>verkehrte Welt</strong>: die Vernünftigen sind eingesperrt, die Wahnsinnige herrscht.</td></tr>
                        <tr><td class="nomen">die Weltformel</td><td>das gefährliche, <strong>unwiderrufliche Wissen</strong> — das „System aller möglichen Erfindungen".</td></tr>
                        <tr><td class="nomen">König Salomo</td><td>bei Möbius die <strong>Tarnung</strong> (vorgespielte Weisheit) — bei von Zahnd der <strong>Wahn</strong> (Machtauftrag).</td></tr>
                        <tr><td class="nomen">die drei toten Krankenschwestern</td><td>der <strong>Preis des Geheimnisses</strong> — die Opfer der „Notwendigkeit".</td></tr>
                        <tr><td class="nomen">die drei klassischen Einheiten</td><td>ironische <strong>Ordnung über dem Chaos</strong> — die strenge Form kontrastiert mit dem grotesken Inhalt.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="strategie">Cele mai „rentabile" la examen: <strong>das Irrenhaus</strong> (lumea pe dos), <strong>die Weltformel</strong> (cunoașterea periculoasă) și <strong>König Salomo</strong> (mască la Möbius / nebunie la von Zahnd).</div>
        </div>
    </div>

    <!-- 5: Aufbau & Form -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏗️ Aufbau und Form</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>Form &amp; ihre Wirkung</h4>
                <ul>
                    <li><strong>Komödie / Tragikomödie / groteske Komödie</strong>: Dürrenmatt wählt die <strong>Komödie</strong>, weil die Welt paradox und grotesk geworden ist — nur so lässt sich das Tragische fassen.</li>
                    <li><strong>2 Akte</strong> und die <strong>drei klassischen Einheiten</strong> (ein Salon, wenige Stunden, eine Handlung) — ironisch streng.</li>
                    <li><strong>Kriminalstück-Elemente</strong> (Morde, Inspektor Voß) verbinden sich mit dem <strong>Ideendrama</strong> (die Verantwortung der Wissenschaft).</li>
                    <li><strong>Die schlimmstmögliche Wendung</strong> (die Peripetie am Schluss) — die überraschende, groteske Umkehrung.</li>
                    <li><strong>Die „21 Punkte zu den Physikern"</strong> — Dürrenmatts eigener Dramaturgie-Kommentar zum Stück.</li>
                </ul>
            </div>
            <div class="bac-wissen">Forma e ARGUMENT: <strong>Komödie/groteske Komödie</strong> (lumea e paradoxală → doar comedia o prinde), cele <strong>trei unități clasice</strong> (ordine ironică peste haos), elemente de <strong>Kriminalstück</strong> + Ideendrama, și <strong>schlimmstmögliche Wendung</strong> la final. Comentează asta!</div>
        </div>
    </div>

    <!-- 6: Sprache & Stil -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>✒️ Sprache und Stil</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Stilmittel (mit Belegen)</h4>
                <table class="theory-table">
                    <thead><tr><th>Merkmal</th><th>Beleg / Funktion</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">groteske Komik + Ernst</td><td>das Lächerliche (drei „Verrückte") trägt einen tödlichen Ernst — die Tragikomödie</td></tr>
                        <tr><td class="nomen">Paradoxie &amp; Pointe</td><td>die Umkehrung: die Vernünftigen scheitern, die Wahnsinnige siegt — die schlimmstmögliche Wendung</td></tr>
                        <tr><td class="nomen">Ironie</td><td>die klassischen Einheiten und das „Irrenhaus" als Ort der wahren Vernunft</td></tr>
                        <tr><td class="nomen">Kriminalstück-Spannung</td><td>Morde, Verhöre, ein ratloser Inspektor — die spannende, doch absurde Ermittlung</td></tr>
                        <tr><td class="nomen">pointierte Dialoge &amp; Aphorismen</td><td>„Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden" — die Gedanken verdichtet in Sätzen</td></tr>
                        <tr><td class="nomen">Anspielungen</td><td>Newton, Einstein, König Salomo — Namen als Zeichen (Wissenschaft, Weisheit, Macht)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="bac-wissen">Die Physiker e o <strong>groteske Komödie/Tragikomödie</strong> — la analiză comentează <strong>komika grotescă + seriozitatea</strong>, <strong>paradoxul/pointa</strong> (schlimmstmögliche Wendung), <strong>ironia</strong> (nebunii = cei sănătoși) și dialogurile <strong>aforistice</strong>.</div>
        </div>
    </div>

    <!-- 7: Interpretation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 Interpretation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="theory-box">
                <h4>Der zentrale Gedanke</h4>
                <p><strong>Eine groteske Komödie über die Verantwortung der Wissenschaft im Atomzeitalter.</strong> Dürrenmatt zeigt: Einmal gedachtes Wissen lässt sich nicht zurücknehmen, und der <strong>Einzelne</strong> kann die Gefahr nicht allein bannen — „Was alle angeht, können nur alle lösen". Durch den <strong>Zufall</strong> (die wahnsinnige, machtgierige von Zahnd) nimmt die Geschichte ihre <strong>schlimmstmögliche Wendung</strong>: Das Opfer der Physiker ist vergebens, die Welt ist bedroht.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselpunkte</h4>
                <ul>
                    <li><strong>Verantwortung der Wissenschaft:</strong> die zentrale Frage der Atomzeit.</li>
                    <li><strong>Unwiderruflichkeit des Wissens:</strong> „Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden".</li>
                    <li><strong>Wahnsinn ↔ Vernunft:</strong> die Vernünftigen gefangen, die Wahnsinnige siegt.</li>
                    <li><strong>Zufall &amp; schlimmstmögliche Wendung:</strong> jeder Plan des Einzelnen scheitert.</li>
                    <li><strong>Form = Wirkung:</strong> groteske Komödie, klassische Einheiten, Kriminalstück + Ideendrama.</li>
                </ul>
            </div>
            <div class="bac-wissen">Cele mai probabile subiecte: „die Verantwortung der Wissenschaft", „Charakterisierung Möbius", „die schlimmstmögliche Wendung" și „warum eine Komödie?". Pereche utilă: Goethe „Der Zauberlehrling" — ucenicul dezlănțuie forțe pe care nu le mai poate opri („Die ich rief, die Geister, / werd ich nun nicht los") ↔ Die Physiker: cunoașterea dezlănțuită nu mai poate fi retrasă. La Goethe există un Meister care salvează — la Dürrenmatt „maestra" (von Zahnd) e nebună, deci nu există salvare.</div>
        </div>
    </div>
`;

// ============================================
// BAC-TRAINING (Prüfungsfragen + Musterantwort) + SCHREIBVORLAGEN
// ============================================
const trainingHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Citește întrebarea, <strong>gândește singur</strong> răspunsul — apoi compară cu Musterantwort. Schreibvorlagen-urile de jos îți dau structura gata pentru fiecare subiect.</div>
        </div>
    </div>

    <h4 style="color:#065f46; margin:14px 0 8px;">🎯 Häufige Prüfungsfragen mit Musterantworten</h4>

    <div class="theory-box">
        <p><strong>1. Worum geht es in „Die Physiker"? (Inhaltswiedergabe)</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m1')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m1">Dürrenmatts Komödie <em>Die Physiker</em> (1962) spielt im Irrenhaus „Les Cerisiers". Drei Physiker geben sich als verrückt aus; zwei sind <strong>Geheimagenten</strong>, der dritte, <strong>Möbius</strong>, verbirgt seine welterschütternde <strong>Weltformel</strong>, um die Menschheit zu schützen. Alle drei wollen <strong>im Irrenhaus bleiben</strong>. Doch die Ärztin <strong>von Zahnd</strong> — die einzig wirklich Wahnsinnige — hat alles <strong>kopiert</strong> und will die Weltherrschaft. Das Opfer der Physiker ist <strong>vergebens</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>2. Welcher Epoche und Gattung gehört das Werk an?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m2')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m2">Es gehört zur <strong>Moderne / Nachkriegsliteratur</strong> (modernes Drama) und ist eine <strong>Komödie</strong> — „eine Komödie in zwei Akten" —, genauer eine <strong>Tragikomödie / groteske Komödie</strong> von <strong>Friedrich Dürrenmatt</strong> (1962).</div>
    </div>

    <div class="theory-box">
        <p><strong>3. Warum wählt Dürrenmatt die Form der Komödie?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m3')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m3">Weil die moderne Welt für Dürrenmatt <strong>paradox und grotesk</strong> geworden ist. Nur die <strong>Komödie</strong> (mit Groteske, Zufall und der schlimmstmöglichen Wendung) kann diese unüberschaubare Welt fassen — die reine Tragödie setzt eine geordnete Welt voraus, die es nicht mehr gibt. So entsteht eine <strong>Tragikomödie</strong>: lächerlich und tödlich ernst zugleich.</div>
    </div>

    <div class="theory-box">
        <p><strong>4. Charakterisieren Sie Möbius.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m4')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m4">Möbius ist ein <strong>genialer Physiker</strong>, der die Weltformel entdeckt hat. Er ist <strong>verantwortungsbewusst und selbstlos</strong>: Um die Menschheit zu schützen, <strong>spielt er Wahnsinn</strong> (König Salomo) und opfert Familie und Freiheit — er tötet sogar Schwester Monika, um sein Geheimnis zu wahren. Trotz seiner guten Absicht <strong>scheitert</strong> er tragisch: Durch den Zufall (von Zahnd) ist sein Opfer vergebens.</div>
    </div>

    <div class="theory-box">
        <p><strong>5. Wer ist Fräulein Doktor von Zahnd?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m5')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m5">Die <strong>bucklige Psychiaterin</strong> und Besitzerin des Sanatoriums — und die <strong>einzige, die wirklich wahnsinnig ist</strong>. Ihr erscheint (nach ihrer Überzeugung) König Salomo. Sie hat Möbius' Manuskripte heimlich <strong>kopiert</strong> und will mit der Weltformel über ihren Konzern die <strong>Weltherrschaft</strong> erringen. Sie verkörpert die <strong>schlimmstmögliche Wendung</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>6. Wer sind „Newton" und „Einstein"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m6')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m6">Sie geben sich als die verrückten Physiker Newton und Einstein aus, sind aber <strong>Geheimagenten rivalisierender Großmächte</strong> (Ost &amp; West). Sie verkörpern den <strong>Kalten Krieg</strong> und die <strong>Instrumentalisierung der Wissenschaft</strong>: Beide wollen Möbius und seine Formel für die eigene Macht gewinnen.</div>
    </div>

    <div class="theory-box">
        <p><strong>7. Was bedeutet „Was einmal gedacht wurde …"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m7')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m7">Der Satz „<em>Was einmal gedacht wurde, kann nicht mehr zurückgenommen werden</em>" ist die Kernaussage: Eine <strong>Entdeckung ist unwiderruflich</strong>. Möbius verbrennt zwar seine Manuskripte, doch das nützt nichts — von Zahnd hat alles kopiert. Das Wissen ist <strong>in der Welt</strong> und lässt sich nicht mehr löschen.</div>
    </div>

    <div class="theory-box">
        <p><strong>8. Was ist die „schlimmstmögliche Wendung"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m8')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m8">Ein Begriff aus Dürrenmatts „21 Punkten": „<em>Eine Geschichte ist dann zu Ende gedacht, wenn sie ihre schlimmstmögliche Wendung genommen hat</em>". Sie tritt durch <strong>Zufall</strong> ein. Im Stück ist es die Enthüllung, dass ausgerechnet die <strong>Ärztin wahnsinnig und machtgierig</strong> ist — so wird das Opfer der Physiker sinnlos, das Schlimmstmögliche geschieht.</div>
    </div>

    <div class="theory-box">
        <p><strong>9. Welche Rolle spielt das Thema „Wahnsinn ↔ Vernunft"?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m9')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m9">Das Stück <strong>verkehrt</strong> Wahnsinn und Vernunft: Die <strong>Vernünftigen</strong> (die drei Physiker) sitzen im Irrenhaus und opfern sich verantwortungsvoll, während die <strong>einzig Wahnsinnige</strong> (von Zahnd) frei ist und siegt. So stellt Dürrenmatt die Frage, wer in dieser Welt eigentlich „verrückt" ist.</div>
    </div>

    <div class="theory-box">
        <p><strong>10. Was ist die Botschaft des Stücks?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m10')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m10">Die <strong>Verantwortung der Wissenschaft</strong> im Atomzeitalter: Wissen kann die Menschheit vernichten, und der <strong>Einzelne</strong> kann die Gefahr nicht allein bannen — „<em>Was alle angeht, können nur alle lösen</em>". Der Zufall (von Zahnd) zeigt, wie <strong>machtlos</strong> das gute Handeln des Einzelnen gegen die groteske Wirklichkeit ist.</div>
    </div>

    <h4 style="color:#065f46; margin:22px 0 8px;">✍️ Schreibvorlagen — Struktur für jeden Prüfungsteil</h4>

    <div class="vorlage">
        <h5>A) Charakterisierung (Prüfungsteil II) — Einleitung / Hauptteil / Schluss</h5>
        <div class="teil">Einleitung:</div>
        <p class="redemittel">„In der Komödie <em>Die Physiker</em> (1962) von Friedrich Dürrenmatt spielt die Figur des/der … eine zentrale Rolle."</p>
        <div class="teil">Hauptteil (Redemittel):</div>
        <ul>
            <li class="redemittel">„Sozial / als Typus wird … dargestellt als …"</li>
            <li class="redemittel">„Charakterlich zeichnet sich … durch … aus (z. B. …)."</li>
            <li class="redemittel">„Im Laufe der Handlung zeigt sich … (z. B. von der Verantwortung zum tragischen Scheitern)."</li>
            <li class="redemittel">„In den Beziehungen zu … zeigt sich …"</li>
        </ul>
        <div class="teil">Schluss:</div>
        <p class="redemittel">„Zusammenfassend verkörpert die Figur … (z. B. das Gewissen der Wissenschaft, das am Zufall scheitert)."</p>
    </div>

    <div class="vorlage">
        <h5>B) Interpretation (Szene / Thema)</h5>
        <p class="redemittel">Einleitung: Werk/Autor/Jahr/Epoche + Gattung (Komödie) + Deutungshypothese.</p>
        <p class="redemittel">Hauptteil: „Auffällig ist das Motiv der Weltformel / des Irrenhauses …" · „Das Thema der Verantwortung zeigt sich in …" · „Vor dem Hintergrund der schlimmstmöglichen Wendung bedeutet dies …" · immer mit Beleg.</p>
        <p class="redemittel">Schluss: „Die Analyse bestätigt, dass …"</p>
    </div>

    <div class="vorlage">
        <h5>C) Meinung / Stellungnahme (z. B. „Trägt der Wissenschaftler Verantwortung?")</h5>
        <p class="redemittel">„Einerseits … andererseits …" · „Dafür spricht …, dagegen lässt sich einwenden …" · <strong>immer mit Beispiel/Beleg!</strong></p>
        <p class="redemittel">Schluss: „Abschließend vertrete ich die Auffassung, dass …, weil …"</p>
    </div>

    <div class="strategie">La Prüfungsteil II structura aduce 5 puncte: Einleitung (Werk/Autor/Jahr/Gattung) · Hauptteil cu Belege (scene) · Schluss cu deutung. Leagă de teme (Verantwortung / Zufall / Wahnsinn ↔ Vernunft)!</div>
`;

// ============================================
// Toggle Musterantwort
// ============================================
function toggleMuster(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
}

// ============================================
// INJECTARE
// ============================================
(function () {
    function injectTheory() {
        const t = document.getElementById('theory-container');
        if (t) t.innerHTML = theoryHTML;
        const tr = document.getElementById('training-container');
        if (tr) tr.innerHTML = trainingHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();

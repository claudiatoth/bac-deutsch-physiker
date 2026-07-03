// PDF BUILDER — BAC kompakt: Der Schimmelreiter
// Injectează conținutul de referință (theoryHTML + trainingHTML din theory.js)
// în pagina de print. pdf.html stilizează totul print-friendly și deschide totul.
(function () {
    if (typeof document === 'undefined') return;
    function build() {
        const target = document.getElementById('pdf-content');
        if (!target) return;
        let html = '';
        if (typeof theoryHTML === 'string') html += theoryHTML;
        if (typeof trainingHTML === 'string') html += trainingHTML;
        if (typeof modellHTML === 'string') html += '<div class="new-section"></div>' + modellHTML;
        target.innerHTML = html;
    }
    if (document.readyState !== 'loading') { build(); }
    else { document.addEventListener('DOMContentLoaded', build); }
})();

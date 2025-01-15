document.getElementById("calcola").addEventListener("click", function () {
    // Recupero i dati dal form
    const nome = document.getElementById("nome").value;
    const km = parseFloat(document.getElementById("km").value);
    const eta = parseInt(document.getElementById("eta").value);

    // Validazione dei dati
    if (!nome || isNaN(km) || isNaN(eta)) {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    // Calcolo prezzo base
    const prezzoKm = 0.21;
    let prezzoBiglietto = km * prezzoKm;

    // Applica sconti 
    let offerta = "Biglietto Standard";
    if (eta < 18) {
        prezzoBiglietto *= 0.8; // Sconto 20%
        offerta = "Sconto Minorenne";
    } else if (eta > 65) {
        prezzoBiglietto *= 0.6; // Sconto 40%
        offerta = "Sconto Over 65";
    }

    // Arrotondamento prezzo
    prezzoBiglietto = prezzoBiglietto.toFixed(2);

    // Generazione casuale di carrozza e codice biglietto
    const carrozza = Math.floor(Math.random() * 10) + 1; // Numero casuale tra 1 e 10
    const codiceCP = Math.floor(Math.random() * 90000) + 10000; // Numero casuale di 5 cifre

    //dettagli del biglietto
    document.getElementById("nomePasseggero").textContent = nome;
    document.getElementById("offerta").textContent = offerta;
    document.getElementById("carrozza").textContent = carrozza;
    document.getElementById("codiceCP").textContent = codiceCP;
    document.getElementById("costoBiglietto").textContent = `${prezzoBiglietto}€`;

    // sezione del biglietto
    document.getElementById("dettaglioBiglietto").style.display = "block";
});

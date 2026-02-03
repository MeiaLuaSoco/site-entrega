let valorFinal = 0;

function irPedido() {
    document.getElementById("pedido").scrollIntoView({ behavior: "smooth" });
}

function calcular() {
    const km = parseFloat(document.getElementById("km").value);
    const valorKm = parseFloat(document.getElementById("valorKm").value);
    const taxaMinima = parseFloat(document.getElementById("taxaMinima").value);

    let total = km * valorKm;
    if (total < taxaMinima) total = taxaMinima;

    valorFinal = total;
    document.getElementById("total").innerText = total.toFixed(2);
}

function enviar() {
    const nome = document.getElementById("nome").value;
    const coleta = document.getElementById("coleta").value;
    const entrega = document.getElementById("entrega").value;

    const msg =
`Olá! Meu nome é ${nome}
📦 Coleta: ${coleta}
🏠 Entrega: ${entrega}
💰 Valor: R$ ${valorFinal.toFixed(2)}`;

    window.open(
        "https://wa.me/5511987654321?text=" + encodeURIComponent(msg),
        "_blank"
    );
}

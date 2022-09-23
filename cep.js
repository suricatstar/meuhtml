function consultarCep() {
    const getCep = document.getElementById('cep').value
    fetch(`https://viacep.com.br/ws/${getCep}/json/`)
    .then((response) => response.json())
    .then((data) => {
        const convert = JSON.stringify(data)
        const limpar = convert.replace(/[\"{}]+/g, ' ')
        const arrayConvert = limpar.split(",")
        const resposta = document.getElementById("resposta")
        arrayConvert.forEach((item) => {
            let listar = document.createElement("p");
            listar.innerText = item;
            resposta.appendChild(listar);
        });
    })
}
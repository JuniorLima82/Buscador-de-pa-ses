async function carregarDetalhesDoPais() {
    const urlParams = new URLSearchParams(window.location.search)
    const countryCode = urlParams.get('id')

    if (!countryCode) {
        alert("Código do país não fornecido")
        return
    }

    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const [pais] = await response.json()

    const detalhesDiv = document.getElementById("detalhesPais")

    detalhesDiv.innerHTML = `
        <h2 id="nome-país">${pais.name.official}</h2>
        <img id="bandeira" src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}">
        <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'Não disponível'}</p>
        <p><strong>Língua(s):</strong> ${Object.values(pais.languages).join(', ')}</p>
        <p><strong>Moeda:</strong> ${Object.values(pais.currencies)[0].name} (${Object.values(pais.currencies)[0].symbol})</p>
        <p><strong>Continente:</strong> ${pais.continents[0]}</p>
        <p><strong>População:</strong> ${pais.population.toLocaleString('pt-BR')} habitantes</p>
        <p><strong>Área geográfica:</strong> ${pais.area.toLocaleString('pt-BR')} km²</p>
        <p><strong>Mapa:</strong> <a href="${pais.maps.googleMaps}" target="_blank">Ver no Google Maps</a></p>
    `
}

function voltar() {
    window.history.back()
}

window.onload = carregarDetalhesDoPais

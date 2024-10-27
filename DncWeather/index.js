document.getElementById('form-page').addEventListener('submit', function (event) {
    getAddressByCep();
    getPrevisao();
});
async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
        const data = await response.json();
        console.log(data);
        document.getElementById('logradouro').innerHTML = data.logradouro;
        document.getElementById('bairro').innerHTML = data.bairro;
        document.getElementById('uf').innerHTML = data.uf;
    } catch (error) {
        document.getElementById('logradouro').innerHTML = "";
        document.getElementById('bairro').innerHTML = "";
        document.getElementById('uf').innerHTML = "";
        alert('CEP inserido não localizado.');
    }
}
async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + long + '&hourly=temperature_2m');
        const data = await response.json();
        console.log(data);
        document.getElementById('previsao').innerHTML = 'Previsão de tempo de acordo com a região: ' + data.hourly.temperature_2m[12] + '° C'
    } catch (error) {
        alert("Latitude e Longitudes inseridos invalidos.");
    }
}
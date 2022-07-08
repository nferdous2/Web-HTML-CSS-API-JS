const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries =counties=>{
const call=document.getElementById('countries');
counties.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country')
    div.innerHTML=`
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
<button  onclick="loadCountryByName('${country.name}')">Details</button>
    `
    call.appendChild(div)
});           
}
const loadCountryByName =name=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country =>{
    
}

const zipCodeInput = document.getElementById("zipCode");
const cityList = document.getElementById("cityList");
async function searchCitiesByZipCode(zipCode) {
    try {
        const response = await axios.get(`https://public.opendatasoft.com/api/records/1.0/search/?dataset=laposte_hexasmal&q=${zipCode}&facet=code_commune_insee&facet=nom_de_la_commune&facet=code_postal&facet=ligne_5`);
        if (response.data.records.length === 0) {
            cityList.innerHTML = "Code postal non reconnu";
            return;
        }
        const cities = response.data.records.map((record)=>record.fields.nom_de_la_commune);
        let cityListHTML = "<ul>";
        cities.forEach((city)=>{
            cityListHTML += `<li>${city}</li>`;
        });
        cityListHTML += "</ul>";
        cityList.innerHTML = cityListHTML;
    } catch (error) {
        console.error(error);
    }
}
const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    searchCitiesByZipCode(zipCodeInput.value);
}); // const zipCodeInput = document.getElementById('zipCode') as HTMLInputElement;
 // const cityList = document.getElementById('cityList') as HTMLInputElement;
 // async function searchCitiesByZipCode(zipCode: string) {
 //     try {
 //         const response = await axios.get(
 //             `https://public.opendatasoft.com/api/records/1.0/search/?dataset=laposte_hexasmal&q=${zipCode}&facet=code_commune_insee&facet=nom_de_la_commune&facet=code_postal&facet=ligne_5`
 //         );
 //         if (response.data.records.length === 0) {
 //             cityList.innerHTML = 'Code postal non reconnu';
 //             return;
 //         }
 //         const cities = response.data.records.map(
 //             (record: any) => record.fields.nom_de_la_commune
 //         );
 //         cityList.innerHTML = cities.join(', ');
 //     } catch (error) {
 //         console.error(error);
 //     }
 // }
 // const form = document.querySelector('form') as HTMLFormElement;
 // form.addEventListener('submit', (event) => {
 //     event.preventDefault();
 //     searchCitiesByZipCode(zipCodeInput.value);
 // });

//# sourceMappingURL=index.59697c84.js.map

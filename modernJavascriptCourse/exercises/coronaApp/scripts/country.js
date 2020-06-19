

async function getCountryData() {
   const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "b1a95949a9mshd0014183ac24a3cp1dd49djsn82e60d1043b2"
    }
})

    const countryData = response.json();

	console.log(countryData);
}
getCountryData();

//from rapidAPI
let state;
//const state = "california"
const apiURL = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_latest_usa_statistic_by_state.php?state="
let countyName;
let xlabels = [];
let counties;
let ylabels = [];
let info = [];

function getInputValue(){
    const state = document.getElementById("stateInput").value;
}

async function getStateData() {
    const response = await fetch(`${apiURL}+${state}`,
    {
     "method": "GET",
     "headers": {
         "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
         "x-rapidapi-key": "b1a95949a9mshd0014183ac24a3cp1dd49djsn82e60d1043b2"
        }
 })
 
     const stateData = await response.json();
     const counties = stateData.usa_cases_by_state.map( x => {
        const countyName = cleanText(x.state_name, state);

xlabels.push(countyName);
//debugger
//console.log(xlabels)





        //console.log(countyName);
     });
     console.log(stateData.usa_cases_by_state[0].cases_number);
     
     for(let i = 0; i < stateData.usa_cases_by_state.length ; i++){
     info.push(stateData.usa_cases_by_state[i].cases_number);
     }
     console.log(info);



    document.getElementById('State').textContent = stateData

    }

function cleanText(text="", removeText){
        let a = text.toLowerCase().trim()
        const iOfA = a.indexOf(removeText)
        const b = a.substring(0, iOfA);
        return b;
 };

 async function chartIt() {
     await getStateData();
    const ctx = document.getElementById('myChart');
    
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels,
            datasets: [{
                label: '# of cases',
                data: info,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',

                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    };



    getInputValue();
    chartIt();
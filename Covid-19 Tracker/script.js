$(document).ready(function(){
    var url = "https://api.covid19api.com/summary"

    $.getJSON(url,function(data){
        console.log(data)

        var total_active,total_recovered,total_deaths,total_confirmed

        total_active = data.Global.NewConfirmed
        total_confirmed = data.Global.TotalConfirmed
        total_recovered = data.Global.NewRecovered  
        total_deaths = data.Global.TotalDeaths   
    
        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var country = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.Countries,function(id,obj){
            country.push(obj.Country)
            confirmed.push(obj.NewConfirmed)
            recovered.push(obj.NewRecovered)
            deaths.push(obj.NewDeaths)
        })
        
        country.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        
        console.log(country)
       
        var myChart = document.getElementById("myChart").getContext('2d')
       
        var chart = new Chart(myChart,{
            type:'line',
            data:{
                labels: country,
                 datasets: [
                {
                    label:"Confirmed Cases",
                    data: confirmed,
                    backgroundColor: "#ff9800",
                    minibarLength: 100
                },
                {
                    label:"Recovered Cases",
                    data: recovered,
                    backgroundColor: "#2ecc71",
                    minibarLength: 100
                },
                {
                    label:"Death Cases",
                    data: deaths,
                    backgroundColor: "#e74c3c",
                    minibarLength: 100   
                },
            ],
        },
        options:{},
    })
    })
})
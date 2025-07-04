function search(){
    fetch("travel_recommendation_api.json")
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            var searchValue = document.getElementById("searchInput").value.toLowerCase();
            var cities = data.countries[0].cities.concat(data.countries[1].cities);
            cities = cities.concat(data.countries[2].cities);
            console.log(cities);
            if(searchValue == "country" || searchValue == "countries" || searchValue == "city" || searchValue == "cities"){
                parse(cities);
            }
            if(searchValue == "beach" || searchValue == "beaches"){
                parse(data.beaches);
            }
            if(searchValue == "temple" || searchValue == "temples"){
                parse(data.temples);
            }
            const container = document.getElementById('itemsContainer');
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function parse(params){
    const container = document.getElementById('itemsContainer');
    params.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
  
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <img src="${item.imageUrl}" alt="${item.name}">
          <p>${item.description}</p>
          <p>Current time: ${calculateTimezone(item.name)}</p>
        `;
  
        container.appendChild(itemDiv);
      });
}

function resetSearch(){
    document.getElementById('itemsContainer').innerHTML = "";
}

function calculateTimezone(params){
    if (params.toString().includes("Australia")){
        const options = { timeZone: 'Australia/Sydney', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const australiaTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in Australia:", australiaTime);
        return australiaTime; 
    }
    if (params.toString().includes("Japan")){
        const options = { timeZone: 'Japan', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const japanTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in Japan:", japanTime);
        return japanTime; 
    }
    if (params.toString().includes("Brazil")){
        const options = { timeZone: 'America/Sao_Paulo', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const brazilTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in Brazil:", brazilTime);
        return brazilTime; 
    }
    if (params.toString().includes("Cambodia")){
        const options = { timeZone: 'Asia/Phnom_Penh', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const cambodiaTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in Cambodia:", cambodiaTime);
        return cambodiaTime; 
    }
    if (params.toString().includes("India")){
        const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const indiaTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in India:", indiaTime);
        return indiaTime; 
    }
    if (params.toString().includes("Polynesia")){
        const options = { timeZone: 'Pacific/Tahiti', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const polynesiaTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in French Polynesia:", polynesiaTime);
        return polynesiaTime; 
    }
}
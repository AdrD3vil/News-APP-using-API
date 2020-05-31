//Health starts 
function HealthTab() {  
    window
    .fetch(healthURL)
    .then((HealthData) => {
        HealthData.json()
        .then((Health) => {
            let HealthInfo = Health.articles;
            let output =[];
            for (let Hlth of HealthInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-dark mt-2
              text-uppercase">Health</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${Hlth.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${Hlth.title}</h6>
                <a href="${Hlth.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${Hlth.content}</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                `;
                document.getElementById("HeadlinesSection").innerHTML=output;
            }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
    
    }
    //Health Ends 
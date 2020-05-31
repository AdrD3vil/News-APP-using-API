//Technology starts 
function TechnologyTab() {  
    window
    .fetch(technologyUrl)
    .then((TechData) => {
        TechData.json()
        .then((Technology) => {
            let TechInfo = Technology.articles;
            let output =[];
            for (let Tech of TechInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-info mt-2
              text-uppercase">Technology</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${Tech.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${Tech.title}</h6>
                <a href="${Tech.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${Tech.content}</p>
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
    //Technology Ends 
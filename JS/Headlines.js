//jshint esversion:6

window
.fetch("https://api.covid19api.com/summary")
.then((data) => {
    data
    .json()
    .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById("covidBlock").innerHTML = 
     ` <section>
            <div> 
                <h4 class="badge badge-danger">TotalConfirmed</h4>
                <span>${Global.TotalConfirmed}</span>
            </div>
            <div> 
                <h4 class="badge badge-danger">TotalDeaths</h4>
                <span>${Global.TotalDeaths}</span>
            </div> 
           <div> 
              <h4 class="badge badge-danger">NewConfirmed</h4>
              <span>${Global.NewConfirmed}</span>
            </div> 
            <div> 
              <h4 class="badge badge-danger">NewDeaths</h4>
              <span>${Global.NewDeaths}</span>
            </div> 
            <div> 
              <h4 class="badge badge-danger">NewRecovered:</h4>
              <span>${Global.NewRecovered}</span>
            </div> 
            <div> 
                <h4 class="badge badge-danger">TotalRecovered</h4>
                <span>${Global.TotalRecovered}</span>
            </div> 
        </section> 
        `;
    }).catch((err) => console.log(err));
})
.catch((err) => console.log(err));

//Headline starts 
function HeadlinesTab() {  
    document.getElementById("articlesContent").style.display = "none";
    window
    .fetch(headlinesUrl)
    .then((headlinesData) => {
        headlinesData.json()
        .then((head) => {
            let headInfo = head.articles;
            let output =[];
            for (let headline of headInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-primary mt-2
              text-uppercase"> Headlines</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${headline.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${headline.title}</h6>
                <a href="${headline.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${headline.content}</p>
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
    //Headline End 
 
function SportsTab() {  
    document.getElementById("articlesContent").style.display = "none";
    document.getElementById("coronaNav").style.display = "none";
    window
    .fetch(SportsUrl)
    .then((SportsData) => {
        SportsData.json()
        .then((sport) => {
            let SportsInfo = sport.articles;
            let output =[];
            for (let Sprt of SportsInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-dark mt-2
              text-uppercase">Sports</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${Sprt.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${Sprt.title}</h6>
                <a href="${Sprt.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${Sprt.content}</p>
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
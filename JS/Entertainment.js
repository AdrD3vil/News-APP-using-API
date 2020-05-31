function EntertainmentTab() {  
    document.getElementById("articlesContent").style.display = "none";
    document.getElementById("coronaNav").style.display = "none";
    window
    .fetch(entertainmentUrl)
    .then((enterData) => {
        enterData.json()
        .then((enter) => {
            let enterInfo = enter.articles;
            let output =[];
            for (let entertainment of enterInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-dark mt-2
              text-uppercase">Entertainment</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${entertainment.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${entertainment.title}</h6>
                <a href="${entertainment.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${entertainment.content}</p>
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
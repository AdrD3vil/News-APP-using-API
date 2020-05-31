  //Science starts
  function ScienceTab() {  
    window
    .fetch(scienceUrl)
    .then((ScienceData) => {
        ScienceData.json()
        .then((Science) => {
            let ScienceInfo = Science.articles;
            let output =[];
            for (let Scienc of ScienceInfo) {
                output += `
                <div class="col-md-12">
                <h6 class="p-2 border-bottom
              text-white font-weight-bold bg-info mt-2
              text-uppercase">Science</h6>
               <div>
               <div>
                <div class="card p-3">
                <img src="${Scienc.urlToImage}" class="img-card-top"/>
                <div class="card-body my-2">
                <h6 class="font-weight-bold text-primary">
                ${Scienc.title}</h6>
                <a href="${Scienc.url}" target="_blank" class="btn btn-dark btn-sm">
                Details</a>
                <p>${Scienc.content}</p>
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
    //Science Ends 
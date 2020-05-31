//jshint esversion:6

/* 1e02bcd53b16416eba5e8d12b9800489 */
let SportsUrl = 'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let entertainmentUrl = 'http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let healthURL = 'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let businessUrl = 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let scienceUrl ='http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let technologyUrl = 'http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1e02bcd53b16416eba5e8d12b9800489';
let headlinesUrl ='https://newsapi.org/v2/top-headlines?country=in&apiKey=1e02bcd53b16416eba5e8d12b9800489';


/* Sports Starts*/



window
.fetch(SportsUrl)
.then((SportsData) => {
    SportsData.json()
    .then((sports) => {
        let SportsInfo = sports.articles;
        let firstSportsBlock =sports.articles;
        let sportsnewBlockOne = firstSportsBlock[0];
        document.getElementById("spotsFistTemplate").innerHTML=
        ` <ul>
           <img src="${sportsnewBlockOne.urlToImage}"/>
           <a href= "${sportsnewBlockOne.url}" target="_blank">
           <li class "text-dark">${sportsnewBlockOne.title}</li>
           </a>
           </ul>
        `;

        let output =[];
        for (let sport of SportsInfo) {
            output += `
            <ul class="list-group">
            <a href="${sport.url}" target="_blank">
            <li class="text-dark">
            ${sport.title}</li></a>
            </ul>
            `; 
            document.getElementById("sportsAllTemplate").innerHTML=output;
        }
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));



/*Spots End */

//technology starts

window
        .fetch(technologyUrl)
        .then((techData) => {
            techData.json()
            .then((tech) => {
                console.log(tech.articles);
                let techInfo = tech.articles;
                let output =[];
                for (let techno of techInfo) {
                    let date = new Date (techno.publishedAt).toDateString();
                    output += `
                    <div class="row">
                    <div class=" col-md-5"> 
                       <img src="${techno.urlToImage}" class="enterImg"/>
                    </div>   
                    <div class="col-md-7">
                    <ul class=""list-group">
                      <a href="${techno.url}" targert="_blank">
                         <li class="text-dark">
                         ${techno.title}</li></a>
                         <span class="text-muted text-right">publishedAt : ${date}</span>
                         </ul>
                         </div>
                         </div>
                    `;
                    document.getElementById("AllHeadlinesTemplate").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));


//technology Ends


     
 /*

    //headlines starts 
    
        window
        .fetch(headlinesUrl)
        .then((headData) => {
            headData.json()
            .then((head) => {
                console.log(head.articles);
                let headInfo = head.articles;
                let output =[];
                for (let headlines of headInfo) {
                    let date = new Date (headlines.publishedAt).toDateString();
                    output += `
                    <div class="row">
                    <div class=" col-md-5"> 
                       <img src="${headlines.urlToImage}" class="enterImg"/>
                    </div>   
                    <div class="col-md-7">
                    <ul class=""list-group">
                      <a href="${headlines.url}" targert="_blank">
                         <li class="text-dark">
                         ${headlines.title}</li></a>
                         <span class="text-muted text-right">publishedAt : ${date}</span>
                         </ul>
                         </div>
                         </div>
                    `;
                    document.getElementById("AllHeadlinesTemplate").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
        
    
        //Headlines end
        
        */
 
        /*Entertainment Starts */
        window
        .fetch(entertainmentUrl)
        .then((enterData) => {
            enterData.json()
            .then((enter) => {
                console.log(enter.articles);
                let enterInfo = enter.articles;
                let output =[];
                for (let entertainment of enterInfo) {
                    let date = new Date (entertainment.publishedAt).toDateString();
                    output += `
                    <div class="row">
                    <div class=" col-md-5"> 
                       <img src="${entertainment.urlToImage}" class="enterImg"/>
                    </div>   
                    <div class="col-md-7">
                    <ul class=""list-group">
                      <a href="${entertainment.url}" targert="_blank">
                         <li class="text-dark">
                         ${entertainment.title}</li></a>
                         <span class="text-muted text-right">publishedAt : ${date}</span>
                         </ul>
                         </div>
                         </div>
                    `;
                    document.getElementById("entertainmentAllTemplate").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));

        /*Entertainment Ends */
    












        
        /*
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
                    <div class="card p-3">
                    <img src="${Hlth.urlToImage}" class="img-card-top"/>
                    <div class="card-body my-2">
                    <h6 class="font-weight-bold text-primary">
                    ${Hlth.title}</h6>
                    <a href="${Hlth.url}" target="_blank" class="btn btn-dark btn-sm">
                    Details</a>
                    </div>
                    
                    </div>
                    `;
                    document.getElementById("sportsSection").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
        
        }
        //Health Ends 



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
                    <div class="card p-3">
                    <img src="${Scienc.urlToImage}" class="img-card-top"/>
                    <div class="card-body my-2">
                    <h6 class="font-weight-bold text-primary">
                    ${Scienc.title}</h6>
                    <a href="${Scienc.url}" target="_blank" class="btn btn-dark btn-sm">
                    Details</a>
                    </div>
                    
                    </div>
                    `;
                    document.getElementById("sportsSection").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
        
        }
        //Science Ends 
        
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
                    <div class="card p-3">
                    <img src="${Tech.urlToImage}" class="img-card-top"/>
                    <div class="card-body my-2">
                    <h6 class="font-weight-bold text-primary">
                    ${Tech.title}</h6>
                    <a href="${Tech.url}" target="_blank" class="btn btn-dark btn-sm">
                    Details</a>
                    </div>
                    
                    </div>
                    `;
                    document.getElementById("sportsSection").innerHTML=output;
                }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
        
        }
        //Technology Ends 
        */
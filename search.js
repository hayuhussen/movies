fetch("https://imdb-api.com/API/MostPopularMovies/k_5wto9gls")

 .then((response) => response.json()) 
 .then((objectData) => { 
// ///  console.log(objectData); 

  for (let i = 0; i < 25; i++) { 
    let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6"> 
       <a href=""> 
        <div class="card cards border-0"> 
           <img 
            src="${objectData.items[i].image}" 
            class="img-fluid rounded-3" 
             alt="" 
             width="97%" 
           /> 
         </div> 
     </a> 
       <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small"> 
        ${objectData.items[i].title} 
       </p> 
       <p class="text-muted"> 
         ${objectData.items[i].year}  
        <span class="badge bg-secondary float-end">${objectData.items[i].imDbRating}</span> 
      </p> 
     </div>`; 

     document.getElementById('movie').innerHTML += card; 
 }; 
 }) 

 .catch((err) => console.error(err));




  
function searchMovie() {
  alert("hh")
  
  var title = document.querySelector("#searchId");
  alert(title.value);
  const urlSearchMovies = `https://imdb-api.com/en/API/SearchAll/k_95ye63sf/${title.value}`;
  fetch(urlSearchMovies)
    .then((response) => response.json())
    .then((searchMovies) => {
      for (let i = 0; i < searchMovies.results.length; i++) {
        console.log(searchMovies.results[i])
        let card = `<div class="col-lg-2 col-md-3 col-sm-4 col-6">
        <button class="cards border-0 rounded shadow-lg"
        style="
        width: 170px;
        height: 260px;
        background-image: url(${searchMovies.results[i].image});
        background-size: cover;
        background-position: center;"
        
       value="${searchMovies.results[i].id}" onclick="getID(this.value)">
        </button>
        <p class="fw-bold m-0 mt-1 ms-1" style="font-size: small">
          ${searchMovies.results[i].title}
        </p>
        <p class="text-muted">
         
          <span class="badge bg-secondary float-end"></span>
        </p>
      </div>`; 
       document.getElementById('searchBodyNew1').innerHTML+=card;
      }
    })
  .catch(err=>console.error(err))
}




















const idname = document.getElementById("rowforclos")
const links = document.querySelectorAll(".nav-link")



for(let i = 0 ; i<links.length ; i++){
    links[i].addEventListener("click",function(e){
        getdate(e.target.innerHTML)
    })
}







let data = []



function getdate(meal){

    let apicaller = new XMLHttpRequest()
    apicaller.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    apicaller.send()
    
    apicaller.addEventListener("readystatechange",function(){
    
        if( apicaller.readyState == 4 ){
            console.log(JSON.parse(apicaller.response).recipes);
            data = JSON.parse(apicaller.response).recipes;
            displaydate()
        }
    
    })

}








function displaydate(){
    let cols = ``

    for(let i = 0 ; i < data.length ; i++){

        cols+= `
        
        
    <div class="col-md-4 ">
        <div class="h-100 text-center">
            <img src="${data[i].image_url}" class="w-100" height="200px" card-img-top" alt="photo">
            <p>${data[i].title}</p>
            <a href="${data[i].source_url}" class="btn btn-outline-info">source</a>
        </div>
     </div>
        
        
           `

           

    }

    console.log("hello");

    idname.innerHTML = cols
}






const list = document.querySelector('#poster-images');

const addMoviesToDom = movies.map(function(movie) {
     newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
     return newArray;
}).join('');
             
list.innerHTML = addMoviesToDom; 

function clearRadioButtons() {
    const radioButtons = document.querySelectorAll("input[type='radio']");
    radioButtons.forEach(function(button) {
        button.checked = false;    
    });
}    

document.querySelectorAll("input[name='movie']").forEach((input) => {
    input.addEventListener('change', handleOnChangeEvent);
});

function handleOnChangeEvent(event) {
    //clearRadioButtons()   
    switch(event.target.value)
    {
        case "search-movies" :
            {   
                const searchMovies = movies.filter(function(movie) {
                document.getElementById("search").value = "";
                clearRadioButtons();
                return movie.title.includes(event.target.value); 
                
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                
                list.innerHTML = searchMovies;
                break;
            }

        case "all-movies" :
            {   
                const allMovies = movies.map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                         
                list.innerHTML = allMovies; 
                break;
            }

        case "new-movies" :
            {   
                const newMovies = movies.filter(function(movie) {
                document.getElementById("search").value = ""; 
                return movie.year >= "2014"; 
                
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                         
                list.innerHTML = newMovies; 
                break;
            }

        case "avengers" :
            {
                const avengerMovies = movies.filter(function(movie) {
                document.getElementById("search").value = ""; 
                return movie.title.includes("Avengers"); 
                
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
            
                list.innerHTML = avengerMovies;
                break;
            }

        case "x-men" :
            {
                const xMenMovies = movies.filter(function(movie) {
                document.getElementById("search").value = ""; 
                return movie.title.includes("X-Men"); 
                
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                         
                list.innerHTML = xMenMovies; 
                break;
            }

        case "princess" :
            {
                const princessMovies = movies.filter(function(movie) {
                document.getElementById("search").value = ""; 
                return movie.title.includes("Princess"); 
               
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                        
                list.innerHTML = princessMovies; 
                break;
            } 
                
        case "batman" :
            {
                const batmanMovies = movies.filter(function(movie) {
                document.getElementById("search").value = ""; 
                return movie.title.includes("Batman"); 
                
                }).map(function(movie) {
                newArray = '<li> <a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID +'/"> <img alt="'+ movie.title +'" src=' + movie.poster + '/></a></li>';
                return newArray;
                }).join('');
                         
                list.innerHTML = batmanMovies;
                break;
            }

        default:
            clearRadioButtons();
            alert('Check the spelling of the search word and use lower-case');
    }
}





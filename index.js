let pageWrapper = $("#page_content")
var moviesToWatchWrapper = $("<div class = 'movies_wrapper'>") 
var moviesWatchedWrapper = $("<div class = 'movies_watched_wrapper'>")
let movies = [
    {movieID:"meh", watched: true, title: "rugrats the movie", imgURL:"www.google.com", description: "Movie about rats in a rug", href:"google.com", linkName: "rugrats imdb"},
    {movieID:"huh", watched: true, title: "rugrats the show", imgURL:"www.google.com", description: "Movie about rats in a rug", href:"google.com", linkName: "rugrats imdb"},
    {movieID:"lmao", watched: true, title: "rugrats the book", imgURL:"www.google.com", description: "Movie about rats in a rug", href:"google.com", linkName: "rugrats imdb"}
]

movies.forEach(function(movie){

    var newMovie = movieGenerator(movie)
    moviesToWatchWrapper.append(newMovie)

})

pageWrapper.append(moviesToWatchWrapper)
pageWrapper.append(moviesWatchedWrapper)
function movieGenerator(movie){


    var checkbox = $(`<input is_watched="false" movie_id=${movie.movieID} type='checkbox'>`)

    checkbox.click(function(){
        
        var theMovieElement = $( `#${this.getAttribute("movie_id")}`)

        if(this.is_watched === true){
            this.is_watched = false
            moviesToWatchWrapper.append(theMovieElement) 
        }
        else{
            this.is_watched = true
            moviesWatchedWrapper.append(theMovieElement)
        }

        
    } )
           
    var movieElement = $(`<div class="movieWrapper" id="${movie.movieID}" watched="${movie.watched}">`)
    var movieTemplate = `
        
        <h5>${movie.title}</h5>
        <img href="${movie.imgURL}"/>
        <p>${movie.description}</p>
        <a href="${movie.href}>${movie.linkName}</a>
     
        `
    movieElement.html(movieTemplate)

    checkbox.appendTo(movieElement)    
    
    
    return movieElement
    
}

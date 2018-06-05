let pageWrapper = $("#page_content") 

function movieGenerator(movie){
var movieTemplate = `
<div class="movieWrapper" id="${movie.movieID}" >
<h5>${movie.title}</h5>
<img href="${movie.imgURL}"/>
<p>${movie.description}</p>
<a href="${movie.href}>${movie.linkName}</a>
</div>
`

}

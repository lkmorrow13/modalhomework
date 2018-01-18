var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

setTimeout(function() {
    modal.style.display = "block";
}, 3000);

document.getElementById('submit').addEventListener('click', function(e) {
	e.preventDefault();
	modal.style.display = "none";
});
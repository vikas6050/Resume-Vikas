window.addEventListener('DOMContentLoaded', function () {
    // Fetch the content of navbar.html and insert it into the placeholder div.
    fetch('../Html/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar content:', error);
        });
});

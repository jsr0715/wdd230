document.addEventListener('DOMContentLoaded', function() {
 
    let fYear = new Date().getFullYear() 
    document.querySelector('#current-year').textContent = fYear;
 }, false);
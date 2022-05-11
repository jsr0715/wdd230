
document.addEventListener('DOMContentLoaded', function() {        
    // get and format current date 
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric', 
        month: 'long',
    };
    let todaysDate = getDate.toLocaleDateString('en-GB', dayOptions);

    // update the last modified date and time
    document.querySelector('#last-updated').textContent = 'Last Modified: ' + todaysDate;   
}, false); 
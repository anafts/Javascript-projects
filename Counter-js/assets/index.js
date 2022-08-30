// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// forEach function to acess all buttons instead just one 
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
         // to get the properties and save it
        const styles = (e.currentTarget.classList);
        // contains method to dicovery if an element is present or not in an array
        if(styles.contains('decrease')) {
            count--;

        } else if (styles.contains('increase')) {
            count++;

        } else {
            count = 0;

        } if (count > 0 ) {
            value.style.color= 'green'; 

        } if ( count < 0) {
            value.style.color= 'red'; 

        } if (count === 0) {
            value.style.color= 'black'; 
        }

            value.textContent = count; 
    });
});





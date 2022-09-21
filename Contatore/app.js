let count = 0;


// seleziona il valore del bottone
const value = document.querySelector('#value');//ID SPAN
const btns = document.querySelectorAll(".btn");//Seleziona tutti i btn del div container

btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
     const styles = event.currentTarget.classList;
     if(styles.contains('decrease')){
        count--;
     }
     else if(styles.contains('increase')){
        count++;
     }
     else{
        count = 0;
     }
     if(count >0){
        value.style.color = "green";
     }
     if(count <0){
        value.style.color = 'red'
     }
     if(count === 0){
        value.style.color = "#222"
     }
     value.textContent = count;
    })
})
var body = document.body;
var abc = document.querySelector(".abc");
function handleClick(event) {

    // event.stopPropagation();

    var cliX = event.clientX - 50;
    var cliY = event.clientY - 75;
    cliX += window.scrollX;
    cliY += window.scrollY;


    abc.style.left = cliX + 'px';
    abc.style.top = cliY + 'px';

    abc.style.display = "block";
    setTimeout(function(){
        abc.style.display = "none";
    },300)

    console.log('Global click effect triggered at: ' + event.clientX + ', ' + event.clientY);
    
}

body.addEventListener('click', handleClick,true);


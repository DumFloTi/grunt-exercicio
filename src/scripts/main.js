const titulo = document.querySelector("#texto");
var clicks = 0;
var countDisplay = document.getElementById("clicks");
    titulo.addEventListener("click", function() {
        clicks++;
        if(clicks==1){
            titulo.textContent = "Olá";
        }
        else {
            titulo.textContent = "Adeus"
            setTimeout(function(){
                window.location.reload(1);
            }, 3000);
        }
});

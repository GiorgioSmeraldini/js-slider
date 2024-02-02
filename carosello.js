
let big_image = document.getElementById("big_image");
let single_image = document.querySelectorAll(".single_image");

console.log(single_image);


single_image.forEach(images =>{

        images.addEventListener('click', function(){
        

            let colore_immagine = getComputedStyle(images).getPropertyValue("background-color");
            console.log(colore_immagine);

            
            big_image.style.backgroundColor = colore_immagine;
        });

});




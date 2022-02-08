let vinos;
let ciudad;
let redSocial;

document.getElementById("botonDescubre").addEventListener("click", function(event){
    event.preventDefault()
    obtenerDatos();
    descubre();
  });


function obtenerDatos(){
    vinos = document.getElementById("vino-favorito").value;
    ciudad = document.getElementById("ciudad-preferencia").value;
    redSocial = document.getElementById("redsocial-preferencia").value;
}




const descubre = () => {

    if (vinos === "Sauvignon Blanc" && ciudad === "Buenos Aires" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Carismática!',
            'Tu vino Ideal es el Sauvignon Blanc!',
            'success'
          )

    } else if (vinos === "Sauvignon Blanc" && ciudad === "París" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Amable!',
            'Tu vino Ideal es el Chardonnay!',
            'success'
          )

    } else if (vinos === "Sauvignon Blanc" && ciudad === "Berlín" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Extrovertida!',
            'Tu vino Ideal es el Cabernet Sauvignon!',
            'success'
          )

    } else if (vinos === "Sauvignon Blanc" && ciudad === "Nueva York" && redSocial === "Twitter") {
        Swal.fire(
            'Eres una persona Cultural/Bohemia!',
            'Tu vino Ideal es el Cabernet Merlot!',
            'success'
          )

    } else if (vinos === "Chardonnay" && ciudad === "Buenos Aires" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Amable!',
            'Tu vino Ideal es el Chardonnay!',
            'success'
          )
          
    } else if (vinos === "Chardonnay" && ciudad === "París" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Carismática!',
            'Tu vino Ideal es el Sauvignon Blanc!',
            'success'
          )
          
    }  else if (vinos === "Chardonnay" && ciudad === "Berlín" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Extrovertida!',
            'Tu vino Ideal es el Cabernet Sauvignon!',
            'success'
          )
          
    }  else if (vinos === "Chardonnay" && ciudad === "Nueva York" && redSocial === "Twitter") {
        Swal.fire(
            'Eres una persona Cultural/Bohemia!',
            'Tu vino Ideal es el Cabernet Sauvignon!',
            'success'
          )
          
    }   else if (vinos === "Merlot" && ciudad === "Buenos Aires" && redSocial === "TikTok"
    || redSocial === "Facebook" || redSocial === "Instagram") {
        Swal.fire(
            'Eres una persona Extrovertida!',
            'Tu vino Ideal es el Cabernet Sauvignon!',
            'success'
          )
          
    } else {

        Swal.fire(
            'Eres una persona Cultural/Bohemia!',
            'Tu vino Ideal es el Cabernet Sauvignon!',
            'success'
          )

    }

}



// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }

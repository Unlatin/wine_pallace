document.getElementById("botonform").addEventListener("click", function(event){
    event.preventDefault();
    msj();
  });

let nombre;
let correo;
let arr = [];


const msj = () => {
    nombre = document.getElementById("text").value;
    correo = document.getElementById("email").value;
    arr = [nombre, correo];

    Swal.fire({
        title: `${arr[0]}`,
        icon: 'info',
        html:
          '<b>Recibimos tus datos</b>, ' +
          'recuerda revisar tu email: ' +
          `${arr[1]}`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'genial!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Cancelar',
        cancelButtonAriaLabel: 'Cancelar'
      })

}



if(window.location.href.indexOf('reloj') > -1){
  //usando setInterval podremos hacer que el reloj se actualize constantemente
   setInterval(function(){
    var reloj = moment().format("h:mm:ss a");
    var calendario = moment().format("MMM Do YY");
    $("#reloj").html(reloj);
    $("#calendario").html(calendario);
      //1000 segundo que es lo ideal
   },1000);


  }



if(window.location.href.indexOf('inicio') > -1){
  window.addEventListener("load", function (){

    emailjs.init('user_JCsxjlOoRVBBA3oCFLrby');

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();

       btn.value = 'Sending...';

       const serviceID = 'default_service';
       const templateID = 'template_55v008d';

       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
         const name =  document.getElementById("from_name").value = "";
           const email = document.getElementById("to_email").value = "";
           const message = document.getElementById("message").value = "";
          btn.value = 'Enviado';
          Swal.fire(
      'Enviado correctamente!',
      'Presiona!',
      'success'
    )
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });


    });


  }











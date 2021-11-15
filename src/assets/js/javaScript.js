

function Reloj(){
  
    var fecha = new Date(),
    horas = fecha.getHours(),
    ampm,
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear();

    var pHoras = document.getElementById('horas'),
    pAMPM = document.getElementById('ampm'),
    pMinutos = document.getElementById('minutos'),
    pSegundos = document.getElementById('segundos'),
    pDiaSemana = document.getElementById('diaSemana'),
    pDia = document.getElementById('dia'),
    pMes = document.getElementById('mes'),
    pYear = document.getElementById('year');
  
  var semana = ['Domingos', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  pDiaSemana.textContent = semana[diaSemana];

  pDia.textContent = dia;
  
  var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Abril', 'Mayo', 'Junio', 'Julio', 'septiembre', 'Noviembre', 'Diciembre',]
    pMes.textContent = meses[mes];

    pYear.textContent = year;

    if (horas >= 12) {
      horas = horas - 12;
      ampm = 'PM';

    } else {
      ampm = 'AM';
    }
};












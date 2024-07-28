import * as componentes from './componentes/componentes.js';
import * as collection from './view/colletion.js';
import * as letter  from './view/letter.js';
import * as fileshistory  from './view/filehistory.js';


$(document).ready(function(){


  // Cambiar iconos del navegador Izq
  $('#tagdark').click(function(){
    $('#imgLigth').css("display","flex");
    $('#cuerposmall').css("display","flex");
    $('#imgdark').css("display","none");
    $('#cuerpolarge').css("display","none");
   
    $('.navbigleft').css("width", "4.5rem");
    $('.navbigleft').css("height", "35rem"); 
    $('.col-xl-10').css("width", "95%"); 
  });

$('#tagligth').click(function(){
    $('#imgLigth').css("display","none");
    $('#cuerposmall').css("display","none");
    $('#imgdark').css("display","flex");
    $('#cuerpolarge').css("display","flex");
    
    $('.navbigleft').css("width", "15rem");
    $('.navbigleft').css("height", "35rem"); 
    $('.col-xl-10').css("width", "83.3%"); 
  });


    /** Carga inicial por defecto */
  collection.collection();


  /** Seleccion de Opciones */
  $('body').on('click', '#cuerpolarge a', function() {
    let idCampo = $(this).attr('id');
    $.get("/js/config/config.js", function(data) { 
      var configs = $.parseJSON(data);
      $.each(configs, function(index, value) {
        if (index === idCampo) {

          $('#DataContainer').empty();

          if(idCampo === "c-3") //Collection List
          {
            collection.collection(value);
          }
          else if(idCampo === "em-13") //Letter 
          {
            letter.letter(value);
          }
          else if(idCampo === "op-11") //Files History
          {
            fileshistory.filehistory(value);
          }
        }
      });
    });
  });

  /** Seleccion de Opciones */
  $('body').on('click', '#cuerposmall a', function() {
    let idCampo = $(this).attr('id');
    $.get("/js/config/config.js", function(data) { 
      var configs = $.parseJSON(data);
      $.each(configs, function(index, value) {
        if (index === idCampo) {

          $('#DataContainer').empty();

          if(idCampo === "c-3") //Collection List
          {
            collection.collection(value);
          }
          else if(idCampo === "em-13") //Letter 
          {
            letter.letter(value);
          }
          else if(idCampo === "op-11") //Files History
          {
            fileshistory.filehistory(value);
          }
        }
      });
    });
  });

   /** Paginado */
   $('body').on('click', '#pg1 a', function() {
    let value = $(this).attr('value');

    $('#containerTable').remove();
    
     //Tabla
     $('#pg1').before(componentes.table());
     datostabla(value);

     var value1 = value++;
     $("#a1").html('<a class="me-4 roboto-black-900" href="#" id="a1" value="'+ value1 +'">'+ value1 +'</a>');
     var value2 = value++
     $("#a2").html('<a class="me-4 roboto-black-900" href="#" id="a2" value="'+ value2 +'">'+ value2 +'</a>');
     var value3 = value++
     $("#a3").html('<a class="me-4 roboto-black-900" href="#" id="a3" value="'+ value3 +'">'+ value3 +'</a>');
     var value20 = value1 + 20;
     $("#a20").html('<a class="me-4 roboto-black-900" href="#" id="a20" value="'+ value20 +'">'+ value20 +'</a>');
  });


    // llenado si selecciona una nueva cantidad de datos
    $(document).on('change', '#countItems', function(event) {
        $('#containerTable').empty();  

        $.get("/js/mock/fulldata.js", function(data) { 
            console.log($.parseJSON(data));
            if ($.parseJSON(data).TotalRecords > 0) {
                $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white navtable col-sm-12 col-md-12 col-lg-12" style="box-shadow: 0 5px 0 0 rgba(0,0,0,.2);"><div class="col-sm-12 col-md-12 col-lg-12"><div>'
                    +'  <ul class="d-flex my-2 mb-0 ps-3">'
                    +'    <li class="nav-item d-flex nav-link litable-100"><p class="roboto-black-table"> Billing Provader Name </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Vendor Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link"><p class="roboto-black-table ms-2"> Case No. &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Claim No. &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Date of Services &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Ovp Amount &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Balance &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Member Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-3"> Algo Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Program Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Retraction ID &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Notification &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'
                    +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table ms-2"> Letters &nbsp; </p><img src="assets/arrows-short.svg" class="mt-3"  alt="mdo" width="15" height="15"></li>'                                 
                    +'  </ul></div></div></nav>  ')
            );

                $.each($.parseJSON(data).Items, function(index, value){
                    if(index < $('#countItems').val()){
                        $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white col-sm-12 col-md-12 col-lg-12"  id="index"' + index + '>' +
                            '<div class="col-sm-12 col-md-12 col-lg-12">' +
                            '<div>' +
                            ' <ul class="d-flex my-2 mb-0 ps-3">' +
                            '<li class="nav-item d-flex nav-link litable-100" style="word-break: break-all;">' +
                            '<p class="roboto-black-table-500" ptable-60> ' +value.CI + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.NombreApellidos + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' + value.TipoOficialAux + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' +  new Date(value.FechaNacimiento).toLocaleDateString('en-US') + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.SexoAux + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.Nacionalidad + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' + value.Especialidad + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.NoExpediente + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.NacionalidadId + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.EspecialidadId + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + value.Simabu + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + new Date(value.FechaGraduacion).toLocaleDateString('en-US') + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><button type="button" class="my-button hover active roboto-black-table-500-small" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Read</strong> </button></li>' +
                            '</ul></div></div></nav>'));
                    }
                });
                    
            } else {
                console.warn("AJax failed");
            }
        });  
    });

    $(document).on('change', '#countItemsfile', function(event) {
      $('#containerTable').empty();  
      fileshistory.datostabla();
    });

    $(document).on('change', '#countItemsLetter', function(event) {
      $('#containerTable').empty();  
      letter.datostabla();
    });
    

    
    $('#favorites').click(function(){
        console.log($('.roboto-light favorites'));
        console.log($('.roboto-light favorites:first-child').css("color", "#615EFC"));
    });

      


  });

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


  $('body').on('click', '#cuerpolarge a', function() {
    let idCampo = $(this).attr('id');
    $.get("/js/config/config.js", function(data) { 
      var configs = $.parseJSON(data);
      $.each(configs, function(index, value) {
        if (index === idCampo) {
          $('#DataContainer').empty();
          $('#DataContainer').prepend(navbarUp(value));

          //   nav claims
            var Order = {
              1 : "All Status", 2 : 'Open', 3 : 'Closed', 4 : 'Closed Invalid', 5 : 'Closed By Settlement', 6 : 'Closed Partial Payment', 7 : 'Contested', 8 : 'Closed No Recovered', 9 : 'Overturned', 10 : 'Closed Due To State Statute'
            };
            $('#navbarup').after(navbarMiddle("<h1> Claims </h1>", "Order By", selectorOrder("120", Order, "order"),textLink("Tools", "roboto-black-900", "active"), img2020("/assets/tools.svg")));
      
          //   nav collection
            var number = { 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9 };
            $('#navbarmiddle').after(navbarMiddle("<h3>Cases in Collection</h3> ", null, searchLook(), selectorOrder("68", number, "countItems"), textLink("Items per page", "roboto-black-table-500")));

            //Tabla
            $('#DataContainer').append(table());
            datostabla();

            // paginado
            $('#DataContainer').append(paginado());
        }
      });
      console.log($.parseJSON(data));

    });

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

    // llenado inicial
    // $.get("https://5876a39b-67fd-4a0e-9833-57bfe6331013.mock.pstmn.io/Persona", function(data) {  
        var datostabla = function datostabla(params) {
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
        }
    
    $('#favorites').click(function(){
        console.log($('.roboto-light favorites'));
        console.log($('.roboto-light favorites:first-child').css("color", "#615EFC"));
    });

      /* Componentes */
      //Narvar Up
      var navbarUp = function navbarUp(value = "Home/Claims/Collection List") {
        var root = value != undefined ? value.split('/') : null;
        var $divnavbar = '<div id="navbarup" class="container my-1 col-sm-12 col-md-12 col-lg-12">'
                    + '<nav aria-label="breadcrumb">'
                    + '  <ol class="breadcrumb p-3 body rounded-3">';
        if(value != undefined){
          root.forEach(element => {
            console.log(element);
          $divnavbar = $divnavbar + '<li class="breadcrumb-item roboto-black-600 "><a>' + element + '</a></li>'
        });
        }
        $divnavbar = $divnavbar + '  </ol>' + '</nav>' + '</div>';
                            
        return $($divnavbar);
      }

      //Narvar middle
      var navbarMiddle = function navbarMiddle($valor1 = null, $valor2 = null, $valor3 = null, $valor4 = null, $valor5 = null) {
        var $divnavbar = '<nav id="navbarmiddle" class="navbar navbar-expand-lg navbar-white" aria-label="Ninth navbar">'
                    + '<div class="container  col-xm-12 col-sm-12 col-md-12 col-lg-12">';
        if($valor1 != null)
            $divnavbar = $divnavbar + $valor1;
        $divnavbar = $divnavbar + '<div class="collapse navbar-collapse justify-content-lg-end">';
        if($valor2 != null)
            $divnavbar = $divnavbar + '<a class="nav-link me-auto mt-2 me-lg-1 ms-lg-2 roboto-black-table-500" >' + $valor2 + '</a>';
        if($valor3 != null)
            $divnavbar = $divnavbar + $valor3;
        if($valor4 != null)
            $divnavbar = $divnavbar + $valor4;
        if($valor5 != null)
            $divnavbar = $divnavbar + $valor5;
        
        $divnavbar = $divnavbar + '</div>' + '</nav>';
                            
        return $($divnavbar);
      }

      // Selector 
      var selectorOrder = function selectorOrder($width, option, $id) {
        $selector = '<form role="search me-auto ms-lg-9 me-lg-4 ">'
                       + ' <select class="form-select me-auto ms-lg-1 me-lg-3" style="width: ' + $width + 'px;"  id=' + $id + ' required>';
        $.each(option, function(index, value){
            $selector = $selector + '<option value="' + index + '">' + value + '</option>';
        });    
        
        $selector = $selector + ' </select>'
                       + ' <div class="invalid-feedback">'
                       + '   Please select a valid Date.'
                       + ' </div>'
                    + '</form>';
        return $selector;
      }

      // Text Tools
      var textLink = function textLink($text = null, $tipoletra, $active = null) {
        return '<a class="nav-link ' + $active + ' me-auto mt-0 me-lg-1 ' + $tipoletra + ' aria-current="page" href="#">' + $text + '</a>';
      }

      // Img Tools
      var img2020 = function img2020($src = null) {
        return '<img src= ' + $src + ' class="me-auto ms-lg-1 me-lg-1 active" href="" alt="mdo" width="20" height="20">';
      }

      // Search Textfield
      var searchLook = function searchLook($src = null) {
        return '<form class="col-12 col-lg-auto me-lg-3 mb-2 mb-md-0 formsearch" role="search" id="searchtable">'
                    +'    <input type="search" class="form-control search" placeholder="¿Qué estás buscando?" aria-label="Search">'
                    +'    <img src="/assets/search.svg" alt="mdo" width="24" height="24" class=" position-absolute search-icon-table hover active">'
                    +'  </form>';
      }

      //   Tabla
    var table = function table() {
      var $divnavbar = $('<div class=" my-1 col-sm-12 col-md-12 col-lg-12" id="containerTable"> </div>');                            
      return $divnavbar;
    }

    //   paginado
    var paginado = function paginado() {
        var $divnavbar = $('<div class="container my-3 col-10 col-md-10 col-lg-12" id="containerpagination">'
                    + '<nav>'
                    + '  <ul class="pagination justify-content-end" id="pg1">'
                    + '    <li class="page-item"><a class="page-link rounded-circle me-4 bg-button" style="color: #f7faf7;" href="#" value="back" tabindex="-1" aria-disabled="true"><strong><</strong></a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" value="1">1</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" value="2">2</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" value="3">3</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900"><strong>...</strong></a></li>'
                    + '    <li class="page-item b"><a class="me-4 roboto-black-900" href="#" value="20"><strong>20</strong></a></li>'
                    + '    <li class="page-item"><a class="page-link rounded-circle me-2 bg-button" style="color: #f7faf7;" href="#" value="next" tabindex="-1" aria-disabled="true"><strong>></strong></a></li>'
                    + '  </ul>'
                    + '</nav>'
                + '</div>');                            
        return $divnavbar;
      }

      

        // nav up body
      $('#DataContainer').prepend(navbarUp());

    //   nav claims
      var Order = {
        1 : "All Status", 2 : 'Open', 3 : 'Closed', 4 : 'Closed Invalid', 5 : 'Closed By Settlement', 6 : 'Closed Partial Payment', 7 : 'Contested', 8 : 'Closed No Recovered', 9 : 'Overturned', 10 : 'Closed Due To State Statute'
      };
      $('#navbarup').after(navbarMiddle("<h1> Claims </h1>", "Order By", selectorOrder("120", Order, "order"),textLink("Tools", "roboto-black-900", "active"), img2020("/assets/tools.svg")));

    //   nav collection
      var number = { 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9 };
      $('#navbarmiddle').after(navbarMiddle("<h3>Cases in Collection</h3> ", null, searchLook(), selectorOrder("68", number, "countItems"), textLink("Items per page", "roboto-black-table-500")));

      datostabla();
      // paginado
      $('#DataContainer').append(paginado());

  });

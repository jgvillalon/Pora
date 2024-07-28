/* Componentes */
      //Narvar Up
      export function navbarUp(value = "Home/Claims/Collection List") {
        var root = value != undefined ? value.split('/') : null;
        var $divnavbar = '<div id="navbarup" class="container my-1 col-sm-12 col-md-12 col-lg-12">'
                    + '<nav aria-label="breadcrumb">'
                    + '  <ol class="breadcrumb p-3 body rounded-3">';
        if(value != undefined){
          var count = 0;
          root.forEach(element => {
            if(count < root.length - 1)
              $divnavbar = $divnavbar + '<li class="breadcrumb-item roboto-black-600 "><a>' + element + '</a></li>';
            else{
              console.log(element);
              // $divnavbar = $divnavbar + '<li class="breadcrumb-item roboto-black-600 "><a>' + element + '</a>'
              $divnavbar = $divnavbar + '<li class=" breadcrumb-item "><a class="my-1 nav-link dropdown-toggle roboto-black-600 active" href="#" data-bs-toggle="dropdown" aria-expanded="false">' + element + '</a>'
              +'<ul class="dropdown-menu">'
              +'<li><a class="dropdown-item" href="#">Validation List</a></li>'
              +'<li><a class="dropdown-item" href="#">Rejection List</a></li>'
              +'<li><a class="dropdown-item" href="#">Collection List</a></li>'
              +'<li><a class="dropdown-item" href="#">New Case</a></li>'
            +'</ul></li>'
            }
              
            count++;
        });
        }
        $divnavbar = $divnavbar + '  </ol>' + '</nav>' + '</div>';
                            
        return $($divnavbar);
      }

      //Narvar middle
      export function navbarMiddle($valor1 = null, $valor2 = null, $valor3 = null, $valor4 = null, $valor5 = null) {
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
      export function selectorOrder($width, option, $id) {
        var $selector = '<form role="search me-auto ms-lg-9 me-lg-4 ">'
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
      export function textLink($text = null, $tipoletra, $active = null) {
        return '<a class="nav-link ' + $active + ' me-auto mt-0 me-lg-1 ' + $tipoletra + ' aria-current="page" href="#">' + $text + '</a>';
      }

      // Img Tools
      export function img2020($src = null,$width, $height) {
        return '<img src= ' + $src + ' class="me-auto ms-lg-1 me-lg-1 active" href="" alt="mdo" width="' + $width+ '" height="' + $height + '">';
      }

      // Search Textfield
      export function searchLook($src = null) {
        return '<form class="col-12 col-lg-auto me-lg-3 mb-2 mb-md-0 formsearch" role="search" id="searchtable">'
                    +'    <input type="search" class="form-control search" placeholder="¿Qué estás buscando?" aria-label="Search">'
                    +'    <img src="/assets/search.svg" alt="mdo" width="24" height="24" class=" position-absolute search-icon-table hover active">'
                    +'  </form>';
      }

      // Tabla
      export function table() {
      var $divnavbar = $('<div class=" my-1 col-sm-12 col-md-12 col-lg-12" id="containerTable"> </div>');                            
      return $divnavbar;
      }

      // paginado
      export function paginado(/*$val = 0*/) {
        // var paginado1 = $val + 1;
        // var paginado2 = $val + 2;
        // var paginado3 = $val + 3;
        // var paginado20 = $val + 20;
        var $divnavbar = $(' <div class="container my-3 col-10 col-md-10 col-lg-12" id="containerpagination">'
                    + '<nav>'
                    + '  <ul class="pagination justify-content-end" id="pg1">'
                    + '    <li class="page-item"><a class="page-link rounded-circle me-4 bg-button" style="color: #f7faf7;" href="#" value="back" tabindex="-1" aria-disabled="true" value="-1"><strong><</strong></a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" id="a1" value="1">1</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" id="a2" value="2">2</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900" href="#" id="a3" value="3">3</a></li>'
                    + '    <li class="page-item"><a class="me-4 roboto-black-900"><strong>...</strong></a></li>'
                    + '    <li class="page-item b"><a class="me-4 roboto-black-900" href="#" id="a20" value="20"><strong>20</strong></a></li>'
                    + '    <li class="page-item"><a class="page-link rounded-circle me-2 bg-button" style="color: #f7faf7;" href="#" value="next" tabindex="-1" aria-disabled="true" value="1"><strong>></strong></a></li>'
                    + '  </ul>'
                    + '</nav>'
                + '</div>');                            
        return $divnavbar;
      }
import * as componentes from '../componentes/componentes.js';

export function letter($value) {
    // nav up body
    $('#DataContainer').prepend(componentes.navbarUp($value));

    //   nav claims
    var Action = {
        1 : "Actions" /*, 2 : 'Open', 3 : 'Closed', 4 : 'Closed Invalid', 5 : 'Closed By Settlement', 6 : 'Closed Partial Payment', 7 : 'Contested', 8 : 'Closed No Recovered', 9 : 'Overturned', 10 : 'Closed Due To State Statute'*/
    };
    $('#navbarup').after(componentes.navbarMiddle("<h1> Letter Presets </h1>", " ", componentes.selectorOrder("120", Action, "order"), null, null));

    //   nav collection
    var number = { 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9 };
    $('#navbarmiddle').after(componentes.navbarMiddle("<h3>List</h3> ", null, componentes.searchLook(), componentes.selectorOrder("68", number, "countItemsLetter"), componentes.textLink("Items per page", "roboto-black-table-500")));
    // tabla
    $('#DataContainer').append(componentes.table());
    datostabla();
    // paginado
    $('#DataContainer').append(componentes.paginado());
}

 //Datos de la tabla
 export function datostabla($value = 0) {
  $.get("https://5876a39b-67fd-4a0e-9833-57bfe6331013.mock.pstmn.io/Persona", function(data) {
      if (data.TotalRecords > 0) {
          $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white navtable col-sm-12 col-md-12 col-lg-12" style="box-shadow: 0 5px 0 0 rgba(0,0,0,.2);"><div class="col-sm-12 col-md-12 col-lg-12"><div>'
                  +'  <ul class="d-flex my-2 mb-0 ps-3" style="">'
                  +'    <li class="nav-item d-flex nav-link litable-40"><p class="roboto-black-table"> ID &nbsp;</p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-150"><p class="roboto-black-table ms-2"> Preset Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-150""><p class="roboto-black-table ms-2"> Schedule &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-150"><p class="roboto-black-table ms-2"> Last Ran &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-150"><p class="roboto-black-table  ms-2"> Created By &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-150"><p class="roboto-black-table  ms-2"> Date Created &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                  +'    <li class="nav-item  d-flex nav-link litable-400"><p class="roboto-black-table  ms-2"> Action &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'                                
                  +'  </ul></div></div></nav>  ')
          );

          var items = data.Items;
          var lengtItems = parseInt($('#countItemsLetter').val(), 10) * (parseInt($value,10) + 1);
          var pinicio = parseInt($('#countItemsLetter').val(), 10) * (parseInt($value,10));
          for (let i = pinicio; i < lengtItems; i++) {
            $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white col-sm-12 col-md-12 col-lg-12" >' +
              '<div class="col-sm-12 col-md-12 col-lg-12">' +
              '<div>' +
              ' <ul class="d-flex my-2 mb-0 ps-3">' +
              '<li class="nav-item d-flex nav-link litable-40" style="word-break: break-all;"><p class="roboto-black-table-500-small" ptable-60> ' + items[i].Id + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-150" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + items[i].NombreApellidos + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-150" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-60"> ' + items[i].TipoOficialAux + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-150" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-60"> ' + items[i].Nacionalidad  + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-150" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + items[i].SexoAux + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-150" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + new Date(items[i].FechaNacimiento).toLocaleDateString('en-US') + ' </p></li>' +
              '<li class="nav-item  d-flex nav-link litable-400 style="word-break: break-all;"> ' +
                '<button type="button" class="my-button-copy hover active roboto-black-table-300-small me-2" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Copy</strong> </button>' +
                '<button type="button" class="my-button-on hover active roboto-black-table-300-small me-2" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>On</strong> </button>' +
                '<button type="button" class="my-button-edit hover active roboto-black-table-300-small me-2" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Edit</strong> </button>' +
                '<button type="button" class="my-button-play hover active roboto-black-table-300-small me-2" style="color: #ffffff; text-decoration: none; "> <span class="mail-single"></span> <strong>Play</strong> </button>' +
                '<button type="button" class="accordion-button my-button-UoDown hover active roboto-black-table-300-small me-2 rounded-circle" style="color: #ffffff; text-decoration: none; " data-bs-toggle="collapse" data-bs-target="#collapseOne'+ i + '" aria-expanded="true" aria-controls="collapseOne'+ i + '"> <span class=""></span> </button>' +
                // '<button type="button" class="my-button-UoDown hover active roboto-black-table-500-small me-2 rounded-circle" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> </button>' +
              '</li></ul>'+
              '<ul class="d-flex my-2 mb-0 ps-3" style="list-style: none;">'+
                 '<li> <div id="collapseOne'+ i + '"class="accordion-collapse collapse " data-bs-parent="#accordionExample">'+
                  '<div class="accordion-body d-flex">'+
                  '<div class="card">'+
                    '<div class="card-body">'+
                      '<h5 class="card-title">General</h5>'+
                      '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>OVA-O &nbsp; &nbsp; </strong> </button>' +
                      '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>Institutional(I,O) $25.00 &nbsp; &nbsp; </strong> </button>' +
                      '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2"> <span class="mail-single"></span> <strong>Profesional(I,O) $5.00 &nbsp; &nbsp; &nbsp; &nbsp;</strong> </button>' +
                      '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2"> <span class="mail-single"></span> <strong>Profesional(I,O) $5.00 &nbsp; &nbsp; &nbsp; &nbsp;</strong> </button>' +
                      '<hr>'+
                      '<h5 class="card-title">Billing Providers</h5>'+
                      '<button type="button" class="my-button-card-blank  roboto-black-table-300-small me-2 mb-2"> <span class="mail-single"></span> <strong>Par non does contain N</strong> </button>' +
                    '</div>'+
                  '</div>'+
                  '<div class="card">'+
                    '<div class="card-body">'+
                      '<h5 class="card-title">Lobs</h5>'+
                    '</div>'+
                  '</div>'+
                  '<div class="card">'+
                  '<div class="card-body">'+
                    '<h5 class="card-title">Programs</h5>'+
                  '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>EHP &nbsp; &nbsp; </strong> </button>' +
                  '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>PP &nbsp; &nbsp; </strong> </button>' +
                  '</div>'+
                  '</div>'+
                  '<div class="card">'+
                  '<div class="card-body">'+
                    '<h5 class="card-title">Algorithms</h5>'+
                  '</div>'+
                '</div>'+
                '<div class="card">'+
                '<div class="card-body">'+
                  '<h5 class="card-title">Programs</h5>'+
                  '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>11 &nbsp; &nbsp; </strong> </button>' +
                  '<button type="button" class="my-button-card  roboto-black-table-300-small me-2 mb-2" > <span class="mail-single"></span> <strong>10 &nbsp; &nbsp; </strong> </button>' +
                '</div>'+
              '</div>'+
                  '</div>'+
                '</div> </li>'+
              '</ul>'+
              '</div></div></nav>'));                  
          }
              
      } else {
          console.warn("AJax failed");
      }
  });  
}
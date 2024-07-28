import * as componentes from '../componentes/componentes.js';

export function collection($value) {
    // nav up body
    $('#DataContainer').prepend(componentes.navbarUp($value));

    //   nav claims
    var Order = {
        1 : "All Status", 2 : 'Open', 3 : 'Closed', 4 : 'Closed Invalid', 5 : 'Closed By Settlement', 6 : 'Closed Partial Payment', 7 : 'Contested', 8 : 'Closed No Recovered', 9 : 'Overturned', 10 : 'Closed Due To State Statute'
    };
    $('#navbarup').after(componentes.navbarMiddle("<h1> Claims </h1>", "Order By", componentes.selectorOrder("120", Order, "order"), componentes.textLink("Tools", "roboto-black-900", "active"), componentes.img2020("/assets/tools.svg", 20, 20)));

    //   nav collection
    var number = { 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9 };
    $('#navbarmiddle').after(componentes.navbarMiddle("<h3>Cases in Collection</h3> ", null, componentes.searchLook(), componentes.selectorOrder("68", number, "countItems"), componentes.textLink("Items per page", "roboto-black-table-500")));
    // tabla
    $('#DataContainer').append(componentes.table());
    datostabla();
    // paginado
    $('#DataContainer').append(componentes.paginado());

    //Datos de la tabla
    function datostabla($value = 0) {
        // $.get("/js/mock/fulldata.js", function(data) { 
        //     if ($.parseJSON(data).TotalRecords > 0) {
            $.get("https://5876a39b-67fd-4a0e-9833-57bfe6331013.mock.pstmn.io/Persona", function(data) {
          if (data.TotalRecords > 0) {
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

              var items = data.Items;
              var lengtItems = parseInt($('#countItems').val(), 10) * (parseInt($value,10) + 1);
              var pinicio = parseInt($('#countItems').val(), 10) * (parseInt($value,10));
              for (let i = pinicio; i < lengtItems; i++) {
                $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white col-sm-12 col-md-12 col-lg-12" >' +
                  '<div class="col-sm-12 col-md-12 col-lg-12">' +
                  '<div>' +
                  ' <ul class="d-flex my-2 mb-0 ps-3">' +
                  '<li class="nav-item d-flex nav-link litable-100" style="word-break: break-all;">' +
                  '<p class="roboto-black-table-500" ptable-60> ' + items[i].CI + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].NombreApellidos + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' + items[i].TipoOficialAux + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' +  new Date(items[i].FechaNacimiento).toLocaleDateString('en-US') + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].SexoAux + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].Nacionalidad + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-60"> ' + items[i].Especialidad + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].NoExpediente + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].NacionalidadId + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].EspecialidadId + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + items[i].Simabu + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500 ptable-80"> ' + new Date(items[i].FechaGraduacion).toLocaleDateString('en-US') + ' </p></li>' +
                  '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><button type="button" class="my-button-email hover active roboto-black-table-300-small" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Read</strong> </button></li>' +
                  '</ul></div></div></nav>'));                  
              }
                  
          } else {
              console.warn("AJax failed");
          }
      });  
  }
}

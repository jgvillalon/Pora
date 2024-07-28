import * as componentes from '../componentes/componentes.js';

export function filehistory($value) {
    // nav up body
    $('#DataContainer').prepend(componentes.navbarUp($value));

    //   nav claims
    var Action = {
        1 : "Actions" /*, 2 : 'Open', 3 : 'Closed', 4 : 'Closed Invalid', 5 : 'Closed By Settlement', 6 : 'Closed Partial Payment', 7 : 'Contested', 8 : 'Closed No Recovered', 9 : 'Overturned', 10 : 'Closed Due To State Statute'*/
    };
    $('#navbarup').after(componentes.navbarMiddle("<h1> Files History </h1>", " ", null, null, componentes.img2020("/assets/start-dark.svg", 40, 40)));

    //   nav collection
    var number = { 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9 };
    $('#navbarmiddle').after(componentes.navbarMiddle("<h3>List</h3> ", null, componentes.searchLook(), componentes.selectorOrder("68", number, "countItemsfile"), componentes.textLink("Items per page", "roboto-black-table-500")));
    // tabla
    $('#DataContainer').append(componentes.table());
    datostabla();
    // paginado
    $('#DataContainer').append(componentes.paginado());
}

//Datos de la tabla
export function datostabla($value = 0) {
  $.get("https://761fabad-7941-468a-afb7-12eedae9be80.mock.pstmn.io/File", function(data) { 
    if (data.TotalRecords > 0) {
        $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white navtable col-sm-12 col-md-12 col-lg-12" style="box-shadow: 0 5px 0 0 rgba(0,0,0,.2);"><div class="col-sm-12 col-md-12 col-lg-12"><div>'
                +'  <ul class="d-flex my-2 mb-0 ps-3" style="height: 15px;">'
                +'    <li class="nav-item d-flex nav-link litable-60"><p class="roboto-black-table"> File ID &nbsp;</p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-300"><p class="roboto-black-table ms-2"> File Status &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-200""><p class="roboto-black-table ms-2"> File Name &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table ms-2"> File Type &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Vendors &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Algo ID &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'
                +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Loaded Date &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'                                
                +'    <li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table  ms-2"> Loaded By &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'                                
                +'    <li class="nav-item  d-flex nav-link litable-150"><p class="roboto-black-table  ms-2"> Actions &nbsp; </p><img src="assets/arrows-short.svg" class="mt-1"  alt="mdo" width="15" height="15"></li>'                                
                +'  </ul></div></div></nav>  ')
        );

        var items = data.Items;
        var lengtItems = parseInt($('#countItemsfile').val(), 10) * (parseInt($value,10) + 1);
        var pinicio = parseInt($('#countItemsfile').val(), 10) * (parseInt($value,10));
        for (let i = pinicio; i < lengtItems; i++) {
          var pc = items[i].terminado / items[i].total;
          var colorloading = pc == 1 ? "#d8e8ba" : "#ffe4b5";
          var colortextloading = pc == 1 ? "roboto-black-table-500-small-color-green" : "roboto-black-table-500-small-color";
         
          if(pc == 1){
            var contenedor1 = "background-color: #81b522;height: 20px;width: 200px;line-height: 20px !important;text-align: center;text-decoration-color: white;border-radius: 15px 15px 15px 15px;"
            var contenedor2 = "background-color: #ffa811;height: 20px;width: 0;line-height: 20px !important;text-align: center;text-decoration-color: white;border-radius: 0 15px 15px 0;"
          }else{
            var pc1 = pc*100;
            var pcresto = 200 - pc1;
            var contenedor1 = "background-color: #81b522;height: 20px;width: " + pc1.toString() + "px;line-height: 20px !important;text-align: center;text-decoration-color: white;border-radius: 15px 0 0 15px;"
            var contenedor2 = "background-color: #ffa811;height: 20px;width: " + pcresto.toString() + "px;line-height: 20px !important;text-align: center;text-decoration-color: white;border-radius: 0 15px 15px 0;"
          }

          var status = items[i].descartado > 0 ? "Loading with Error" : items[i].terminado == items[i].total ? "Successfuly" : "Processing";
          var red = (items[i].descartado / items[i].total) * 100;
          var green = (items[i].terminado / items[i].total) * 100;
          var blue = (items[i].aceptado / items[i].total) * 100;
          var yellow = (items[i].procesando / items[i].total) * 100;


          // console.log(items[i]);
          $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white col-sm-12 col-md-12 col-lg-12" >' +
            '<div class="col-sm-12 col-md-12 col-lg-12">' +
            '<div>' +
            ' <ul class="d-flex my-2 mb-0 ps-3">' +
            '<li class="nav-item d-flex nav-link litable-60" style="word-break: break-all;"><p class="roboto-black-table-500-small" ptable-60> ' + items[i].FileId + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-300" style="word-break: break-all;">'+
            '<div class="d-block">'+
            '<div class="d-flex"><p class="roboto-black-table-100-small my-1"> ' + status + ' | &nbsp;</p><p class="' + colortextloading + '" style="padding:10px 10px 10px 10px;background:' + colorloading + ';height: 1px !important;width: 100px;border-radius: 10px 10px 10px 10px;text-align: left;line-height:2px !important;text-decoration-color: #ffe4b5;"> Loaded ' +  parseFloat(pc*100).toFixed(2) + '%</p></div>'+
            '<div class="progress-stacked">'+
              '<div class="progress" role="progressbar" aria-label="Segmento dos" aria-valuenow="' + green + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + green + '%">'+
                  '<div class="progress-bar bg-success">' + green + '</div>'+
              '</div>'+
              '<div class="progress" role="progressbar" aria-label="Segmento tres" aria-valuenow="' + blue + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + blue + '%">'+
                  '<div class="progress-bar bg-info">' + blue + '</div>'+
              '</div>'+
              '<div class="progress" role="progressbar" aria-label="Segmento uno" aria-valuenow="' + yellow + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + yellow + '%">'+
                '<div class="progress-bar bg-warning">' + yellow + '</div>'+
              '</div>'+
              '<div class="progress" role="progressbar" aria-label="Segmento tres" aria-valuenow="' + red + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + red + '%">'+
                  '<div class="progress-bar bg-danger">' + red + '</div>'+
              '</div>'+
          '</div>'+
            // '<div class="d-flex">'+
            // '<div class=" roboto-black-table-100-small-color" style=" ' + contenedor1 + '">' + items[i].valorInicial + '</div>'+
            // '<div class="roboto-black-table-100-small-color" style=" ' + contenedor2 + '">' + items[i].valorFinal + '</div>'+
            // '</div> </li>' +
            '<li class="nav-item  d-flex nav-link litable-200" style="word-break: break-all;"><a href=""><p class="roboto-black-table-500-small ptable-180"> ' + items[i].FileName + ' </p></a></li>' +
            '<li class="nav-item  d-flex nav-link litable-80" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-60"> ' + items[i].FileType  + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + items[i].Vendors + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + items[i].AlgoID + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + new Date(items[i].LoadedDate).toLocaleDateString('en-US') + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-100" style="word-break: break-all;"><p class="roboto-black-table-500-small ptable-80"> ' + items[i].LoadedBy + ' </p></li>' +
            '<li class="nav-item  d-flex nav-link litable-150 style="word-break: break-all;"> ' +
              '<button type="button" class="my-button-download hover active roboto-black-table-300-small me-2 rounded-circle" style="color: #ffffff; text-decoration: none; "> <span class=""></span> </button>' +
              '<button type="button" class="my-button-close hover active roboto-black-table-300-small me-2 rounded-circle" style="color: #ffffff; text-decoration: none; "> <span class=""></span> </button>' +
              '<button type="button" class="my-button-grid hover active roboto-black-table-300-small me-2 rounded-circle" style="color: #ffffff; text-decoration: none; "> <span class=""></span> </button>' +
            '</li>' +
            '</ul></div></div></nav>'));                  
        }
            
    } else {
        console.warn("AJax failed");
    }
});  
}
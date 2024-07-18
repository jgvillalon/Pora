$(document).ready(function(){
    // llenado si selecciona una nueva cantidad de datos
    $(document).on('change', '#countItems', function(event) {
        $('#containerTable').empty();  

        $.get("https://c6cc6a3c-a11d-4a0a-ae58-755430ba925f.mock.pstmn.io/Persona", function(data) {
            if (data.TotalRecords > 0) {
                $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white navtable" aria-label="Twelfth navbar example"><div class="container-fluid"><div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">' +
                        '<ul class="navbar-nav my-2 mb-0">' +
                        '<li class="nav-item d-flex nav-link litable-100"><p class="roboto-black-table"> Billing Provader Name &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Vendor Name &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link" style = "width: 80px;"><p class="roboto-black-table"> Case No. &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table"> Claim No. &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Date of Services &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Ovp Amount &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table"> Balance &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Member Name &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Algo Name &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Program Name &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Retraction ID &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Notification &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +
                          '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table"> Letters &nbsp; </p><img src="assets/arrows.svg"  alt="mdo" width="15" height="15"></li>' +                                  
                        '</ul></div></div></nav> ')
                );

                $.each(data.Items, function(index, value){
                    if(index < $('#countItems').val()){
                        $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white border-top" aria-label="Twelfth navbar example1" id="index"' + index + '>' +
                            '<div class="container-fluid">' +
                            '<div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">' +
                            ' <ul class="navbar-nav my-2 mb-0">' +
                            '<li class="nav-item d-flex nav-link litable-100">' +
                            '<p class="roboto-black-table-500"> ' +value.CI + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NombreApellidos + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' + value.TipoOficialAux + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' +  new Date(value.FechaNacimiento).toLocaleDateString('en-US') + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.SexoAux + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.Nacionalidad + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' + value.Especialidad + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NoExpediente + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NacionalidadId + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.EspecialidadId + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.Simabu + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + new Date(value.FechaGraduacion).toLocaleDateString('en-US') + ' </p></li>' +
                            '<li class="nav-item  d-flex nav-link litable-100"><button type="button" class="my-button hover active roboto-black-table-500" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Read</strong> </button></li>' +
                            '</ul></div></div></nav>'));
                    }
                });
                    
            } else {
                console.warn("AJax failed");
            }
        });  
    });

    // // paginado
    // $(document).on('click', '#pg1', function(event) {
    //     paginador = $(".pagination");
    //     paginador.find("li").click(function()
    //     {
    //         var irpagina =$(this).html().valueOf()-1;
            
    //         console.log(irpagina);
    //     });
    //     console.log($('pg1'));
    //  });

    // llenado inicial
    $.get("https://c6cc6a3c-a11d-4a0a-ae58-755430ba925f.mock.pstmn.io/Persona", function(data) {
        
        $.each(data.Items, function(index, value){
            if(index < $('#countItems').val()){
                $('#containerTable').append(('<nav class="navbar navbar-expand-lg bg-white border-top" aria-label="Twelfth navbar example1" id="index"' + index + '>' +
                    '<div class="container-fluid">' +
                    '<div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">' +
                    ' <ul class="navbar-nav my-2 mb-0">' +
                    '<li class="nav-item d-flex nav-link litable-100">' +
                    '<p class="roboto-black-table-500"> ' +value.CI + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NombreApellidos + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' + value.TipoOficialAux + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' +  new Date(value.FechaNacimiento).toLocaleDateString('en-US') + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.SexoAux + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.Nacionalidad + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-80"><p class="roboto-black-table-500 ptable-60""> ' + value.Especialidad + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NoExpediente + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.NacionalidadId + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.EspecialidadId + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + value.Simabu + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><p class="roboto-black-table-500 ptable-80""> ' + new Date(value.FechaGraduacion).toLocaleDateString('en-US') + ' </p></li>' +
                    '<li class="nav-item  d-flex nav-link litable-100"><button type="button" class="my-button hover active roboto-black-table-500" style="color: #ffffff; text-decoration: none;"> <span class="mail-single"></span> <strong>Read</strong> </button></li>' +
                    '</ul></div></div></nav>'));
            }
      });
    });       
  });

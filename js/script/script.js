$(document).ready(function(){
    // llenado si selecciona una nueva cantidad de datos
    $(document).on('change', '#countItems', function(event) {
        $('#containerTable').empty();  

        $.get("https://5876a39b-67fd-4a0e-9833-57bfe6331013.mock.pstmn.io/Persona", function(data) {
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
    $.get("https://5876a39b-67fd-4a0e-9833-57bfe6331013.mock.pstmn.io/Persona", function(data) {  
        
        $.each(data.Items, function(index, value){
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
    }); 
    
    $('#favorites').click(function(){
        console.log($('.roboto-light favorites'));
        console.log($('.roboto-light favorites:first-child').css("color", "#615EFC"));
    });

    $('#tagdark').click(function(){
        $('#imgLigth').css("display","flex");
        $('#cuerposmall').css("display","flex");
        $('#imgdark').css("display","none");
        $('#cuerpolarge').css("display","none");
       
        $('.navbigleft').css("width", "4.5rem");
        $('.navbigleft').css("height", "35rem"); 
        $('.col-xl-10').css("width", "95%"); 
        //     +'    <a href="#" class=" hover d-block mt-2" title="Favorites" aria-expanded="false" id="tagleft">'
        //     +'      <img src="/assets/tagup-litgh.svg" id="tagligth1" class="mb-2 imgTag" alt="mdo" width="28" height="28" style=" margin-left: 45% !important;">'
        //     +'    </a>'
        //     +'  </div>'
        //     +'  <div class="row align-items-center">'
        //     +'    <ul class="list-unstyled ps-2">'
        //     +'      <!-- Favorites -->'
        //     +'      <a href="/" class="a_icon_menu hover d-block align-items-center justify-content-center  link-body-emphasis text-decoration-none dropdown-toggle mt-4"  title="Favorites" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/favorites.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/favorites-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Favorites</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'       <!-- Claims -->'
        //     +'       <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Claims" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/claims.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/claims-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Claims</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'      <!-- Dashboard -->'
        //     +'      <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Dashboard" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/dashboard.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/dashboard-dark.svg" class="mb-2 icon_menu  hover active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Dashboard</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'      <!-- Mail Room -->'
        //     +'      <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Mail Room" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/email.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/email-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Mail Room</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'      <!-- Members -->'
        //     +'      <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Members" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/member.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/member-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Members</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'      <!-- Payment Center -->'
        //     +'      <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Payment Center" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/payment.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/payment-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Payment Center</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'      <!-- Operational Activities -->'
        //     +'      <a href="/" class=" a_icon_menu hover d-block align-items-center justify-content-center p1 link-body-emphasis text-decoration-none dropdown-toggle" title="Operational Activities" data-bs-toggle="dropdown" aria-expanded="false">'
        //     +'        <img src="/assets/op.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'        <img src="/assets/op-dark.svg" class="mb-2 icon_menu active" alt="mdo" width="24" height="24">'
        //     +'      </a>'
        //     +'      <p class="roboto-bold-200"><strong>Operational Activities</strong></p>'
        //     +'      <ul class="dropdown-menu text-small shadow">'
        //     +'        <li><a class="dropdown-item" href="#">New project...</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Settings</a></li>'
        //     +'        <li><a class="dropdown-item" href="#">Profile</a></li>'
        //     +'        <li><hr class="dropdown-divider"></li>'
        //     +'        <li><a class="dropdown-item" href="#">Sign out</a></li>'
        //     +'      </ul>'
        //     +'    </ul>'
        //     +'  </div>  '));  
      });

    $('#tagligth').click(function(){
        $('#imgLigth').css("display","none");
        $('#cuerposmall').css("display","none");
        $('#imgdark').css("display","flex");
        $('#cuerpolarge').css("display","flex");
        
        $('.navbigleft').css("width", "15rem");
        $('.navbigleft').css("height", "35rem"); 
        $('.col-xl-10').css("width", "83.3%"); 
        //     +'    <a href="#" class=" hover d-block mt-2" title="Favorites" aria-expanded="false" id="tagleft">'
        //     +'      <img src="/assets/tag-dark.svg" id="tagdark" class="mb-2 imgTag" alt="mdo" width="28" height="28" style=" margin-left: 87% !important;">'
        //     +'    </a>'
        //     +'  </div>'
        //     +'  <div class="row align-items-center">'
        //     +'    <ul class="list-unstyled ps-3">'
        //     +'      <!-- Favorites  -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/favorites.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="favorites" data-bs-target="#home-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light favorites" style="margin-bottom: 0px;"><strong>Favorites</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="home-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- claims -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/claims.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="claims" data-bs-target="#claims-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Claims</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="claims-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- Dashboard -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/dashboard.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="dashboard" data-bs-target="#dashboard-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Dashboard</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="dashboard-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- Mail Room -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/email.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="email" data-bs-target="#email-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Mail Room</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="email-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- Members -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/member.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="members" data-bs-target="#members-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Members</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="members-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- Payment Center -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/payment.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="payment" data-bs-target="#payment-collapse" aria-expanded="false">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Payment Center</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="payment-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'      <!-- Operational Activities -->'
        //     +'      <li class="mb-1 li-table">'
        //     +'        <img src="assets/op.svg" alt="">'
        //     +'        <button class="btn btn-toggle d-inline-flex align-items-left ps-1 pe-1 my-2 rounded border-0 collapsed dropdown-toggle-nav-left" data-bs-toggle="collapse" id="op" data-bs-target="#op-collapse" aria-expanded="true">'
        //     +'          <p class="roboto-light" style="margin-bottom: 0px;"><strong>Operational Activities</strong></p>'
        //     +'        </button>'
        //     +'        <div class="collapse" id="op-collapse">'
        //     +'          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-3">'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Validation List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Rejection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Collection List</a></li>'
        //     +'            <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">New Case</a></li>'
        //     +'          </ul>'
        //     +'        </div>'
        //     +'      </li>'
        //     +'    </ul>'
        //     +'  </div>   '));  
      });
  });

function Footer()  {
    console.log("Footer");

    const footer = document.querySelector('#footer');
    const range = document.createRange();
    range.selectNode(footer);
    
    const footerFragment = range.createContextualFragment(`
      
    <div class="footer_L d-flex " >
        <div style="width: 150px;"> 
            <img src="./assets/UI/logo-PBI.png"  style="width: 100%;" alt="Logo">
        </div>
    </div>
    <div class="footer_M d-flex column-gap-5 px-5" >
        <ul class="navbar-nav d-flex flex-column"> 
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
            </li>
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../About-Us.html">About Us</a>
            </li>
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../Packages.html">Packages</a>
            </li>
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../Destination.html">Destinations</a>
            </li>
        </ul>
        <ul class="navbar-nav d-flex flex-column"> 
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../Activities.html">Activities</a>
            </li>
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../ContactUs.html">Contact Us</a>
                </li>
            <li class="nav-item fs-6 fw-semibold">
                <a class="nav-link active" aria-current="page" href="../Reservation.html">Reservation</a>
            </li>
        </ul>
    </div>
    <div class="footer_R d-flex flex-column row-gap-3" >
        <h3 class="fs-5" style="color: #1E94B1;">Contact Us</h3>
        <div class="d-flex align-items-center p-2 column-gap-2" style="height: 22px;">
            <img src="./assets/Icons/location_on_FILL1_wght300_GRAD0_opsz48.svg" style="color: #1E94B1; width: 18px;"/>
            <p class="m-0">Cancun, Quintana Roo, Mexico</p>
        </div>
    
        <div class="d-flex align-items-center p-2 column-gap-2" style="height: 22px;">
            <img src="./assets/Icons/mail_FILL1_wght300_GRAD0_opsz48.svg" style="color: #1E94B1; width: 18px;"/>
            <p class="m-0">palmbreakinternational@gmail.com</p>
        </div>
    
    </div>
        
    `);
    
    footer.append(footerFragment);
}

Footer();
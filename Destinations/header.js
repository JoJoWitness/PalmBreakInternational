function Header()  {
    console.log("Header");

    const header = document.querySelector('#header');
    const range = document.createRange();
    range.selectNode(header);

    const headerFragment = range.createContextualFragment(`
        <div style="width: 90px;"> 
            <img src="./assets/UI/logo-PBI.png"  style="width: 100%;" alt="Logo">
        </div>

        <nav class="navbar navbar-expand-lg row-gap-5 " style="background-color: #fcfcfc ; width: 70%;"> 
            <div class="container-fluid row-gap-5 justify-content-end">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav row-gap-5 d-flex justify-content-evenly" style="width: 100%;">
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../About-Us.html">About Us</a>
                    </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../Packages.html">Packages</a>
                    </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../Destination.html">Destinations</a>
                        </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../Activities.html">Activities</a>
                    </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../ContactUs.html">Contact Us</a>
                        </li>
                    <li class="nav-item fs-6 fw-bolder">
                        <a class="nav-link active" aria-current="page" href="../Reservation.html">Reservation</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    `);

    header.append(headerFragment);
}

Header();
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo */}
                    <div className="logo-wrapper">
                        <a className="logo" href="/">
                            {" "}
                            {/* <img src="img/Logo.png" className="logo-img" alt="" />{" "} */}
                            <span style={{
                                fontSize: "larger" ,
                                textAlign: "center",
                                display:"block",
                               textShadow:"2px 2px 5px #aa8453"
                            }} >ZnZ
                                <br />
                                Travel & Stays
                            </span>
                        </a>
                        {/* <a class="logo" href="index.html"> <h2>THE CAPPA <span>Luxury Hotel</span></h2> </a> */}
                    </div>
                    {/* Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {" "}
                        <span className="navbar-toggler-icon">
                            <i className="ti-menu" />
                        </span>{" "}
                    </button>
                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                {" "}
                                {/* <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
             
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home <i className="ti-angle-down" />
            </a> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link " href="/packageform">
                                    Packages
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
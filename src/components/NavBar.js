const NavBarComponent = () => {
    
    return (
        <nav className="navbar navbar-expand bg-dark over-particles">
                    {/* navbar-expand ensures the navbar is always expanded, no matter the viewport size */}
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="./home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="./resume">Resume</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="./my-library">My Library</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="https://github.com/21holden21/Personal-Website-Code.git">Website Code</a>
                            </li>
                        </ul>
                    </div>

                </nav>
        );
};

export default NavBarComponent;
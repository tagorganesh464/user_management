return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupport
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link className="nav-link" to="/users">Users</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/removed-users">RemovedUsers</Link>
    </li>
    </ul>
    </div>
    </nav>
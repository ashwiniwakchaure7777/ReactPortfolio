function Navigation(){
    return<nav>
        <a href="#" className="logo">
            <img src="/images/logo.png" alt="logo"></img>
        </a>

        <ul className="navlist"> 
            <li><a href="">About</a></li>
            <li><a href="">Membership</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact</a></li>
        </ul>

        <div className="right-content">
            <a href="#" className="nav-btn">Sign In</a>
            <div className="bx bx-menu" id="menu-icon"></div>
        </div>
    </nav>
}

export default Navigation;
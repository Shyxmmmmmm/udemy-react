function Header() {
    return (
        <div className="main">
            <div className="one">
                <h1 className="one1">Udemy</h1>
            </div>

            <div className="two">
                <i className="fa-solid fa-magnifying-glass" style={{color: '#181818'}}></i>
                <input type="text" placeholder="Search for anythong here.Tech,Business,Art ..."/>
            </div>

            <div className="three">
                <p>Courses</p>
                <div className="three_1">
                    My Learning
                    <p className="three_1-1">You didn't purchase anything yet</p>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{color: '#202124'}}></i>
                <i className="fa-solid fa-bell" style={{color: '#161616'}}></i>
                <i className="fa-solid fa-user" style={{color: '#171717'}}></i>

            </div>

            <div className="menubar">
                <i className="fa-solid fa-bars" style={{color: 'rgb(32, 32, 32)'}} ></i>
            </div>
        </div>
    )
}

export default Header
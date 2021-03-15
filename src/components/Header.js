

function Header() {
    return (
        <div className="navBar">
            <div className="navBar__burger">
                <p>|||</p>
            </div>
            <ul>
                <li>
                    <a href="#hakkımda" role="button" >
                        <span>H</span>
                        <span className="hidden">akkımda</span>
                    </a>
                </li>
                <li>
                    <a href="#projeler" role="button">
                        <span>P</span>
                        <span className="hidden">rojeler</span>
                    </a>
                </li>
                <li>
                    <a href="#cv" role="button">
                        <span>C</span>
                        <span className="hidden">V</span>
                    </a>
                </li>
                <li>
                    <a href="#iletisim" role="button">
                        <span>İ</span>
                        <span className="hidden">letişim</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header
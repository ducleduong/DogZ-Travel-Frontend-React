import {memo, React} from "react"
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faUtensils, faNewspaper, faPen } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function NavBar() {
    
    return (
        <div className="nav-bar">
            <div className="container">
                <div className="web-name">
                    <Link to="/">DOGZ TRAVEL</Link>
                </div>
                <div className="nav-items">
                    <ul className="list-items">
                        <li><Link to="/tours"><FontAwesomeIcon icon={faSuitcase}/> TOURS</Link></li>
                        <li><Link to="/news"><FontAwesomeIcon icon={faNewspaper}/> TIN TỨC</Link></li>
                        <li><Link to="/services"><FontAwesomeIcon icon={faUtensils}/> DỊCH VỤ</Link></li>
                        <li><Link to="/suggestion"><FontAwesomeIcon icon={faPen}/> LIÊN HỆ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(NavBar)
import {Link} from "react-router-dom";
import clasess from "./MainNavigation.module.css";
function MainNavigation(){
    return(
        <header className={clasess.header}>
            <h3 className={clasess.logo}>All Meetups</h3>
            <ul>
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/new-meetup">New Meetups</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
            </ul>
        </header>
    )
}
export default MainNavigation;
import clasess from "./Meetup.module.css";
import Card from "../cards/Card"
function MeetupItem(props){
    return(
        <div>
            <Card>
            <li className={clasess.item}>
                <div className={clasess.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={clasess.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={clasess.actions}>
                    <button>To Favourites</button>
                </div>
            </li>
            </Card>
        </div>
    )

}
export default MeetupItem;
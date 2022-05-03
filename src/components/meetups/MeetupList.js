import Clasess from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
function MeetupList(props){
    return(
        <div>
            <ul className={Clasess.item}>
                {props.meetup.map((meetup)=>{
                    return(
                   <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                   
                   />
                    )
                })}

            </ul>
        </div>
    )

}
export default MeetupList;
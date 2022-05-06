import {useNavigate} from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";


function Newmeetup(){
    const history=useNavigate();
    function MetupHandler(meetupData){
      
        
        fetch("https://react-sample-project-837f7-default-rtdb.firebaseio.com/meetups.json",
        {
            method:"POST",
            body:JSON.stringify(meetupData),
            headers:{
                "Content-Type":"application-json"
            }
        }
        
        
        
        ).then(()=>{
           history("/")
        });

    }
    return(
        <div>
            <h2>Add New Meetup</h2>
            <NewMeetupForm onMeetup={MetupHandler} />
        </div>
    
    )
}
export default Newmeetup;
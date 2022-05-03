import Card from "../cards/Card";
import clasess from "./NewMeetupForm.module.css";
import {useRef} from "react";


function NewMeetupForm(){
    const titileInputRef=useRef();
    const imageRef=useRef();
    const addressRef=useRef();
    const descriptionRef=useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=titileInputRef.current.value;
        const enteredImage=imageRef.current.value;
        const enteredAddress=addressRef.current.value;
        const enteredDescription=descriptionRef.current.value;

        const meetupData={
          title:enteredTitle,
          image:enteredImage,
          address:enteredAddress,
          description:enteredDescription

        };
        console.log(meetupData);
        
    }

    return(
        <div>
            <Card>
            <form className={clasess.form} onSubmit={submitHandler}>
                <div className={clasess.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required ref={titileInputRef}/>

                </div>
                <div className={clasess.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageRef}/>

                </div>
                
                <div className={clasess.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" id="address" required ref={addressRef}/>

                </div>
                
                <div className={clasess.control}>
                    <label htmlFor="Description">Meetup Description</label>
                    <textarea id="Description" required rows="5" ref={descriptionRef}></textarea>

                </div>
                
                <div className={clasess.actions}>
                    <button className={clasess.btn}>Add Meetup</button>
               </div>

            </form>
            </Card>
        </div>
    )

}
export default NewMeetupForm;
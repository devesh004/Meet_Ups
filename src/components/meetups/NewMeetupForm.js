import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm=(props)=>{
    const titleVal=useRef();
    const imageUrl=useRef();
    const addressVal=useRef();
    const descriptionVal=useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredTitle=titleVal.current.value;
        const enteredImageUrl=imageUrl.current.value;
        const enteredAddress=addressVal.current.value;
        const enteredDescription=descriptionVal.current.value;

        const meetUpData={
            title:enteredTitle,
            image:enteredImageUrl,
            address:enteredAddress,
            description:enteredDescription
        }
        props.onAddMeetup(meetUpData);
    }
return (
<Card>
    <form className={classes.form} onSubmit={submitHandler}>
       <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type="text" id='title' required ref={titleVal}/>
       </div>
       <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type="url" id="image" required ref={imageUrl}/>
       </div>
       <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type="text" id="address" required ref={addressVal}/>
       </div>
       <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id="description" required rows='5' ref={descriptionVal}></textarea>
       </div>
       <div className={classes.actions}>
          <button>Add Meetup</button>
       </div>
    </form>
</Card>
);
}

export default NewMeetupForm;
import { useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage(){
    const navigate=useNavigate();
    const addMeetupHandler=(meetupData)=>{
       fetch(
           'https://meetup-8d013-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
       ).then(()=>{
            navigate('/');
       });
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
}
export default NewMeetupPage
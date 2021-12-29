import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import MeetupList from "../components/meetups/MeetupList";
import removeItem from '../utils/removeItem';
function AllMeetupsPage(){
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(true);
  const [loadedMeetups,setLoadedMeetups]=useState([]);

  function removeItemHandler(meetUpId){
    setIsLoading(true);
    removeItem(meetUpId);
    setIsLoading(false);
    setLoadedMeetups((prevMeetups)=>{
      return prevMeetups.filter((meet)=>meet.id!==meetUpId)
    })
  }


  useEffect(()=>{
    setIsLoading(true);
    fetch(
      'https://meetup-8d013-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
      ).then((response)=>{
        return response.json();
      }).then(data=>{
        const meetups=[];
        for(const key in data){
          const meet={
            id:key,
            ...data[key]
          }
          meetups.push(meet);
        }
         setIsLoading(false);
         setLoadedMeetups(meetups);
      })
  },[])
 
  if(isLoading){
    return (
      <section>
      <p>Loading...</p>
    </section>
    )
  }

  
  return <section>
      <h1>All MeetUps</h1>
      <MeetupList meetups={loadedMeetups} removeItem={removeItemHandler} />
  </section>
}
export default AllMeetupsPage
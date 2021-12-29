async function removeItem(meetUpId){
    await fetch(
        `https://meetup-8d013-default-rtdb.asia-southeast1.firebasedatabase.app/meetups/${meetUpId}.json`,
        {
          method:'DELETE'
        }
    )
}

export default removeItem;
import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList'
function FavoritesMeetupPage(){
    const favoriteCtx=useContext(FavoritesContext);
    const totalFav=favoriteCtx.favorites;
    let content;
    if(favoriteCtx.totalFavorites===0){
        content=<p>You got no favorite yet. lets GO and add some :)</p>
    }else{
        content=<MeetupList meetups={totalFav}>
        </MeetupList>
    }
    return <section>
        <h1>My Favorites</h1>
        { content}
    </section>
}
export default FavoritesMeetupPage;
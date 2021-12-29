import { useContext } from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props){
   const favoriteCtx= useContext(FavoritesContext);
   const itemIsfav=favoriteCtx.itemIsFavorite(props.id);
   const toggleFavoriteStatusHandler=()=>{
        if(itemIsfav){
            favoriteCtx.removeFavorite(props.id);
        }
        else{
            favoriteCtx.addFavorite({
               id:props.id,
               title:props.title,
               description:props.description,
               address:props.address,
               image:props.image
            });
        }
   }

   const deleteItem=()=>{
       if(itemIsfav){
          favoriteCtx.removeFavorite(props.id);
          favoriteCtx.deleteFav(props.id);
       }else{
          return props.removeItem(props.id);
       }
   }
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt=""/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={deleteItem}>Delete</button>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsfav ? 'Remove from Favorite' : 'Add to Favorite'}</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;
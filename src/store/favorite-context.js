import { createContext ,useState} from "react";
import removeItem from "../utils/removeItem";
const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(newFavoriteMeetup)=>{},
    removeFavorite:(meetUpId)=>{},
    itemIsfavorite:(meetUpId)=>{}
});

export const FavoriteContextProvider=(props)=>{ 

    const [userFavorite,setUserFavorite]=useState([]);
    const addFavoriteHandler=(newFavoriteMeetup)=>{
          setUserFavorite((prevUserFavorite)=>{
               return prevUserFavorite.concat(newFavoriteMeetup);
          })
    }
    const removeFavoriteHandler=(meetUpId)=>{
        setUserFavorite((preUserFavorite)=>{
            return preUserFavorite.filter((favMeet)=>favMeet.id!==meetUpId)
        })
    } 
    const itemIsFavoriteHandler=(meetUpId)=>{
        return userFavorite.some((meetUp)=>meetUp.id===meetUpId)
    } 

    const removeItemHandler=(meetUpId)=>{
        removeItem(meetUpId);
        setUserFavorite((preUserFavorite)=>{
            return preUserFavorite.filter((favMeet)=>favMeet.id!==meetUpId)
        })
    }

    const context={
        favorites:userFavorite,
        totalFavorites:userFavorite.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler,
        deleteFav:removeItemHandler
    };
    return <FavoritesContext.Provider value={context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;
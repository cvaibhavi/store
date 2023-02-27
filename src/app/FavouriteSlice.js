import {createSlice} from '@reduxjs/toolkit';
import toast from 'react-hot-toast'

const initialState = {
    favState: false,
    favItems: localStorage.getItem("favourite") ? JSON.parse
    (localStorage.getItem("favourite")) : [], //Let Suppose DataBase
    isFavItemUpdated: false,  
};

const FavouriteSlice = createSlice({
    initialState,
    name: "favourite",
    reducers: {
        setOpenFav: (state,action) => {
            state.favState = action.payload.favState; 
        },
        setCloseFav: (state,action) => {
            state.favState = action.payload.favState;
        },    
        setAddToFav: (state,action) => {
            const itemIndex = state.favItems.findIndex((item) => 
            item.id === action.payload.id);
            
            const temp = {...action.payload,alreadyExistsInFavItem: true};
             state.favItems.push(temp);
             localStorage.setItem("favourite",JSON.stringify(state.favItems));
             toast.success(`${action.payload.title} Added to favorites`);    

        },
        setIsFavChanged: (state,action)  => {
             state.isFavItemUpdated = !state.isFavItemUpdated;
        },
        setRemoveFromFav: (state,action) =>{
            const removeItem = state.favItems.filter((item) => 
                item.id !== action.payload.id);

                state.favItems = removeItem;
                localStorage.setItem("favourite",JSON.stringify(state.favItems));
                toast.success(`${action.payload.title} Removed from favourites`);
        },
        setClearFavItems: (state, action) => {
            state.favItems = [];
            toast.success(`Cleared Favourite list`);
            localStorage.setItem("favourite", JSON.stringify(state.favItems));
        }, 
    },
    
})

export const {setOpenFav,setCloseFav,setClearFavItems,setAddToFav,setRemoveFromFav,setChooseFav,setIsFavChanged} = FavouriteSlice.actions;

export const selectFavState = (state) => state.favourite.favState;
export const selectFavItems = (state) => state.favourite.favItems;
export const selectIsFavItemUpdated = (state) => state.favourite.isFavItemUpdated;

export default FavouriteSlice.reducer;
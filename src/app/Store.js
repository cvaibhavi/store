import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FavouriteSlice from "./FavouriteSlice";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        favourite: FavouriteSlice,
    }
});

export default Store;
import React from 'react'
import { useDispatch } from 'react-redux';
import { setRemoveFromFav ,setIsFavChanged} from '../../app/FavouriteSlice';

const FavItem = ({ item: { id, title, text, img, color, shadow, price } }) => {

    const dispatch = useDispatch();

    const onRemove = () => {
        dispatch(setRemoveFromFav({ id, title, text, img, color, shadow, price }));
        dispatch(setIsFavChanged());
    }

  return (
    <>
    <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className="w-36 h-32 object-fill lg:w-28 lg:h-24" />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
          </div>
        </div> 
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <button type="button" className="bg-theme-cart rounded text-slate-100 p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default FavItem

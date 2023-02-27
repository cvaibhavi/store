import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { selectFavItems ,selectIsFavItemUpdated} from '../app/FavouriteSlice';
import Item from './utils/Item'
import Titles from './utils/Titles'


const Menu = ({ ifExists, endpoint: { title, items } }) => {
  
  let favItems = useSelector(selectFavItems);
  const isFavItemUpdated = useSelector(selectIsFavItemUpdated);
  console.log(favItems);

  useEffect(() => {
    console.log("MENU:15 ",favItems);
  }, [isFavItemUpdated,favItems])

  return (
    <>
       <div className='food-container'>
        <Titles title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} isFav= {favItems.find(x => x.id === item.id)} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Menu

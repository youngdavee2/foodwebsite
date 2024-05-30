import React, { useState } from 'react';
import { Images } from './ImageslidesPhotos';

const Search = (props) => {
  const [search, setSearch] = useState('');
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
  };

  return (
    <div className={`bg-${props.lightMode ? 'black' : 'white'} h-full flex flex-col items-center justify-center`}>
      <img src="https://popai-file.s3.ap-southeast-1.amazonaws.com/dalle3/f1e09610-e6d6-47d4-82b9-206bcf7a4417/bd40d0eb-f7bb-42a9-ab99-c3a1bb8d5a85/tplImg7a89da86cecb41b787467ff753de686d" alt="" className='h-[200px] mt-6 rounded-lg'/>
      <div className='flex  flex-col items-center gap-2 mt-4'>
        <h1 className='text-3xl text-orange-600 font-bold'>Search for your favorite foods...</h1>
        <input
          type='text'
          placeholder='Search...'
          onChange={handleSearchChange}
          className='border-2 p-2 rounded-full lg:w-[400px] w-[200px]'
        />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 items-center justify-center mt-4'>
        {['Breakfast', 'Dinner', 'Meal', 'Shakes', 'Smoothies', 'Appetizers'].map((category, index) => (
          <button
            key={index}
            onClick={() => handleSearch(category)}
            className={`p-2 border-2 rounded-lg ${props.lightMode ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4'>
        {Images.filter(
          (foodItem) =>
            search === '' ||
            (foodItem.text && foodItem.text.toLowerCase().includes(search)) ||
            (foodItem.desc && foodItem.desc.toLowerCase().includes(search))
        ).map((foodItem) => (
          <div className='relative p-3 cursor-pointer hover:scale-105 transition duration-500 lg:h-full w-full' key={foodItem.id}>
            <img src={foodItem.url} alt='' className='w-full lg:h-[300px] object-cover rounded-lg' />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col  gap-2 items-center justify-center'>
              <span className='text-white lg:text-3xl font-semibold'>{foodItem.text}</span>
              <button onClick={()=>{
                props.setCartNo(props.cartNo + 1);
                  props.setSingleProd(foodItem)
                  props.setCart([...props.cart, foodItem])
                  props.setCartNo(props.cartNo + 1)
              }}
          className='text-white bg-orange-600 rounded-lg hover:bg-white hover:text-orange-600 hover:border-2 hover:border-orange-600 p-2 text-xl font-semibold'>{`${props.cartNo ? 'Done' : 'add to cart'}`}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

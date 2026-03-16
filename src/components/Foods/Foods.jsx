import React, { use, useState } from 'react';
import Food from './Food'
const Foods = ({data}) => {
    const [cart,setCart]=useState([]);
    const foods=use(data);
    const initialFoodData=foods.meals;

    const handleAddCart=(foodData)=>{
        const cartData=[...cart,foodData]
        setCart(cartData);
        
    }
    console.log(cart);
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 self-center lg:grid-cols-3 px-5 mt-4'>
            {
               initialFoodData && initialFoodData.map(data=><Food 
                key={data.idMeal} 
                handleAddCart={handleAddCart}
                data={data}/>)
            }
        </div>
    );
};

export default Foods;
import React from 'react';
import Food from './Food'
const Foods = ({data}) => {
    const initialFoodData=data?.meals;
    console.log(initialFoodData);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 self-center lg:grid-cols-3 px-5 mt-4'>
            {
               initialFoodData && initialFoodData.map(data=><Food key={data.idMeal} data={data}/>)
            }
        </div>
    );
};

export default Foods;
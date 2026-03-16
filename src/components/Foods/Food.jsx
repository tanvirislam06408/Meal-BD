import React from 'react';

const Food = ({data,handleAddCart}) => {
    const {strMeal,strArea,strInstructions,strCategory}=data;

    let sortString=strInstructions.slice(0 , 100);
    
    return (
        <div className="max-w-lg p-4 shadow-md bg-amber-900 text-gray-100 rounded-2xl">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100">Category : {strCategory}</a>
		</div>
		<a rel="noopener noreferrer" href="#">{strArea}</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={data.strMealThumb} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
			<div className="flex items-center text-xl">
				<span>{strMeal}</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-violet-400"></h3>
			</a>
			<p className="leading-snug text-gray-400">{sortString}...</p>
            <div className='flex justify-between'>
                <button className='cursor-pointer btn btn-outline btn-accent'>Read More</button>
                <button onClick={()=>handleAddCart(data)} className='btn btn-outline btn-accent'>Order</button>
            </div>
		</div>
	</div>
</div>
    );
};

export default Food;
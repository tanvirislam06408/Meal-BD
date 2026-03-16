import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[60vh]'>
           <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default Loading;
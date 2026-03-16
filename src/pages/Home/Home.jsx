import React, { Suspense } from 'react';
import Foods from '../../components/Foods/Foods';
import Loading from '../../components/Loading/Loading';
const data = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res => res.json());
const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h1 className='text-center font-bold text-2xl text-gray-500 mt-10'>Order Foods You Love</h1>
                <Suspense fallback={<Loading />}>
                    {data && <Foods data={data} />}
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
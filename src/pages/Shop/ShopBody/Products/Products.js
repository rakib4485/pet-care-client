import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import Loader from '../../../../components/Loader/Loader';

const Products = ({ categoryId }) => {

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['product', categoryId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?category=${categoryId}`);
            const data = await res.json();
            return data;
        }
    })

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = [...products].reverse().slice(firstIndex, lastIndex);
    const nPage = Math.ceil(products.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id);
    }

    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
    }


    if(isLoading){
        return <Loader/>
    }
    // console.log('hello',products);
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    records.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
            <div className='text-center my-16'>
                <div className="join mx-auto">
                    <button className="join-item btn hover:bg-primary hover:text-white duration-500 transition-all" onClick={prevPage}>Prev</button>
                    {
                        numbers.map((n, i) => (
                            <button className={`join-item btn ${currentPage === n ? 'btn-active bg-primary text-white' : ''}`} key={i} onClick={() => changeCurrentPage(n)}>{n}</button>
                        ))
                    }
                    <button className="join-item btn hover:bg-primary hover:text-white duration-500 transition-all" onClick={nextPage}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
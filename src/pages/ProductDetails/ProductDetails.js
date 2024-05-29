import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetailsBanner from './ProductDetailsBanner/ProductDetailsBanner';
import ProductOrder from './ProductOrder/ProductOrder';
import RelatedProduct from './RelatedProduct/RelatedProduct';

const ProductDetails = () => {
    const product = useLoaderData();
    const {name} = product;
    console.log(product);
    return (
        <div>
            <ProductDetailsBanner name={name}/>
            <ProductOrder product={product}/>
            <RelatedProduct categoryId={product.categoryId}/>
        </div>
    );
};

export default ProductDetails;
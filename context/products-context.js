import React, { createContext, useState } from 'react';

import { products as SHOP_PRODUCTS } from '../services/products';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products] = useState(SHOP_PRODUCTS);

    return (
        <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
    );
};

export default ProductContextProvider;

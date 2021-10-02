import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    return [products];
}
export default useProducts;
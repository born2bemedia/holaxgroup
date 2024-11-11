"use client";
import React, { useEffect, useState } from "react";
import useProductStore from "@/stores/productsStore";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
import OrderIcon from "@/icons/OrderIcon";
import ReactMarkdown from "react-markdown";
import OrderButton from "@/components/OrderButton";

const ProductRow = ({ category }) => {
  const [productsArray, setProductsArray] = useState([]);
  const { fetchProducts, getProductByCategory } = useProductStore.getState();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      await fetchProducts();
      const products = getProductByCategory(category);
      setProductsArray(products);
      console.log("productsArray", products);
    };

    fetchAndSetProducts();

    console.log(productsArray);
  }, []);

  return (
    <div className="row">
      {productsArray.map((product, index) => (
        <div className="product" key={index}>
          <div className="top">
            <h3>
              <span>{String(index + 1).padStart(2, "0")}.</span>
              {product.title}
            </h3>
            <div>
              <ReactMarkdown>{product.description}</ReactMarkdown>
            </div>
          </div>
          <div className="bottom">
            <div className="price">
              <span>{product.for_request && "From "}</span> €{product.price}{" "}
              <span>{product.suffix && product.suffix}</span>
            </div>
            {product.for_request ? (
              <OrderButton service={product.title} type="service" />
            ) : (
              <AddToCartButton product={product} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductRow;

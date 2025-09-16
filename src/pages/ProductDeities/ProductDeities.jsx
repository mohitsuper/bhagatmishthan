import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductdeatilsBanner from "../../Components/product-deatils/ProductdeatilsBanner";
import ProductDeailesDes from "./ProductDeailesDes";
import ProductRelated from "./ProductRelated";
import { BestSellerProductData } from "../../data/product/BestSellingProduct";

export default function ProductDeities() {
  const { slug } = useParams();
  console.log(slug);
  const [SingleProductInfo, setSingleProductInfo] = useState(null);
  const [AllProductInfo, setAllProductInfo] = useState(null);
  useEffect(() => {
    if (BestSellerProductData) {
      const singleData = BestSellerProductData?.find(
        (item) => decodeURI(item.title).toLowerCase() === slug
      );
      setSingleProductInfo(singleData);
      setAllProductInfo(BestSellerProductData);
    } else {
      setSingleProductInfo([]);
    }
  }, [slug]);



  return (SingleProductInfo !== null) ? (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <ProductdeatilsBanner SingleProductInfo={SingleProductInfo}/>
      <ProductDeailesDes SingleProductInfo={SingleProductInfo}/>
      <ProductRelated/>
    </div>
  ) : (
    <div className="bg-white h-[80v]">NO DATA FOUND</div>
  );
}

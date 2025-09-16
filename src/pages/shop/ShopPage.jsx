import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopData } from "../../data/shop/ShopData";
import ProductDeailesDes from "../ProductDeities/ProductDeailesDes";
import ProductdeatilsBanner from "../../Components/product-deatils/ProductdeatilsBanner";
import ShopFilter from "../../Components/Shop/ShopFilter";

export default function ShopPage() {
  const [singleData, setSingleData] = useState([]);
  const localtion = useLocation();
  const slug = localtion.pathname.split("/")[2];
  useEffect(() => {
    const data = ShopData.find((item) => item.key === slug);
    setSingleData(data?.data || []);
  }, [slug]);
  return (
    <div className="">
      <ProductdeatilsBanner/>
      <ShopFilter/>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 md:px-10 px-5 ">
        {singleData.length <0 ? "data not a found":
          singleData.map((data, index) => {
            return (
              <Link to={`/product/${data.name.toLowerCase()}`} key={index}>
                <div className="bg-white rounded-xl shadow-md p-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={data?.image}
                    alt={data?.name}   loading="lazy" 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-800 truncate">
                      {data?.name}
                    </h5>
                    <p className="mt-2 text-gray-700">
                      <span className="text-xl font-bold text-green-600">
                        ₹ {data?.price}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        {/* ({data?.} Pcs.) */}
                      </span>
                    </p>
                    <button className="bg-indigo-500 px-5 text-white mt-4 py-2 rounded-md">
                      Add To Card
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

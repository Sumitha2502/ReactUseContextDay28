import React, { useState } from "react";

export const ProductContext = React.createContext(null);

function DataContext({ children }) {
  const [user, setUser] = useState({

        "products": [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "images":[
                "https://www.movilzona.es/app/uploads-movilzona.es/2018/06/iphon-9-1.jpg" 
                ]
               
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "images": [
                    "https://cdn.dxomark.com/wp-content/uploads/2018/07/apple_iphonex.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "images": [
                    "https://i.pinimg.com/736x/a3/b7/5f/a3b75ff6f4f4fb26f3128045284c1f90.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "images": [
                    "https://images.fonearena.com/blog/wp-content/uploads/2021/04/OPPO-F19-1-1024x1015.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "images": [
                    "https://www.rayarena.com/wp-content/uploads/2019/03/HUAWEI-P30-Pro-1024x931.jpg"
                ]
            }
        ]
    
  });

  return (
    <ProductContext.Provider value={{ user, setUser }}>
      {children}
    </ProductContext.Provider>
  );
}

export default DataContext;

import ProductCard from "./ProductCard"
import { Fragment } from "react"
import { useState, useEffect } from "react";
import { getProducts } from "../utility/api";

function ProductContainer() {
  
  const productData = [
    { 
      id: 1,
      name:"Women's Hyperfreak 4/3+ Chest Zip Wetsuit", 
      retailer:"Cleanline Surf Shop",
      url:"https://www.cleanlinesurf.com/o-neill-women-s-hyperfreak-4-3-chest-zip-wetsuit.html",
      brand:"O'neill",
      price:"349.95",
      size:"2,4,6,10",
      image:"https://media.cleanlinesurf.com/mf_webp/jpg/media/catalog/product/cache/459e6ccfe49103cffc8511f1b342e930/5/3/5348_a00_f_web_1_1.webp"
    },
    { 
      id: 2,
      name: "3/2mm Women's Sisstrevolution 7 SEAS Back Zip Fullsuit", 
      retailer:"Wetsuit Wearhouse",
      url:"https://www.wetsuitwearhouse.com/collections/womens-fullsuit-wetsuits/products/gn07l32f",
      brand:"Sisstrevolution",
      price:"130.00",
      size:"2,4,6,8",
      image:"https://cdn.shopify.com/s/files/1/0613/4939/6660/products/32mm-womens-sisstr-7-seas-back-zip-fullsuit-phb-pink-front_large.jpg?v=1679060324"
    }, 
    { 
      id: 3,
      name: "Women's Furnace 5/4 Hooded Chest Zip Wetsuit", 
      retailer:"Cleanline Surf Shop",
      url:"https://www.cleanlinesurf.com/billabong-women-s-furnace-5-4-hooded-chest-zip-wetsuit-abjw200104.html",
      brand:"Billabong",
      price:"349.95",
      size:"2,4,6,10,14,16",
      image:"https://media.cleanlinesurf.com/mf_webp/jpg/media/catalog/product/cache/683125cc88b8b3e3e4e40fe5c2c31b82/b/i/billabong-wetsuit-abjw200104kvj6-wmns-furnace-5-4-hdd-cz-midnight-trails-01.webp"
    },
    { 
      id: 4,
      name: "Womens Dawn Patrol Performance 4/3mm Chest Zip Wetsuit", 
      retailer:"Watersports Outlet",
      url:"https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-performance-43mm-chest-zip-wetsuit-wsmybw-navy-p-42718.html",
      brand:"Rip Curl",
      price:"255.95",
      size:"2,4,8,10",
      image:"https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20Rip%20Curl%20Womens%20Dawn%20Patrol%20Performance%2043mm%20Chest%20Zip%20Wetsuit%20WSMYBW%20%20Navy%20Main.700x700.jpg"
    },
    { 
      id: 5,
      name: "Women's Furnace 5/4 Hooded Chest Zip Wetsuit", 
      retailer:"Cleanline Surf Shop",
      url:"https://www.cleanlinesurf.com/billabong-women-s-furnace-5-4-hooded-chest-zip-wetsuit-abjw200104.html",
      brand:"Billabong",
      price:"349.95",
      size:"2,4,6,10,14,16",
      image:"https://media.cleanlinesurf.com/mf_webp/jpg/media/catalog/product/cache/683125cc88b8b3e3e4e40fe5c2c31b82/b/i/billabong-wetsuit-abjw200104kvj6-wmns-furnace-5-4-hdd-cz-midnight-trails-01.webp"
    },
    { 
      id: 6,
      name: "Womens Dawn Patrol Performance 4/3mm Chest Zip Wetsuit", 
      retailer:"Watersports Outlet",
      url:"https://www.watersportsoutlet.com/2023-rip-curl-womens-dawn-patrol-performance-43mm-chest-zip-wetsuit-wsmybw-navy-p-42718.html",
      brand:"Rip Curl",
      price:"255.95",
      size:"2,4,8,10",
      image:"https://cdn.watersportsoutlet.com/images/1x1/thumbs/2023%20Rip%20Curl%20Womens%20Dawn%20Patrol%20Performance%2043mm%20Chest%20Zip%20Wetsuit%20WSMYBW%20%20Navy%20Main.700x700.jpg"
    },
    { 
      id: 7,
      name:"Women's Hyperfreak 4/3+ Chest Zip Wetsuit", 
      retailer:"Cleanline Surf Shop",
      url:"https://www.cleanlinesurf.com/o-neill-women-s-hyperfreak-4-3-chest-zip-wetsuit.html",
      brand:"O'neill",
      price:"349.95",
      size:"2,4,6,10",
      image:"https://media.cleanlinesurf.com/mf_webp/jpg/media/catalog/product/cache/459e6ccfe49103cffc8511f1b342e930/5/3/5348_a00_f_web_1_1.webp"
    },
    { 
      id: 8,
      name: "3/2mm Women's Sisstrevolution 7 SEAS Back Zip Fullsuit", 
      retailer:"Wetsuit Wearhouse",
      url:"https://www.wetsuitwearhouse.com/collections/womens-fullsuit-wetsuits/products/gn07l32f",
      brand:"Sisstrevolution",
      price:"130.00",
      size:"2,4,6,8",
      image:"https://cdn.shopify.com/s/files/1/0613/4939/6660/products/32mm-womens-sisstr-7-seas-back-zip-fullsuit-phb-pink-front_large.jpg?v=1679060324"
    }
    
  ]
  // const [data, setData] = useState()
  // useEffect(() => {
  //   getProducts()
  //     .then(data => setData(data))
  //     .catch((error) => console.log(error))
  // }, [])
  
  // if (!data) {
  //   return <>Loading...</>
  // }
  
  return (
    <Fragment>
      {productData.map((element) => {
        return (
          <ProductCard
            id={element.id}
            name={element.name}
            retailer={element.retailer}
            url={element.url}
            brand={element.brand}
            price={element.price}
            size={element.size}
            image={element.image}
          ></ProductCard>
        )
      })}
    </Fragment>
  )
}

export default ProductContainer
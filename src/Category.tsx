import React from 'react'

import { Item } from './Item'

export const Category = (props) => {
    const macs = [
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661"
            name="M1 Macbook Air" 
            cost="134,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665"
            name="M2 Macbook Air" 
            cost="164,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_JP?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1666130315234" 
            name="Macbook Pro 13inch" 
            cost="178,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229"
            name="Macbook Pro 14inch"
            cost="288,800円~"
        />,
        <Item
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673202"
            name="Macbook Pro 16inch"
            cost="348,800円~"
        />,
        <Item
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1617492405000"
            name="iMac"
            cost="174,800円~"
        />
    ]
    const iphones = [
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256"
            name="iPhone 14 Pro" 
            cost="149,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-compare-iphone-14-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995969"
            name="iPhone14"
            cost="119,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-compare-iphone-13-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995963"
            name="iPhone 13" 
            cost="92,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-compare-iphone-se-202209?wid=364&hei=508&fmt=jpeg&qlt=90&.v=1660759995953"
            name="iPhone SE"
            cost="62,800円~"
        />
    ]
    const ipads = [
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-comp-pro-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153112"
            name="iPad Pro"
            cost="124,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-comp-air-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411153129"
            name="iPad Air"
            cost="92,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-comp-10thgen-202210?wid=338&hei=386&fmt=jpeg&qlt=90&.v=1664411152951"
            name="iPad"
            cost="68,800円~" 
        />
    ]
    const watches = [
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/watch-compare-ultra-202209_GEO_JP?wid=520&hei=616&fmt=jpeg&qlt=90&.v=1678744773372"
            name="Apple Watch Ultra" 
            cost="124,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/watch-compare-se-202209_GEO_JP?wid=520&hei=616&fmt=jpeg&qlt=90&.v=1661557192387"
            name="Apple Watch SE"
            cost="37,800円~" 
        />,
        <Item 
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/watch-compare-s8-202209_GEO_JP?wid=520&hei=616&fmt=jpeg&qlt=90&.v=1661557705269"
            name="Apple Watch Series 8"
            cost="59,800円~" 
        />
    ]
    const earphones = [
        <Item
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/airpods-compare-airpods-3-202209?wid=420&hei=500&fmt=jpeg&qlt=90&.v=1660804052546"
            name="AirPods"
            cost="26,800円~"
        />,
        <Item
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/airpods-compare-airpods-pro-202209?wid=420&hei=500&fmt=jpeg&qlt=90&.v=1660804051525"
            name="AirPods Pro"
            cost="39,800円~"
        />,
        <Item
            imgURL="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/airpods-compare-airpods-max-202209?wid=420&hei=500&fmt=jpeg&qlt=90&.v=1660804053742"
            name="AirPods Max"
            cost="84,800円~"
        />
    ]

    const renderItems = (category: string) => {
        switch(category){
            case "Mac":
                return macs.map(ele => ele)
            case "iPhone":
                return iphones.map(ele => ele)
            case "iPad":
                return ipads.map(ele => ele)
            case "Watch":
                return watches.map(ele => ele)
            case "Earphone":
                return earphones.map(ele => ele)
            default:
                return
        }
    }
    return(
        <>
            <h2>{props.category}</h2>
            <div className='category'>{renderItems(props.category)}</div>
        </>
    )
}
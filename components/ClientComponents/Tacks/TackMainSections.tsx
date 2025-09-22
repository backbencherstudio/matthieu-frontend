import React from 'react'
import TrackProductList from './TrackProductList';

export default function TackMainSections() {
    return (
        <>
            <div className='lg:my-12 my-8'>
                <TrackProductList items={bridleasItems} title="Bridles" />
            </div>
            <div className='lg:my-12 my-8'>
                <TrackProductList items={reinsItems} title="Reins" />
            </div>
            <div className='lg:my-12 my-8'>
                <TrackProductList items={girthItems} title="girths" />
            </div>
            <div className='lg:my-12 my-8'>
                <TrackProductList items={breatsPlatesItems} title="BREASTPLATES" />
            </div>
        </>
    )
}


const bridleasItems = [
    {
        id: 1,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 2,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 3,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 4,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 5,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 6,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 7,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 8,
        name: "Anatomical Double Noseband Bridle",
        category: "Bridles",
        image: "/home/bridles.png", // Replace with actual image path
        price: "$370.00",
    },


];
const reinsItems = [
    {
        id: 1,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack1.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 2,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack2.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 3,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack3.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 4,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack4.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 5,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack1.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 6,
        name: "Reins with handles",
        category: "Reins",
       image: "/images/tacks/tack2.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 7,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack3.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 8,
        name: "Reins with handles",
        category: "Reins",
        image: "/images/tacks/tack4.png", // Replace with actual image path
        price: "$370.00",
    },


];
const girthItems = [
    {
        id: 1,
        name: "Short dressage girth",
        category: "Girths",
        image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 2,
        name: "Short dressage girth",
        category: "Girths",
        image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 3,
        name: "Short dressage girth",
        category: "Girths",
        image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 4,
        name: "Short dressage girth",
        category: "Girths",
       image: "/home/grith.png",// Replace with actual image path
        price: "$370.00",
    },
    {
        id: 5,
        name: "Short dressage girth",
        category: "Girths",
       image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 6,
        name: "Short dressage girth",
        category: "Girths",
       image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 7,
        name: "Short dressage girth",
        category: "Girths",
        image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 8,
        name: "Short dressage girth",
        category: "Girths",
        image: "/home/grith.png", // Replace with actual image path
        price: "$370.00",
    },


];
const breatsPlatesItems = [
    {
        id: 1,
        name: "Short dressage girth",
        category: "Girths",
        image: "/images/tacks/breastPlates.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 2,
        name: "Short dressage girth",
        category: "Girths",
        image: "/images/tacks/breastPlates2.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 3,
        name: "Short dressage girth",
        category: "Girths",
         image: "/images/tacks/breastPlates3.png", // Replace with actual image path
        price: "$370.00",
    },
    {
        id: 4,
        name: "Short dressage girth",
        category: "Girths",
       image: "/images/tacks/breastPlates4.png",// Replace with actual image path
        price: "$370.00",
    },
];
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

"use client";

import React, { useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import CartsIcon from "@/components/Icons/CartsIcon";
import CloseIcon from "@/components/Icons/CloseIcon";
import CartsDetails from "./CartsDetails";

export default function CartsProducts() {
    const [cartOpen, setCartOpen] = useState(false);

    const handleCart = () => setCartOpen((prev) => !prev);

    return (
        <Drawer direction="right" >
            <DrawerTrigger className="cursor-pointer"> <CartsIcon /></DrawerTrigger>
            <DrawerContent className="p-8  lg:min-w-[600px] ">
                <DrawerHeader className="flex flex-row justify-between items-center p-0 border border-red-500">
                    <DrawerTitle className="text-[#1F274B] lg:text-[32px] md:text-[28px] text-2xl font-bold leading-[100%]  ">Your Cart</DrawerTitle>
                    <DrawerClose className="cursor-pointer">
                        <CloseIcon />
                    </DrawerClose>
                </DrawerHeader>
                <div className="md:mt-8 mt-4 h-full ">
                    <div className="md:h-full h-[92vh] overflow-y-auto custom-scroll">
                        <CartsDetails />
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

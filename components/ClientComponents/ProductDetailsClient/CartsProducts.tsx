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
            <DrawerContent className="p-8  lg:min-w-[600px] md:min-w-[500px] min-w-[90%]">
                <DrawerHeader className="flex flex-row justify-between items-center p-0 ">
                    <DrawerTitle className="text-[#1F274B] lg:text-[32px] md:text-[28px] text-2xl font-bold leading-[100%]  ">Your Cart</DrawerTitle>
                    <DrawerClose className="cursor-pointer">
                        <CloseIcon/>
                    </DrawerClose>
                </DrawerHeader>
                <div className="mt-8">
                    <CartsDetails/>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

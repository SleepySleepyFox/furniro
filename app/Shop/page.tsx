"use client"
import React, { useEffect, useState } from "react"
import ProductSection from "../components/ProductSection"
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
export default function page() {
    // Store is set to 8 now and re-renders ProductSection 
    const itemsPerPage = useSelector((state: RootState) => state.filter.itemsPerPage);


    const [slice, setSlice] = useState(16)
    useEffect(() => {
        setSlice(itemsPerPage)

        console.log(itemsPerPage)
    }, [itemsPerPage])


    return (
        <div>
            <ProductSection isOnHero={false} sliceTo={slice} />
        </div>
    )
} 

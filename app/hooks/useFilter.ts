import { ItemsPerPage, SortBy } from "@/lib/features/filters/filterSlices";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { error } from "console";
import { useState } from "react";
import { FilterAction } from "@/lib/types/FilterTypes";


export function useFilter(){
    const [visible, setVisible] = useState(false)  
    const dispatch = useAppDispatch();
    const [activeOption, setActiveOption] = useState<string | number>()
    
    // Selectors
    const itemsPerPageSelector = useAppSelector((e : RootState) => e.filter.itemsPerPage)
    const sortBySelector = useAppSelector((e : RootState) => e.filter.sortBy)

    const actionHandler: Record<FilterAction, (value: string | number) => void> = {
        ItemsPerPage: (value) => {
            if (typeof value === "number") {
                dispatch(ItemsPerPage(value));
                setActiveOption(value);
                setVisible(false);
                console.log('first')
            }
        },
        SortBy: (value) => {
            if(typeof value === "string") {
                dispatch(SortBy(value));
                setActiveOption(value);
                setVisible(false);
            }
        },
    }

    const handleChange = (newValue : string | number, action: FilterAction) => {
        const handler = actionHandler[action]
        if(!handler){
            throw new Error(`Invalid action: ${action} with value: ${newValue}`)
        }else{
            handler(newValue)
        }
    }
    return { activeOption, setActiveOption, visible, setVisible, handleChange, itemsPerPageSelector, sortBySelector};
}


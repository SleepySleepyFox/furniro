export type FilterAction = "ItemsPerPage" | "SortBy";
export type FiltersState = {
    itemsPerPage: number;
    sortBy: string;
}
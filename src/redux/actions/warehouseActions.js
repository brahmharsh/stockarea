import { ActionTypes } from "../constants/action-types";

export const setWarehouses = (warehouses) => {
    return {
        type: ActionTypes.SET_WAREHOUSES,
        payload: warehouses,
    }
}

export const selectedWarehouse = (warehouse) => {
    return {
        type: ActionTypes.SELECTED_WAREHOUSE,
        payload: warehouse,
    }
}

export const removeSelectedWarehouse = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_WAREHOUSE,
    }
}

export const searchWarehouse = (search) => {
    return {
        type: ActionTypes.SEARCH_WAREHOUSE,
        payload: search
    }
}

export const spaceRangeWarehouse = (range) => {
    return {
        type: ActionTypes.SPACE_RANGE_WAREHOUSE,
        payload: range
    }
}
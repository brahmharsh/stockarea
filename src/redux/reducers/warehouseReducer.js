import { ActionTypes } from "../constants/action-types"

const initialState = {
    spaceRange: 3500
};

export const warehouseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_WAREHOUSES:
            return { ...state, warehouses: payload };
        default:
            return state;
    }
};

export const selectedWarehouseReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_WAREHOUSE:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_WAREHOUSE:
            return {};
        default:
            return state;
    }
}

export const searchWarehouseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_WAREHOUSE:
            return { ...state, searchInput: payload };
        default:
            return state;
    }
};

export const spaceRangeWarehouse = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SPACE_RANGE_WAREHOUSE:
            return { ...state, spaceRange: payload };
        default:
            return state;
    }
};
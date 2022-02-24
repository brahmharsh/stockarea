import { combineReducers } from "redux";
import { warehouseReducer, selectedWarehouseReducer, searchWarehouseReducer, spaceRangeWarehouse } from "./warehouseReducer";

const reducers = combineReducers({
    allWarehouses: warehouseReducer,
    warehouse : selectedWarehouseReducer,
    search: searchWarehouseReducer,
    spaceRange: spaceRangeWarehouse,
});

export default reducers;
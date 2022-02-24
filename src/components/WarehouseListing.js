import { useEffect } from "react";
import WarehouseComponent from "./WarehouseComponent";
import { useDispatch } from "react-redux";
import { setWarehouses } from "../redux/actions/warehouseActions";
import Search from './Search';

export default function WarehouseListing() {
    const dispatch = useDispatch();

    const fetchWarehouses = async () => {
        const response = await fetch("/warehouse.json")
            .then(res => res.json())
            .catch((err) => console.log("Error ", err));
        dispatch(setWarehouses(response));
    }

    useEffect(() => {
        fetchWarehouses();
    }, [])
    
    return (
        <>
            <Search />
            <WarehouseComponent />
        </>
    )
}
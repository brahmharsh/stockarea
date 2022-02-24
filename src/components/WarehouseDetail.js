import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedWarehouse, removeSelectedWarehouse } from "../redux/actions/warehouseActions";
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function WarehouseDetail() {
    const warehouse = useSelector((state) => state.warehouse)
    const { name, city, cluster, img, code, type, space_available, is_registered, is_live } = warehouse
    const { warehouseID } = useParams();
    const dispatch = useDispatch();

    const fetchWarehouseDetail = async () => {
        const response = await fetch("/warehouse.json")
            .then(res => res.json())
            .catch((err) => console.log("Error ", err));

        const queryWarehouse = response.filter(warehouse => {
            const query = warehouseID
            if (warehouse.id.toString() === query) {
                return warehouse
            }
        })
        dispatch(selectedWarehouse(...queryWarehouse))
    }

    useEffect(() => {
        if (warehouseID && warehouseID !== "") {
            fetchWarehouseDetail();
        }
        return (
            dispatch(removeSelectedWarehouse())
        )
    }, [warehouseID])

    return (
        <div className="warehouse_detail_container">
            <Link to="/" className="back_btn">
                <span><MdKeyboardBackspace className="back_icon" /></span>
                <span>BACK</span>
            </Link>
            <div className="warehouse_container">
                {
                    Object.keys(warehouse).length === 0 ?
                        <p>Loading...</p>
                        :
                        <div className="warehouse_detail_box">
                            <div className="warehouse_image_box">
                                <img src={img} alt={name} />
                            </div>
                            <div className="warehouse_details">
                                <h1>{name}</h1>
                                <div className="splitter">
                                    <h4>Code:</h4>
                                    <p>{code}</p>
                                </div>
                                <div className="splitter">
                                    <h4>Type:</h4>
                                    <p>{type}</p>
                                </div>
                                <div className="splitter">
                                    <h4>City:</h4>
                                    <p>{city}</p>
                                </div>
                                <div className="splitter">
                                    <h4>Cluster:</h4>
                                    <p>{cluster}</p>
                                </div>
                                <div className="splitter">
                                    <h4>Space Available:</h4>
                                    <p>{space_available}</p>
                                </div>
                                <div className="splitter">
                                    <h4>Status:</h4>
                                    <p>{is_registered ? 'Registered' : 'Not Registered'}</p>
                                </div>
                                <div className="is_live">{is_live ? <div className="online_circle"></div> : <div className="offline_circle"></div>}<strong>30000 sq ft</strong>
                                    <span>{is_live ? 'Ready to occupy' : 'Occupied'}</span>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
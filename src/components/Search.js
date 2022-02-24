import { useDispatch, useSelector } from "react-redux";
import { searchWarehouse, spaceRangeWarehouse } from "../redux/actions/warehouseActions";
import { BsSearch } from 'react-icons/bs';

export default function Search() {
    const dispatch = useDispatch()
    const { spaceRange } = useSelector((state) => state.spaceRange)
    return (
        <div className="search_container">
            <div className="search_box">
                <input type="text" onChange={(e) => dispatch(searchWarehouse(e.target.value))} placeholder="Search eg - Name, City, Cluster" />
                <BsSearch className="search_icon" />
            </div>
            <div className="search_range">
                <p>Space</p>
                <input value={spaceRange} type="range" min="0" max="5000" onChange={(e) => dispatch(spaceRangeWarehouse(e.target.value))} />
                <p>{spaceRange}</p>
            </div>
        </div>
    )
}
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { FaCity, FaWarehouse } from 'react-icons/fa'

export default function WarehouseComponent() {
    const warehouses = useSelector((state) => state.allWarehouses.warehouses);
    const search = useSelector((state) => state.search.searchInput)
    const { spaceRange } = useSelector((state) => state.spaceRange)

    //Rendering warehouse list from redux store
    const renderList = warehouses ?
        warehouses.filter(warehouse => {
            const { name, city, cluster, space_available } = warehouse
            const query = search
            const range = parseInt(spaceRange)

            if (query === "" || query === undefined && space_available <= range) {
                return warehouse
            }
            else if (space_available <= range) {
                //Filter by name, range
                if (name.toLowerCase().includes(query.toLowerCase()) && space_available <= range) {
                    return warehouse
                }
                //Filter by city, range
                if (city.toLowerCase().includes(query.toLowerCase()) && space_available <= range) {
                    return warehouse
                }
                //Filter by cluster, range
                if (cluster.toLowerCase().includes(query.toLowerCase()) && space_available <= range) {
                    return warehouse
                }
            }
        }).map((warehouse) => {
            const { id, name, img, city } = warehouse
            return (
                <Link to={`/warehouse/${id}`} className="card" key={id}>
                    <img src={img} alt={name} className="warehouse_img" />
                    <div className="hover_screen"></div>
                    <div className="warehouse_title">
                        <p className="center_column"><FaWarehouse style={{ marginRight: 10 }} /> {name}</p>
                        <p className="center_column"><FaCity style={{ marginRight: 10 }} />{city}</p>
                    </div>
                </Link>
            )
        })

        :
        <p>Loading...</p>
    return (
        <>
            <div className="item_counter"><FaWarehouse style={{ marginRight: 5 }} /> {renderList.length} Items</div>
            <div className="card_container">
                {renderList}
            </div>
        </>
    )
}
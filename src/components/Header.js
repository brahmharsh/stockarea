import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://stockarea.io/assets/user/images/header/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="user_profile_container">
                <img src="https://affinity-assignment.netlify.app/assets/dp.jpg" alt="user-picture" />
                <p>Brahm Harsh Parmar</p>
            </div>
        </header>
    )
}
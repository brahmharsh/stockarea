import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="layout_container">
            <Header />
            {children}
        </div>
    )
}
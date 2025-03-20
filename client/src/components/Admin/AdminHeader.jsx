import { Link } from "react-router";

function AdminHeader() {
    return (
        <>
        <Link to="/admin">
            <h1 className="w-full p-4 h-16 text-white text-xl bg-slate-700">Administration</h1>
        </Link>
        </>
    )
}

export default AdminHeader;
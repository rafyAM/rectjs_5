function Header() {
    return(
        <header className="bd-white shadow pr-4 py-2">
            <div className="flex justify-end">
            <button className="text-white bg-red-500 hover:bg-red-600 rounded px-4 py-2">Logout</button>
            </div>
        </header>
    )
}

export default Header;
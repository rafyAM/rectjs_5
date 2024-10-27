import React from 'react';

function Sider() {
return (
    <aside className="bg-indigo-900 text-white w-56">
    <div className="px-4 mt-2">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <nav className="ml-4 mt-4">
        <ul>
            <li className="hover:bg-indigo-600 p-2 rounded">Dashboard</li>
            <li className="hover:bg-indigo-600 p-2 rounded">User</li>
            <li className="hover:bg-indigo-600 p-2 rounded">Setting</li>
        </ul>
        </nav>
    </div>
    </aside>
);
}

export default Sider;

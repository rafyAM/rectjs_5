// components/Content.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Header from './Header.jsx';
import ListMhs from './ListMhs.jsx';

function Main() {
    const handleAddStudent = () => {
        Swal.fire({
            title: 'Tambah Mahasiswa',
            input: 'text',
            inputLabel: 'Nama:',
            inputPlaceholder: 'Masukkan nama',
            showCancelButton: true,
            focusConfirm: false,
        });
    };

    return (
    <div class="flex flex-col flex-1">
        <Header />
        <div className="flex-grow bg-gray-200">
            <div className="py-2.5 px-5 flex justify-between items-center">
                <h2 className="text-xl">Daftar Mahasiswa</h2>
                <button className="bg-green-500 text-white p-2 rounded" onClick={handleAddStudent}>
                Tambah
                </button>
            </div>
            <div className="bg-white m-4 p-4 rounded-lg shadow">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200 text-center">
                            <th className="p-3 border border-gray-300">No.</th>
                            <th className="p-3 border border-gray-300">NIM</th>
                            <th className="p-3 border border-gray-300">Nama</th>
                            <th className="p-3 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListMhs
                            no="1."
                            nim="A11.2022.11111"
                            nama="Mahasiswa1"
                        />
                        <ListMhs
                            no="2."
                            nim="A11.2022.22222"
                            nama="Mahasiswa2"
                        />
                        <ListMhs
                            no="1."
                            nim="A11.2022.33333"
                            nama="Mahasiswa3"
                        />
                        <ListMhs
                            no="1."
                            nim="A11.2022.44444"
                            nama="Mahasiswa4"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default Main;

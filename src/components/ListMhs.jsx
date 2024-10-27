// components/ListMhs.js
import React from 'react';
import Swal from 'sweetalert2';
import Button from './Button';

function ListMhs({ no, nim, nama }) {

const handleEdit = () => {
    Swal.fire({
        title: 'Edit Mahasiswa',
        input: 'text',
        inputLabel: 'Nama:',
        inputPlaceholder: 'Masukkan nama',
        showCancelButton: true,
        focusConfirm: false,
    });
};

const handleDelete = () => {
    Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Your wont be able to revert this!',
    showCancelButton: true,
    confirmButtonText: 'Hapus',
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        title:'Deleted!',
        text: 'Mahasiswa has been deleted.',
        icon:'success',
        confirmButtonText: 'OK',
        });
    }});
};

return (
    <tr className=" border-t">
        <td className="p-3 border border-gray-300">{no}</td>
        <td className="p-3 border border-gray-300">{nim}</td>
        <td className="p-3 border border-gray-300">{nama}</td>
        <td className="p-3 border border-gray-300">
        <Button
        style=" bg-yellow-500 hover:bg-yellow-600" 
        text="Edit"
        onclick={handleEdit} />
        <Button
        style=" bg-red-500 hover:bg-red-600" 
        text="Delete"
        onclick={handleDelete} />
        </td>
    </tr>
);
}

export default ListMhs;

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import AdminNavBar from "./AdminNavBar";

export default function AllComplaints() {

    const [customers, setCustomers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        function getComplaints() {
            axios.get("http://localhost:5000/customer/").then((res) => {
                setCustomers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getComplaints();
    }, [])

    function deleteComplaint(id) {
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Once deleted, You will not able to recover these details !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'

        }).then((res) => {
            if (res.isConfirmed) {
                axios.delete(`http://localhost:5000/customer/delete/${id}`);
                Swal.fire({
                    title: 'Success!',
                    text: 'Delete Complaint Successfully',
                    icon: 'success',
                    showConfirmButton: false,

                });
            }
        }).catch((err) => {
            Swal.fire({
                title: 'Error!',
                text: "Couldn't delete your Details",
                icon: 'error',
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:5000/allc");
        }, 3000)

    }

    const backHome = () => {
        navigate(-1);
    }
    return (
        <>
        <AdminNavBar/>
        <div className="body9">
            <div class='containe'>
                <br />
                <br />
                <br />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customers =>
                                <tr key={customers.id}>
                                    <td>{customers.first_name}</td>
                                    <td> {customers.last_name}</td>
                                    <td> {customers.email}</td>
                                    <td> {customers.complaint}</td>


                                </tr>
                            )
                        }
                    </tbody>
                    <button className='btn' onClick={backHome}>Go Back</button>
                </table>
            </div>
            </div>
        </>
    )

}
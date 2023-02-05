import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const { data, isLoading, refetch } = useQuery(['users'], () => fetch(`http://localhost:5000/users`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const createAdmin = email => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Faild to make an admin')
            }
            return res.json()
        }).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success('Make admin successful')
            }

        })
    }
    return (
        <table>
            <thead>
                <tr>
                    <th  ></th>
                    <th  >Email</th>
                    <th  >Make Admin</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((user, index) => <tr style={{ marginBottom: '5px' }} key={user._id}>
                        <td  >{index + 1}</td>
                        <td  >{user.email}</td>
                        <td  >{user.userRole === 'ADMIN' ? 'Already Admin' : <button className="btn btn-sm btn-primary" onClick={() => createAdmin(user.email)}>Make admin</button>}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default AllUsers;
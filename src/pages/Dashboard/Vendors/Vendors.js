import { toast } from 'keep-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Vendors = () => {
    const { user, loading } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(1);
    const [requestEmail, setRequestEmail] = useState('');
    const [role, setRole] = useState('');
    const [userName, setUserName] = useState('')
    const [sellerRequest, setSellerRequest] = useState([]);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            data.map(async (user, i) => {
                if (await user.role === 'sellerRequest') {
                    setSellerRequest([...sellerRequest, user]);
                }
            })
            return data;
        }
    });


    const { data: sellerInfo = [] } = useQuery({
        queryKey: ['sellerInfo', requestEmail],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerInfo?email=${requestEmail}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

    const handleRole = () => {
        console.log('clicked')
        const url = `http://localhost:5000/user/update/${role}?email=${requestEmail}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    refetch();
                    closeModal('request-modal');
                    toast.success((role === 'confirm' ? 'Seller Request Accept Successfully!!' : 'Seller Deleted Successfully!!'));
                }
            })
    }
    return (
        <div className=''>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>Vendors</h2>
                </div>
            </div>

            {/* vendors tabs */}
            <div className='mt-16 bg-white rounded-lg'>
                <div className="grid grid-cols-2">
                    <div
                        onClick={() => handleTabClick(1)}
                        className={`cursor-pointer text-center px-4 py-2 ${activeTab === 1 ? 'bg-primary text-white' : 'bg-white text-gray-800'
                            }`}
                    >
                        Vendors
                    </div>
                    <div
                        onClick={() => handleTabClick(2)}
                        className={`cursor-pointer text-center px-4 py-2 ${activeTab === 2 ? 'bg-primary text-white' : 'bg-white text-gray-800'
                            }`}
                    >
                        <div className="indicator">
                                {
                                    sellerRequest.length > 0 &&
                                    <span className=" indicator-item text-white badge badge-error">new</span>
                                }
                                <div className="grid w-36">Seller Request</div>
                            </div>
                    </div>
                    {/* Add more tabs as needed */}
                </div>

                <div className="p-5 rounded">
                    {activeTab === 1 &&
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Shop Name</th>
                                            <th>Email</th>
                                            <th>Nid/Passport</th>
                                            <th>Phone</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, i) => (
                                                user.role === 'seller' ?
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td><img src={user?.sellerInfo?.image} alt=''className='h-16 w-16 rounded-full'/></td>
                                                    <td>{user.name}</td>
                                                    <td>{user?.sellerInfo?.shopName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user?.sellerInfo?.nid}</td>
                                                    <td>{user?.sellerInfo?.phone}</td>
                                                    <td>{user?.role !== 'admin' && <button className='btn btn-xs text-white btn-error' onClick={() => {  setRequestEmail(user.email);
                                                    setRole('delete');
                                                    handleRole();
                                                     }}>Delete</button>}</td>
                                                </tr> : <></>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {activeTab === 2 &&
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>View Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, i) => (

                                                user.role === 'sellerRequest' ?
                                                    <tr key={i} className="hover">
                                                        <th></th>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user?.role !== 'admin' && <button className='btn btn-xs text-white btn-secondary' onClick={() => { document.getElementById('request-modal').showModal(); setRequestEmail(user.email);
                                                        setUserName(user.name) }}>View</button>}</td>
                                                    </tr> : <></>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {/* Add content for more tabs as needed */}
                </div>
                <dialog id="request-modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h2 className="text-xl font-semibold mt-5 capitalize text-center">{`Information Of ${userName}!!!`}</h2>
                        <div className='flex gap-3 items-center my-10'>
                            <h2 className='text-2xl font-bold'>Image: </h2>
                            <img src={sellerInfo?.sellerInfo?.image} className='w-52' alt=''/>
                        </div>
                        <div className=''>
                            <p><strong>Name: </strong>{sellerInfo?.sellerInfo?.name}</p>
                            <p><strong>Nid/Passport: </strong>{sellerInfo?.sellerInfo?.nid}</p>
                            <p><strong>Phone: </strong>{sellerInfo?.sellerInfo?.phone}</p>
                            <p><strong>Shop Name: </strong>{sellerInfo?.sellerInfo?.shopName}</p>
                        </div>
                        <p className='text-right'>
                            <button onClick={() => {
                                handleRole();
                                setRole('delete')
                            }} className={`btn btn-outline btn-error  mt-5`}>Delete Request</button>
                            <button  onClick={() => {
                                handleRole();
                                setRole('confirm')
                            }} className={`btn btn-outline ml-5 btn-success mt-5`}>Add As a seller</button>
                        </p>

                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Vendors;
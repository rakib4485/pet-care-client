import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProductOrder = () => {
    const {user} = useContext(AuthContext)
    const [orderTotal, setOrserTotal] = useState(0);
    const { data: orders = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-product-order?email=${user?.email}`);
            const data = await res.json()
            return data;
        }
    });
    console.log(orders)

    const {data: products = []} = useQuery({
        queryKey: ['product'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/my-product?email=${user?.email}`);
            const data = await res.json()
            return data;
        }
    })

    useEffect(() => {
        let total = 0;
        orders.forEach(cart => {
            // console.log(cart.quantity * cart.price)
            total = total + cart.price
            setOrserTotal(total)
        })
    }, [orders]);

    const summeryCardItems = [
        {
            id: 1,
            name: 'Total Revenue',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#723535" d="M14.382 6.035a.482.482 0 0 1-.39-.196c-.438-.597-1.22-1.281-2.45-1.15-1.447.154-2.522-.307-3.169-.72a.483.483 0 0 1 .52-.814c.517.33 1.379.698 2.548.574 1.774-.189 2.848.882 3.33 1.537a.483.483 0 0 1-.389.77Z"></path><path fill="#723535" d="M9.326 8.6a.483.483 0 0 1-.411-.736c.62-1.009 1.753-1.702 3.28-2.005a8.755 8.755 0 0 1 2.087-.157.483.483 0 0 1-.065.963c-.034-.002-3.313-.196-4.479 1.704a.482.482 0 0 1-.412.23Z"></path><path fill="#FCB36B" d="M16.605 27.102c7.93 0 12.315-11.632-.208-20.616a1.175 1.175 0 0 1-.492-.966c.003-.317.104-.625.285-.884.586-.837 1.43-2.27 1.936-3.423.121-.276-.052-.573-.376-.573-.752 0-.752-.493-1.505-.493-.752 0-.752.493-1.504.493-.64 0-.904-.552-1.216-.15-.908 1.17 2.205 5.283 2.205 5.283-13.749 9.038-9.316 21.33-1.199 21.33h2.074Z"></path><path fill="#EA9453" d="M19.722 5.773s3.159-4.1 2.25-5.277c-.309-.4-.573.144-1.213.144-.753 0-.753-.493-1.505-.493-.752 0-.752.493-1.505.493a1.48 1.48 0 0 1-.104-.005c-.302 1.296-1.664 3.314-2.444 4.395.307.45.528.743.528.743-.183.12-.363.241-.54.363 13.136 9.029 8.74 20.966.707 20.966h5.073c8.141 0 12.547-12.261-1.247-21.33Z"></path><path fill="#914747" d="M20.308 7.231a10.99 10.99 0 0 1-5.485 0c-.639-.161-1.001-.88-.771-1.533l.008-.022c.192-.548.74-.855 1.275-.72a8.93 8.93 0 0 0 4.462 0c.535-.135 1.082.172 1.275.72l.008.022c.23.653-.132 1.372-.771 1.533Z"></path><path fill="#FFDDCE" d="m3.049 29.211 6.99 2.603a5.32 5.32 0 0 0 1.857.334H19.1a5.32 5.32 0 0 0 2.848-.827l9.02-5.716a1.583 1.583 0 0 0 .259-2.074c-.49-.72-1.3-.845-2.193-.424l-8.782 3.867.01-1.425a2.55 2.55 0 0 0-2.18-2.273l-5.35-.615c-1.233-.175-1.85-.588-2.925-1.218a9.586 9.586 0 0 0-4.84-1.311H3.049v9.08Z"></path><path fill="#FFDDCE" d="M9.615 30.427a5.593 5.593 0 0 0 1.951.351h7.574c.807 0 1.6-.174 2.328-.508l5.296-3.356c.492-.311.805-.854.789-1.437a1.66 1.66 0 0 0-.288-.89l-.327-.557-6.686 2.944.01-1.425a2.55 2.55 0 0 0-2.18-2.273l-5.35-.615c-1.233-.175-1.85-.588-2.925-1.218a9.586 9.586 0 0 0-4.84-1.311H3.049v7.85l6.566 2.445Z"></path><path fill="#FFCBBE" d="M31.227 23.53c-.49-.72-1.3-.845-2.193-.423l-2.415 1.064.21.333a1.583 1.583 0 0 1-.258 2.074l-5.257 3.331a5.32 5.32 0 0 1-2.214.483h-7.204a5.32 5.32 0 0 1-1.856-.334l-6.991-2.602v1.755l6.99 2.603a5.32 5.32 0 0 0 1.857.334H19.1a5.32 5.32 0 0 0 2.848-.827l9.02-5.716a1.583 1.583 0 0 0 .259-2.074Z"></path><path fill="#F5DBCC" d="M19.606 24.08v.035l.022-.01-.022-.024Z"></path><path fill="#FFCBBE" d="M20.253 26.973H14.79a.483.483 0 1 1 0-.965h5.469l-.007.965Z"></path><path fill="#723535" d="M4.553 30.604a.918.918 0 0 1-.918.918H1.418a.918.918 0 0 1-.918-.918V19.358c0-.508.411-.919.918-.919h2.217c.507 0 .918.411.918.919v11.246Z"></path><path fill="#fff" d="M18.788 15.112a23.539 23.539 0 0 1-.612-.226v-3.078c.57.095.914.39.939.412a.483.483 0 0 0 .652-.712 2.99 2.99 0 0 0-1.591-.675v-.687a.483.483 0 1 0-.966 0v.726a3.59 3.59 0 0 0-.358.087c-.82.247-1.432.95-1.598 1.833-.151.802.103 1.573.663 2.013.322.252.727.484 1.293.73v3.82c-.559-.024-.902-.13-1.502-.522a.483.483 0 0 0-.528.809c.788.515 1.315.65 2.03.678v.766a.483.483 0 1 0 .966 0v-.8c1.355-.22 2.146-1.318 2.318-2.341.215-1.279-.454-2.391-1.706-2.833Zm-2.275-1.067c-.275-.216-.394-.628-.31-1.074.078-.414.363-.917.927-1.087l.08-.022v2.608a4.074 4.074 0 0 1-.697-.425Zm3.029 3.74c-.107.633-.572 1.31-1.366 1.514v-3.381l.29.104c1.202.425 1.127 1.457 1.076 1.763Z"></path></svg>,
            total: '৳' + orderTotal ,
            style: 'border-b-[#1EAE98] border-b-4'
        },
        {
            id: 2,
            name: 'Total Orders',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#FCB36B" d="M16 28.063a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM26 28.063a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM30.999 7.063h-8a1 1 0 0 1 .76 1.65l-6 7a1 1 0 0 1-1.76-.65v-4h-2a1 1 0 0 1-.76-1.65l2.014-2.35H6.672l4.281 13.7c.007.021.009.044.014.066a.822.822 0 0 1 .027.206c0 .032.002.064 0 .097a1.012 1.012 0 0 1-.016.108c-.004.022-.004.044-.01.066l-.163.65 20.335-2.905a1 1 0 0 0 .859-.988v-10a1 1 0 0 0-1-1Z"></path><path fill="#723535" d="M28 24.061H11a.5.5 0 0 1-.545-.7l.515-2.059c.006-.022.006-.044.01-.066.007-.036.012-.072.016-.108v-.097a.817.817 0 0 0-.027-.206c-.006-.022-.007-.044-.014-.066l-5-16A1 1 0 0 0 5 4.062H1a1 1 0 0 0 0 2h3.264l4.697 15.03-.447 1.787A2.488 2.488 0 0 0 11 26.06h17a1 1 0 0 0 0-2Z"></path><path fill="#723535" d="M23.908 7.644a1 1 0 0 0-.909-.582h-2v-4a1 1 0 0 0-1.759-.65l-6 7a1 1 0 0 0 .76 1.65h2v4a1 1 0 0 0 1.76.65l6-7a1 1 0 0 0 .148-1.068Z"></path></svg>,
            total: orders?.length,
            style: 'border-b-[#865DFF] border-b-4'
        },
        {
            id: 3,
            name: 'Total Products',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#723535" d="M24 28.267V4.8a2.14 2.14 0 0 0-2.133-2.133h-19.2A2.14 2.14 0 0 0 .533 4.8v23.467A2.14 2.14 0 0 0 2.667 30.4h19.2A2.133 2.133 0 0 0 24 28.267Z"></path><path fill="#fff" d="M21.335 4.8H3.2a.533.533 0 0 0-.533.533v22.4c0 .295.239.534.533.534h18.134a.533.533 0 0 0 .533-.534v-22.4a.533.533 0 0 0-.533-.533Z"></path><path fill="#914747" d="M16.533 2.667v1.6a1.07 1.07 0 0 1-1.066 1.066h-6.4A1.07 1.07 0 0 1 8 4.267v-1.6c0-.294.24-.534.533-.534h1.67a2.129 2.129 0 0 1 2.064-1.6c.992 0 1.829.678 2.064 1.6H16c.293 0 .533.24.533.534Z"></path><path fill="#EA9453" d="M31.465 15.979V30.4a1.07 1.07 0 0 1-1.066 1.067h-16a1.07 1.07 0 0 1-1.067-1.067V15.979h18.133Z"></path><path fill="#FCB36B" d="m31.304 15.593-3.165-3.165a.55.55 0 0 0-.39-.161H17.052a.55.55 0 0 0-.39.161l-3.165 3.165a.55.55 0 0 0 .39.94h17.03a.55.55 0 0 0 .388-.94Z"></path><path fill="#723535" d="M25.068 16.533v3.734a.533.533 0 0 1-.534.533h-4.266a.533.533 0 0 1-.534-.533v-3.734l.534-.533h4.266l.534.533Z"></path><path fill="#fff" d="M18.667 26.667H16a.533.533 0 0 0-.533.533v1.6c0 .295.239.533.533.533h2.667a.533.533 0 0 0 .533-.533v-1.6a.533.533 0 0 0-.533-.533Z"></path><path fill="#914747" d="m25.068 16.533-1.6-4.266h-2.134l-1.6 4.266h5.334Z"></path><path fill="#EA9453" d="M25.977 26.29a.533.533 0 0 0-.754 0l-.533.533a.533.533 0 0 0 .377.91v1.6a.533.533 0 1 0 1.066 0v-1.6a.532.532 0 0 0 .377-.91l-.533-.533ZM29.71 26.823l-.534-.533a.533.533 0 0 0-.754 0l-.533.533a.533.533 0 0 0 .377.91v1.6a.533.533 0 1 0 1.067 0v-1.6a.532.532 0 0 0 .377-.91Z"></path><path fill="#30947F" d="M7.467 12.267a.532.532 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237ZM7.467 18.667a.532.532 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237ZM7.467 25.067a.531.531 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237Z"></path></svg>,
            total: products?.length,
            style: 'border-b-[#D74EFF] border-b-4'
        },

    ]
    return (
        <div>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>My Customers</h2>
                </div>
            </div>
            {/* summery */}
            <div className='shadow-xl rounded-xl bg-white my-10 py-10'>
                <div className='flex gap-3 pb-5 items-center rounded-xl '>
                    <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                    <div>
                        <h2 className='text-xl font-bold'>Summery</h2>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-6 mx-10'>
                    {
                        summeryCardItems.map(summery => (
                            <div className={`flex items-center justify-between gap-3 border px-[10px] py-5 rounded-lg  ${summery.style}`}>
                                <div className='bg-gray-200 p-3 rounded-sm'>{summery.img}</div>
                                <div className=''>
                                    <h4 className='text-lg font-bold text-right'>{summery.name}</h4>
                                    <p className='text-lg text-right'>{summery.total}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='shadow-xl rounded-xl bg-white my-10 py-10'>
            <div className='flex gap-3 pb-5 items-center rounded-xl '>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-xl font-bold'>Recent Orders</h2>
                </div>
            </div>

            <div className="overflow-x-auto mt-5 mx-5">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th>Tracking Id</th>
                            <th>Custormer</th>
                            <th>Product</th>
                            <th>Order Date</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            [...orders].reverse().slice(0,10).map((booking, i) => <tr key={i}>
                                <td><small>{booking.product._id}</small></td>
                                <td>
                                    <div className='flex gap-3 items-center'>
                                        <div>
                                            {
                                                booking.userImage ? 
                                                <div className='h-10 w-10 rounded-full'><img src={booking.userImage} alt=''/></div> :
                                                <div className='h-10 w-10 rounded-full bg-[#f5d6e4] flex justify-center items-center'>
                                                    <span className='text-primary font-bold'>C</span>
                                                </div>
                                            }
                                        </div>
                                        <div>
                                            <p className='font-semibold'><small>{booking.name}</small></p>
                                            <p className='-mt-3'><small>{booking.customerEmail}</small></p>
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.product.productName}</td>
                                <td>{booking.orderDate}</td>
                                <td><span className='text-2xl'></span>{booking.product.quantity}</td>
                                <td><span className='text-2xl'>৳</span>{booking.price}</td>
                                <td><small className='font-semibold'>{booking.paymentType}</small></td>
                                
                                {/* <td><Link target='_blank' to={`${booking.meet}`} className='btn btn-xs btn-primary'>Join</Link></td> */}

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyProductOrder;
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { BsCashCoin } from 'react-icons/bs';
import RecentOrder from './RecentOrder';

const AdminDashboard = () => {
    const [orderTotal, setOrserTotal] = useState(0);
    const [bookingTotal, setBookingTotal] = useState(0)
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json()
            return data;
        }
    });

    const { data: sellers = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json()
            return data;
        }
    });

    const { data: orders = [] } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/totalOrders');
            const data = await res.json()
            return data;
        }
    });

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allBookings');
            const data = await res.json()
            return data;
        }
    });

    useEffect(() => {
        let total = 0;
        orders.forEach(cart => {
            // console.log(cart.quantity * cart.price)
            total = total + cart.price
            setOrserTotal(total)
        })
    }, [orders]);

    useEffect(() => {
        let total = 0;
        bookings.forEach(cart => {
            // console.log(cart.quantity * cart.price)
            total = total + parseInt(cart.prices)
            setBookingTotal(total)
        })
    }, [bookings]);

    console.log(orderTotal);

    const summeryCardItems = [
        {
            id: 1,
            name: 'Total Revenue',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#723535" d="M14.382 6.035a.482.482 0 0 1-.39-.196c-.438-.597-1.22-1.281-2.45-1.15-1.447.154-2.522-.307-3.169-.72a.483.483 0 0 1 .52-.814c.517.33 1.379.698 2.548.574 1.774-.189 2.848.882 3.33 1.537a.483.483 0 0 1-.389.77Z"></path><path fill="#723535" d="M9.326 8.6a.483.483 0 0 1-.411-.736c.62-1.009 1.753-1.702 3.28-2.005a8.755 8.755 0 0 1 2.087-.157.483.483 0 0 1-.065.963c-.034-.002-3.313-.196-4.479 1.704a.482.482 0 0 1-.412.23Z"></path><path fill="#FCB36B" d="M16.605 27.102c7.93 0 12.315-11.632-.208-20.616a1.175 1.175 0 0 1-.492-.966c.003-.317.104-.625.285-.884.586-.837 1.43-2.27 1.936-3.423.121-.276-.052-.573-.376-.573-.752 0-.752-.493-1.505-.493-.752 0-.752.493-1.504.493-.64 0-.904-.552-1.216-.15-.908 1.17 2.205 5.283 2.205 5.283-13.749 9.038-9.316 21.33-1.199 21.33h2.074Z"></path><path fill="#EA9453" d="M19.722 5.773s3.159-4.1 2.25-5.277c-.309-.4-.573.144-1.213.144-.753 0-.753-.493-1.505-.493-.752 0-.752.493-1.505.493a1.48 1.48 0 0 1-.104-.005c-.302 1.296-1.664 3.314-2.444 4.395.307.45.528.743.528.743-.183.12-.363.241-.54.363 13.136 9.029 8.74 20.966.707 20.966h5.073c8.141 0 12.547-12.261-1.247-21.33Z"></path><path fill="#914747" d="M20.308 7.231a10.99 10.99 0 0 1-5.485 0c-.639-.161-1.001-.88-.771-1.533l.008-.022c.192-.548.74-.855 1.275-.72a8.93 8.93 0 0 0 4.462 0c.535-.135 1.082.172 1.275.72l.008.022c.23.653-.132 1.372-.771 1.533Z"></path><path fill="#FFDDCE" d="m3.049 29.211 6.99 2.603a5.32 5.32 0 0 0 1.857.334H19.1a5.32 5.32 0 0 0 2.848-.827l9.02-5.716a1.583 1.583 0 0 0 .259-2.074c-.49-.72-1.3-.845-2.193-.424l-8.782 3.867.01-1.425a2.55 2.55 0 0 0-2.18-2.273l-5.35-.615c-1.233-.175-1.85-.588-2.925-1.218a9.586 9.586 0 0 0-4.84-1.311H3.049v9.08Z"></path><path fill="#FFDDCE" d="M9.615 30.427a5.593 5.593 0 0 0 1.951.351h7.574c.807 0 1.6-.174 2.328-.508l5.296-3.356c.492-.311.805-.854.789-1.437a1.66 1.66 0 0 0-.288-.89l-.327-.557-6.686 2.944.01-1.425a2.55 2.55 0 0 0-2.18-2.273l-5.35-.615c-1.233-.175-1.85-.588-2.925-1.218a9.586 9.586 0 0 0-4.84-1.311H3.049v7.85l6.566 2.445Z"></path><path fill="#FFCBBE" d="M31.227 23.53c-.49-.72-1.3-.845-2.193-.423l-2.415 1.064.21.333a1.583 1.583 0 0 1-.258 2.074l-5.257 3.331a5.32 5.32 0 0 1-2.214.483h-7.204a5.32 5.32 0 0 1-1.856-.334l-6.991-2.602v1.755l6.99 2.603a5.32 5.32 0 0 0 1.857.334H19.1a5.32 5.32 0 0 0 2.848-.827l9.02-5.716a1.583 1.583 0 0 0 .259-2.074Z"></path><path fill="#F5DBCC" d="M19.606 24.08v.035l.022-.01-.022-.024Z"></path><path fill="#FFCBBE" d="M20.253 26.973H14.79a.483.483 0 1 1 0-.965h5.469l-.007.965Z"></path><path fill="#723535" d="M4.553 30.604a.918.918 0 0 1-.918.918H1.418a.918.918 0 0 1-.918-.918V19.358c0-.508.411-.919.918-.919h2.217c.507 0 .918.411.918.919v11.246Z"></path><path fill="#fff" d="M18.788 15.112a23.539 23.539 0 0 1-.612-.226v-3.078c.57.095.914.39.939.412a.483.483 0 0 0 .652-.712 2.99 2.99 0 0 0-1.591-.675v-.687a.483.483 0 1 0-.966 0v.726a3.59 3.59 0 0 0-.358.087c-.82.247-1.432.95-1.598 1.833-.151.802.103 1.573.663 2.013.322.252.727.484 1.293.73v3.82c-.559-.024-.902-.13-1.502-.522a.483.483 0 0 0-.528.809c.788.515 1.315.65 2.03.678v.766a.483.483 0 1 0 .966 0v-.8c1.355-.22 2.146-1.318 2.318-2.341.215-1.279-.454-2.391-1.706-2.833Zm-2.275-1.067c-.275-.216-.394-.628-.31-1.074.078-.414.363-.917.927-1.087l.08-.022v2.608a4.074 4.074 0 0 1-.697-.425Zm3.029 3.74c-.107.633-.572 1.31-1.366 1.514v-3.381l.29.104c1.202.425 1.127 1.457 1.076 1.763Z"></path></svg>,
            total: '৳' + (orderTotal + bookingTotal) * 0.1,
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
            name: 'Vendors',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#723535" d="M24 28.267V4.8a2.14 2.14 0 0 0-2.133-2.133h-19.2A2.14 2.14 0 0 0 .533 4.8v23.467A2.14 2.14 0 0 0 2.667 30.4h19.2A2.133 2.133 0 0 0 24 28.267Z"></path><path fill="#fff" d="M21.335 4.8H3.2a.533.533 0 0 0-.533.533v22.4c0 .295.239.534.533.534h18.134a.533.533 0 0 0 .533-.534v-22.4a.533.533 0 0 0-.533-.533Z"></path><path fill="#914747" d="M16.533 2.667v1.6a1.07 1.07 0 0 1-1.066 1.066h-6.4A1.07 1.07 0 0 1 8 4.267v-1.6c0-.294.24-.534.533-.534h1.67a2.129 2.129 0 0 1 2.064-1.6c.992 0 1.829.678 2.064 1.6H16c.293 0 .533.24.533.534Z"></path><path fill="#EA9453" d="M31.465 15.979V30.4a1.07 1.07 0 0 1-1.066 1.067h-16a1.07 1.07 0 0 1-1.067-1.067V15.979h18.133Z"></path><path fill="#FCB36B" d="m31.304 15.593-3.165-3.165a.55.55 0 0 0-.39-.161H17.052a.55.55 0 0 0-.39.161l-3.165 3.165a.55.55 0 0 0 .39.94h17.03a.55.55 0 0 0 .388-.94Z"></path><path fill="#723535" d="M25.068 16.533v3.734a.533.533 0 0 1-.534.533h-4.266a.533.533 0 0 1-.534-.533v-3.734l.534-.533h4.266l.534.533Z"></path><path fill="#fff" d="M18.667 26.667H16a.533.533 0 0 0-.533.533v1.6c0 .295.239.533.533.533h2.667a.533.533 0 0 0 .533-.533v-1.6a.533.533 0 0 0-.533-.533Z"></path><path fill="#914747" d="m25.068 16.533-1.6-4.266h-2.134l-1.6 4.266h5.334Z"></path><path fill="#EA9453" d="M25.977 26.29a.533.533 0 0 0-.754 0l-.533.533a.533.533 0 0 0 .377.91v1.6a.533.533 0 1 0 1.066 0v-1.6a.532.532 0 0 0 .377-.91l-.533-.533ZM29.71 26.823l-.534-.533a.533.533 0 0 0-.754 0l-.533.533a.533.533 0 0 0 .377.91v1.6a.533.533 0 1 0 1.067 0v-1.6a.532.532 0 0 0 .377-.91Z"></path><path fill="#30947F" d="M7.467 12.267a.532.532 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237ZM7.467 18.667a.532.532 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237ZM7.467 25.067a.531.531 0 0 1-.377-.157l-1.066-1.066a.533.533 0 1 1 .754-.754l.607.607 1.772-2.66a.533.533 0 1 1 .887.593l-2.133 3.2a.533.533 0 0 1-.444.237Z"></path></svg>,
            total: sellers.length,
            style: 'border-b-[#D74EFF] border-b-4'
        },
        {
            id: 4,
            name: 'Doctors',
            img: <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-8 w-8"><path fill="#EA9453" d="M10.312 17.532 2.967 9.806a1.577 1.577 0 0 1 2.216-2.243l7.345 7.255c.62.612.625 2.081.013 2.7-.612.62-1.61.626-2.23.014ZM21.694 17.532l7.345-7.726a1.576 1.576 0 1 0-2.216-2.243l-7.345 7.255c-.62.612-.625 2.081-.013 2.7.612.62 1.61.626 2.23.014Z"></path><path fill="#914747" d="M31.05 13.923v2.123c0 .55-.447 1.002-1.002 1.002H1.953c-.55 0-1.002-.452-1.002-1.002v-2.123c0-.555.452-1.002 1.002-1.002h28.095a1 1 0 0 1 1.002 1.002Z"></path><path fill="#723535" d="M31.05 13.923v2.123c0 .55-.448 1.002-1.003 1.002h-4.795c.555 0 1.002-.452 1.002-1.002v-2.123a1 1 0 0 0-1.002-1.002h4.795a1 1 0 0 1 1.003 1.002Z"></path><path fill="#914747" d="m29.807 17.048-1.762 11.265a3.2 3.2 0 0 1-3.164 2.725H7.123a3.2 3.2 0 0 1-3.164-2.725L2.197 17.048h27.61Z"></path><path fill="#723535" d="m29.632 18.213.175-1.165H2.197l.175 1.165h27.26Z"></path><path fill="#723535" d="m29.807 17.048-1.765 11.266a3.199 3.199 0 0 1-3.162 2.724h-3.741a3.2 3.2 0 0 0 3.167-2.724l1.76-11.266h3.74Z"></path><path fill="#fff" d="M11.628 20.267v7.087a1.119 1.119 0 0 1-2.235 0v-7.087c0-.617.503-1.12 1.12-1.12a1.118 1.118 0 0 1 1.115 1.12ZM17.118 20.267v7.087a1.119 1.119 0 0 1-2.235 0v-7.087c0-.617.503-1.12 1.12-1.12a1.118 1.118 0 0 1 1.115 1.12ZM22.608 20.267v7.087a1.119 1.119 0 0 1-2.235 0v-7.087c0-.617.503-1.12 1.12-1.12a1.118 1.118 0 0 1 1.115 1.12Z"></path><path fill="#914747" d="M21.059 6.16a5.201 5.201 0 0 1-10.403 0A5.2 5.2 0 0 1 15.857.962 5.2 5.2 0 0 1 21.06 6.16Z"></path><path fill="#FCB36B" d="M19.463 6.16a3.606 3.606 0 1 1-7.212 0 3.606 3.606 0 0 1 7.212 0Z"></path><path fill="#EA9453" d="M18.628 3.859a3.606 3.606 0 0 0-5.89 2.788c0 .872.308 1.674.825 2.294A3.591 3.591 0 0 1 12.25 6.16a3.606 3.606 0 0 1 6.378-2.301Z"></path><path fill="#914747" d="M17.156 6.982c0 .538-.381.998-.904 1.155v.21a.392.392 0 1 1-.784 0v-.21c-.528-.157-.91-.617-.91-1.155 0-.22.178-.392.393-.392.22 0 .392.172.392.392 0 .235.235.423.517.423.282 0 .512-.188.512-.423s-.23-.429-.512-.429c-.716 0-1.301-.543-1.301-1.212 0-.539.381-.999.909-1.156v-.209a.392.392 0 1 1 .784 0v.21c.523.156.904.616.904 1.155 0 .22-.172.392-.392.392a.392.392 0 0 1-.392-.392c0-.235-.23-.424-.512-.424-.282 0-.517.189-.517.424s.235.428.517.428c.716 0 1.296.544 1.296 1.213Z"></path><path fill="#FCB36B" d="M24.021 6.607H22.52a.446.446 0 0 1-.445-.445V6.16c0-.244.199-.444.445-.444h1.502c.246 0 .445.2.445.444v.002a.446.446 0 0 1-.445.445ZM23.897 3.526l-1.063 1.062a.446.446 0 0 1-.628 0l-.002-.001a.446.446 0 0 1 0-.629l1.063-1.062a.446.446 0 0 1 .628 0l.002.001a.446.446 0 0 1 0 .629ZM22.204 8.365l1.063 1.062a.446.446 0 0 0 .628 0l.002-.002a.446.446 0 0 0 0-.628l-1.063-1.063a.446.446 0 0 0-.628 0l-.002.002a.446.446 0 0 0 0 .629Z"></path><path fill="#EA9453" d="M7.695 6.607h1.502c.246 0 .445-.201.445-.445V6.16a.446.446 0 0 0-.445-.444H7.695c-.246 0-.445.2-.445.444v.002c0 .244.199.445.445.445ZM7.82 3.526l1.062 1.062a.446.446 0 0 0 .629 0l.001-.001a.446.446 0 0 0 0-.629L8.45 2.896a.446.446 0 0 0-.63 0v.001a.446.446 0 0 0 0 .629ZM9.512 8.365 8.45 9.427a.446.446 0 0 1-.63 0v-.002a.446.446 0 0 1 0-.628l1.062-1.063a.446.446 0 0 1 .629 0l.001.002a.446.446 0 0 1 0 .629Z"></path></svg>,
            total: doctors.length,
            style: 'border-b-[#FF57A0] border-b-4'
        },

    ]

    return (
        <div>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>Dashboard</h2>
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
                <div className='grid grid-cols-4 gap-6 mx-10'>
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
            {/* recent Order */}
            <RecentOrder orders={orders}/>
        </div>
    );
};

export default AdminDashboard;
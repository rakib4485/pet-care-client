import React, { useContext, useState } from 'react';
import NavbarComponent from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaGift, FaUserAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { FaAddressBook, FaUserDoctor } from "react-icons/fa6";
import { BsCartCheckFill } from 'react-icons/bs';


const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [disabled, setDisabled] = useState(false)
  const handleSellerRequest = event => {
    event.preventDefault();
    const form = event.target;
    const shopName = form.name.value;
    const phone = form.phone.value;
    const nid = form.nid.value;


    const seller = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      shopName,
      phone,
      nid
    }

    fetch('http://localhost:5000/sellerRequest', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(seller)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        setDisabled(true);
        closeModal('seller-modal');
      }
    })
  }

  const closeModal = (name) => {
    // Get the modal element
    const modal = document.getElementById(name);

    // Hide the modal
    modal.close();
};
  return (
    <div>
      <NavbarComponent />
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-gray-200  p-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-800 text-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div>
            <img src="" alt="" />
          </div>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div classNam e='mt-5 md:w-[280px] px-5 border-b-2 pb-5 '>
              <div className="avatar">
                <div className="w-24 ml-24 rounded mx-auto">
                  {
                    user?.photoURL ?
                      <img src={user?.photoURL} alt='' /> :
                      <FaUserAlt className='text-[65px] ml-2 mt-4' />
                  }
                </div>
                {/* {(!isAdmin && !isDoctor) && */}
                <MdEdit className='text-center text-2xl cursor-pointer z-[50]' onClick={() => document.getElementById('image-modal').showModal()} disabled={disabled} />

              </div>
              <h3 className={`text-lg font-semibold mt-5  text-center ${user?.displayName.length > 15 && 'tooltip'}`} data-tip={`${user?.displayName}`}>{user.displayName}</h3>
              {/* <p className='flex gap-3 justify-center items-center text-lg font-semibold'><span>Type : {
                (isAdmin || isDoctor || isReception) ? <>{isAdmin && 'Admin'} {isDoctor && 'Doctor'} {isReception && "Receptionist"} </> : 'User'
              }
              </span> */}
              {

                <div className='text-center'>
                  <button className="btn btn-xs btn-primary text-white" onClick={() => document.getElementById('seller-modal').showModal()} >Become a Seller</button>
                </div>
              }
              
              {/* {
                  (!isAdmin && !isDoctor && !isReception && !isRequest) &&
                  <button className="btn btn-xs bg-gradient-to-r from-cyan-500 to-blue-500" onClick={() => document.getElementById('doctor-modal').showModal()} disabled={disabled}>Doctor Request</button>
                } */}

              {/* </p> */}
            </div>
            <hr className='my-5' />
            <div className='text-lg'>
              {
                <>
                  <li><Link to='/dashboard'><FaAddressBook />My Appointment</Link></li>
                  <li><Link to='/dashboard/my-order'><BsCartCheckFill />My Orders</Link></li>
                </>
              }


              {
                //  <>
                //   <li><Link to='/dashboard/patients'>My Patients</Link></li>
                //   <li><Link to='/dashboard/createdoctor'>Create profile</Link></li>
                // </>
              }
              {
                <>
                  <li><Link to='/dashboard/vendors'><FaGift />Vendors</Link></li>
                  <li><Link to='/dashboard/add-doctor'><FaUserDoctor />Add a Doctor</Link></li>
                </>
              }
              {
                 <>
                  {/* <li><Link to='/dashboard/allusers'>Users List</Link></li> */}
                  <li><Link to='/dashboard/doctors'><FaUserDoctor />Doctors</Link></li>
                  <li><Link to='/dashboard/products'>Products</Link></li>
                  {/* <li><Link to='/dashboard/products'>Doctor Request</Link></li> */}
                  <li><Link to='/dashboard/confirmation'>Confirmation Zone</Link></li>
                </>
              }
              {/* <li><Link to='/dashboard/appointment'>Appointments</Link></li> */}
            </div>
          </ul>

        </div>
      </div>
      {/* Update Profile modal  */}
      {/* <dialog id="image-modal" className="modal">
        <div className="modal-box">
          <h1 className='text-2xl font-semibold mb-2'>Update your profile</h1>
          <form method="dialog" onSubmit={handleUpdateProfile}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div>
              <textarea name="medical" placeholder='Write down your previous medical history...' id="" className='textarea textarea-primary w-full' rows="5"></textarea>
            </div>
            <p className='text-right mt-3'><input className='bg-black px-4 py-2 text-white cursor-pointer' type="submit" /></p>
          </form>
        </div>
      </dialog> */}

      {/* seller request modal  */}
      <dialog id="seller-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-md text-red-500 mt-5 text-center">Enter all the informtion according to your NID/Passport</h2>
          <form className="my-10 bg-slate-200 p-6 rounded-lg" onSubmit={handleSellerRequest}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Shop Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Town / City</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                className="input input-bordered"
                required
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">NID/Passport Number</span>
              </label>
              <input
                type="text"
                name="nid"
                placeholder="Enter nid or passport number"
                className="input input-bordered"
                required
              />

            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Send Request</button>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DashboardLayout;
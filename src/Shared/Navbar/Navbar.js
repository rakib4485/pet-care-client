import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { IoBagHandleOutline } from "react-icons/io5";
import logo from '../../assets/logo1.png'
import { useQuery } from '@tanstack/react-query';
import useSeller from '../../hookes/useSeller';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const { data: carts = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
      const data = await res.json()
      return data;
    }
  })

  // const { data: newOrder = [] } = useQuery({
  //   queryKey: ['newOrder'],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/my-product-order-notification?email=${user?.email}`);
  //     const data = await res.json()
  //     return data;
  //   }
  // })

  // console.log(newOrder)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = <React.Fragment>
    <Link to="/" className="text-white">
      Home
    </Link>
    <Link to="/about" className="text-white">
      About
    </Link>
    <Link to="/services" className="text-white">
      Services
    </Link>
    <Link to="/appointments" className="text-white">
      Appointment
    </Link>
    <Link to="/shop" className="text-white">
      Shop
    </Link>
    <Link to="/contact" className="text-white">
      Contact
    </Link>
    <Link to="/carts" className="text-white mr-3">
      <div className='mr-5'>
        <IoBagHandleOutline className='text-2xl hover:text-primary absolute' />
        <div className='h-5 w-5 rounded-full bg-primary flex justify-center items-center relative -top-2 -right-4'><span>{carts.length}</span></div>
      </div>
    </Link>
  </React.Fragment>
  return (
    <div>

      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="" className="text-white font-bold text-xl flex items-center gap-2">
              <img src={logo} alt='' className='w-8' />Pet Care
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 text-white">
            {menuItems}
            <div className="navbar-end hidden md:flex">
              {user?.uid ?
                <>
                  <Link className='mr-4' to="/dashboard">Dashboard</Link>
                  {/* {
                    isSeller &&
                    <Link to="/dashboard/my-product-order" className="text-white mr-16">
                      <div className='mr-5'>
                        <span className='absolute' >New Order</span>
                        {
                          newOrder.length > 0 &&
                          <div className='h-5 w-10 rounded-full bg-primary flex justify-center items-center relative -top-4 -right-16'><span>new</span></div>
                        }
                      </div>
                    </Link>
                  } */}
                  <Link onClick={handleLogOut}>Log out</Link>
                </>
                :
                <Link to='/login'>Login</Link>
              }
            </div>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 fixed inset-0 z-50">
            <div className="flex justify-end h-full items-center">
              <div className="bg-gray-800 w-3/4 h-full">
                <div className="flex flex-col justify-center items-start h-full space-y-4">
                  {menuItems}
                  <div className="md:hidden text-white">
                    {user?.uid ?
                      <>
                        <Link className='mr-4' to="/dashboard">Dashboard</Link>
                        {/* {
                          isSeller &&
                          <Link to="/dashboard/my-product-order" className="text-white mr-16">
                            <div className='mr-5'>
                              <span className='absolute' >New Order</span>
                              {
                                newOrder.length > 0 &&
                                <div className='h-5 w-10 rounded-full bg-primary flex justify-center items-center relative -top-4 -right-16'><span>new</span></div>
                              }
                            </div>
                          </Link>
                        } */}
                        <div onClick={handleLogOut}><Link>Log out</Link></div>
                      </>
                      :
                      <Link to='/login'>Login</Link>
                    }
                  </div>
                </div>

              </div>
              <div
                className="bg-black opacity-50 w-full h-full cursor-pointer"
                onClick={toggleMenu}
              ></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComponent;
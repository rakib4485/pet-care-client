import React from 'react';
import chooseImg from '../../../assets/home-3-04.jpg';
import { GiWashingMachine } from "react-icons/gi";
import { FiAward } from "react-icons/fi";
import { LuDog } from "react-icons/lu";

const ChooseUs = () => {
    return (
        <div className='my-9 mx[8%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
                <div>
                    <h1 className='text-3xl lg:text-5xl font-bold text-end choose-titles'>Why Choose Us</h1>
                    <p className='text-end mt-4'>Pet treats packed with nutritious ingredients, vitamins and <br /> supplements to help dogs.</p>
                    <div className="mt-14">
                        <div className='flex justify-end items-center gap-4'>
                            <div>
                                <h1 className='text-end text-2xl font-bold choose-titles'>Pet Nutritionists</h1>
                                <p className='text-end mt-3 text-gray-500'>Our in-house pet nutritionists play a crucial role in the creation <br />of Kreme dog and cat food</p>
                            </div>
                            <div className='p-4 rounded-full' style={{backgroundColor: '#ffbaa0'}}>
                            <GiWashingMachine className='text-5xl text-white font-bold' />
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-4 my-7'>
                            <div>
                                <h1 className='text-end text-2xl font-bold choose-titles'>Quality & Safety</h1>
                                <p className='text-end mt-3 text-gray-500'>We own and run operations in all of the facilities in which <br />our dry food is made.</p>
                            </div>
                            <div className='p-4 rounded-full' style={{backgroundColor: '#e0df93'}}>
                            <FiAward className='text-5xl text-white font-bold' />
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <div>
                                <h1 className='text-end text-2xl font-bold choose-titles'>Health & Well-Being</h1>
                                <p className='text-end mt-3 text-gray-500'>Just as important as what we put into our Kreme <br />recipes is what your pet gets...!</p>
                            </div>
                            <div className='p-4 rounded-full' style={{backgroundColor: '#cfecbc'}}>
                            <LuDog className='text-5xl text-white font-bold' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={chooseImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
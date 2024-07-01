import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        querykey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://medwin-cares-server-two.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=c0a6c5eff4efffdee5df0347dc585c96`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                        meet: data.meet,
                        prices: data.price,
                        offlineSlots: [
                            "08.00 AM - 08.30 AM",
                            "08.30 AM - 09.00 AM",
                            "09.00 AM - 9.30 AM",
                            "09.30 AM - 10.00 AM",
                            "10.00 AM - 10.30 AM",
                            "10.30 AM - 11.00 AM",
                            "11.00 AM - 11.30 AM",
                            "11.30 AM - 12.00 AM"

                        ],
                        onlineSlots: [
                            "1.00 PM - 1.30 PM",
                            "1.30 PM - 2.00 PM",
                            "2.00 PM - 2.30 PM",
                            "2.30 PM - 3.00 PM",
                            "3.00 PM - 3.30 PM",
                            "3.30 PM - 4.00 PM",
                            "4.00 PM - 4.30 PM",
                            "4.30 PM - 5.00 PM"
                        ],
                    }

                    fetch('http://localhost:5000/appointmentOptions', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            // navigate('/dashboard/managedoctors');
                        })
                }
            })
    }
    return (
        <div className=''>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>Add a new Doctor</h2>
                </div>
            </div>
            <div className='w-96 mt-20 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                <p className='text-red-600'>For add a doctor first you need to create a account for this doctor</p>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image</span></label>
                        <input {...register("image", { required: "Image is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Google Meet Link</span></label>
                        <input {...register("meet", { required: "Google Meet link is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.meet && <p className='text-red-600'>{errors.meet?.message}</p>}
                    </div>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input {...register("price", { required: "Price is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full my-3' value="Add Doctor" type="submit" />
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
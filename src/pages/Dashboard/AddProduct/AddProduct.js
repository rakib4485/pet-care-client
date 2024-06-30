import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import FileUpload from '../../../components/FileUpload';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const [files, setFiles] = useState([])
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://pet-care-server-gamma.vercel.app/categories');
            const data = await res.json()
            return data;
        }
    })

    const handleUpload = data => {
        const image = files[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=c0a6c5eff4efffdee5df0347dc585c96`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name,
                    sellerEmail: user?.email,
                    img: imgData.data.url,
                    quantity: data.quantity,
                    price: data.price,
                    categoryId: data.category
                }

                fetch('https://pet-care-server-gamma.vercel.app/product',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/my-products');
                })
            }
        })
    }
    return (
        <div>
            <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                <div>
                    <h2 className='text-2xl font-bold'>Add a new Product</h2>
                </div>
            </div>

            <div className='w-96 mt-16 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                <form onSubmit={handleSubmit(handleUpload)}>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Product Category</span></label>
                        <select {...register("category", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs">
                            {
                                categories.map(category => (
                                    <option value={category.categoryId}>{category.name}</option>
                                ))
                            }
                        </select>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image</span></label>
                        <FileUpload files={files} setFiles={setFiles} />
                        {/* <input {...register("image", { required: "Image is required" })} type="file" className="input input-bordered w-full max-w-xs" /> */}
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input {...register("price", { required: "Google Meet link is required" })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.meet && <p className='text-red-600'>{errors.meet?.message}</p>}
                    </div>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Quantity</span></label>
                        <input {...register("quantity", { required: "Price is required" })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full my-3' value="Add Producat" type="submit" />
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
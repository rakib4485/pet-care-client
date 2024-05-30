import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const EditProfile = () => {
    const { user } = useContext(AuthContext)


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://pet-care-server-lake.vercel.app/user/${user.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(users)
    const { doctorDetails } = users;

    // Initializing state with education details from doctorDetails or with a default empty entry
  const [education, setEducation] = useState(doctorDetails?.education || [{ institution: '', degree: '', year: '' }]);

    // Function to handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  // Function to add a new education entry
  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  // Function to remove an education entry
  const removeEducation = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

    console.log(education)

    const handleEditProfile = (event) => {
        event.preventDefault();

        const form = event.target;
        const about = form.about.value;
        const phone = form.phone.value;
        const sEmail = form.sEmail.value;


        const doctorDetails = {
            about,
            education,
            phone,
            sEmail          
        }

        fetch(`https://pet-care-server-lake.vercel.app/edit-doctorDetails?email=${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(doctorDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
            toast.success("Doctor Information update successfully")
        }
      })

    }
    return (
        <div>
            {/* <input type="checkbox" id="edit-profile-modal" className="modal-toggle" /> */}
            <div>
                <div className="">
                    <div>
                        <div className='flex gap-3 py-5 items-center shadow-xl rounded-xl bg-white'>
                            <div className='w-[4px] h-10 bg-primary  -ml-[1px] rounded-full'></div>
                            <div>
                                <h2 className='text-2xl font-bold'>Hello {users.name}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-96 mt-20 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                        <form onSubmit={handleEditProfile}>
                            <div className="form-control">
                                <label className="label">
                                    <p className="text-2xl font-semibold underline">About Yourself</p>
                                </label>
                                <textarea
                                    type="text-area"
                                    name="about"
                                    defaultValue={doctorDetails?.about ? doctorDetails?.about : ""}
                                    className="input input-bordered h-20"
                                />
                            </div>
                            <div className="form-control">
                                <h1 className="text-2xl font-semibold underline">Education Form</h1>
                                {education.map((edu, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            name="institution"
                                            value={edu?.institution ? edu.institution : ''}
                                            onChange={(event) => handleInputChange(index, event)}
                                            placeholder="Institution"
                                            className="input input-bordered w-full mt-5"
                                        />
                                        <input
                                            type="text"
                                            name="degree"
                                            value={edu?.degree ? edu.degree : ''}
                                            onChange={(event) => handleInputChange(index, event)}
                                            placeholder="Degree"
                                            className="input input-bordered my-5 w-full"
                                        />
                                        <input
                                            type="text"
                                            name="year"
                                            value={edu?.year ? edu.year : ''}
                                            onChange={(event) => handleInputChange(index, event)}
                                            placeholder="Year"
                                            className="input input-bordered"
                                        />
                                        <button className='btn btn-xs btn-error' onClick={() => removeEducation(index)}>Remove</button>
                                    </div>
                                ))}
                                <button className='btn btn-xs btn-secondary mt-5' onClick={addEducation}>Add Education</button>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <p className="text-2xl font-semibold underline">Phone</p>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue={doctorDetails?.phone ? doctorDetails?.phone : ""}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <p className="text-2xl font-semibold underline">Secondary Email</p>
                                </label>
                                <input
                                    type="text"
                                    name="sEmail"
                                    defaultValue={doctorDetails?.sEmail ? doctorDetails?.sEmail : ""}
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary">update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
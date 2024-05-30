import { useEffect, useState } from 'react';

const useDoctor = (email) => {
    console.log(email)
    const [isDoctor, setIsDoctor] = useState(false);
    const [isDocotrLoading, setIDoctorLoading] = useState(true);
    useEffect( () =>{
        fetch(`https://pet-care-server-lake.vercel.app/users/doctor/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsDoctor(data.isDoctor);
            setIDoctorLoading(false);
            console.log('doctor',data.isDoctor);
        })
    }, [email])
    return [isDoctor, isDocotrLoading]; 
};

export default useDoctor;
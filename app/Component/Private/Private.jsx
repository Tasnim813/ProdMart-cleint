import useAuth from '@/app/hook/useAuth';
import { useRouter } from 'next/router';
import React from 'react';
import Loader from '../Loader/Loader';

const Private = ({children}) => {
    const {user,loading}=useAuth()
    const router=useRouter()
    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return router.push('/login')
    }
    return children;
};

export default Private;
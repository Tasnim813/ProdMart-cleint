'use client'
import useAuth from '@/app/hook/useAuth';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react';
import Loader from '../Loader/Loader';

const Private = ({children}) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return null; // redirect hocche, tai empty return
    }

    return children;
};

export default Private;


import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://afternoon-river-68895.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.starus === 401 || error.response.starus === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])

    return (
        <div>
            <h2>Your Order: {orders.length}</h2>
        </div>
    );
};

export default Order;
import React, { useState, useEffect } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
// import insertTextAtCursor from 'insert-text-at-cursor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from 'react-simple-toasts';
import Modal from 'react-modal';


import 'react-modern-drawer/dist/index.css'

import { GoThreeBars, GoSignOut } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdProductionQuantityLimits, MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi'
import { FaShoppingBag } from 'react-icons/fa'
import { BsCardChecklist } from 'react-icons/bs'

import { Link } from "react-router-dom";


function Carts() {

    const [isOpen, setOpen] = useState(false);


    const [one_cart, setone_cart] = useState(true);
    const [two_cart, settwo_cart] = useState(true);
    const [three_cart, setthree_cart] = useState(true);
    const [four_cart, setfour_cart] = useState(true);

    const [loaded, setLoaded] = useState(false);
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    useEffect(() => {

        if (!loaded) {
            toast.success("Loading your carts ");
            setLoaded(true);
        }

    });


    function delete_item(id) {
        Toast("This item is removed your cart list. ", (2000));

        if (id == 'one')
            setone_cart(false);

        else if (id == 'two')
            settwo_cart(false);

        else if (id == 'three')
            setthree_cart(false);

        else if (id == 'four')
            setfour_cart(false);
    }

    function clear_all() {
        setone_cart(false);
        settwo_cart(false);
        setthree_cart(false);
        setfour_cart(false);
        Toast("All items has been removed from list ", (2000))
    }

    const btnStyle = {
        backgroundColor: '#03adfc',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
    }

    return (
        <div
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
            }}
        >

            <button id='three' style={{ backgroundColor: 'white', fontSize: '25px', position: 'absolute', left: '10px', top: '7px', border: 'none', cursor: 'pointer' }} onClick={() => setOpen(!isOpen)}>
                <GoThreeBars />
            </button>

            <button onClick={() => Toast("You are logged out ", (3000))} style={{ padding: '5px', position: 'absolute', top: '10px', right: '10px', fontSize: '25px', fontWeight: 'bold', color: 'blue', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
                <Link to="/signin">
                    <GoSignOut />
                </Link>
            </button>

            {(one_cart || two_cart || three_cart || four_cart) && <div onClick={() => Toast("This  will redirect you to payment option", (3000))} style={{ borderRadius: '8px', padding: '8px', position: 'absolute', bottom: '10px', right: '10px', fontSize: '20px', color: 'white', backgroundColor: '#0D47A1', cursor: 'pointer' }}>

                Check Out

            </div>}

            {(one_cart || two_cart || three_cart || four_cart) && <div onClick={() => clear_all()} style={{ borderRadius: '8px', padding: '8px', position: 'absolute', bottom: '10px', left: '10px', fontSize: '20px', color: 'white', backgroundColor: '#AB149E', cursor: 'pointer' }}>

                Clear All

            </div>}

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
            />

            <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', top: '1px', position: 'absolute', width: '82%', padding: '30px', backgroundColor: 'deepskyblue', color: 'white', fontWeight: 'bold', fontSize: '24px' }}>

                My Carts

            </div>

            {!one_cart && !two_cart && !three_cart && !four_cart && <div style={{ display: 'flex', justifyContent: 'center' }}>

                <div style={{ borderRadius: '10px', color: 'white', backgroundColor: 'deepskyblue', padding: '15px', fontSize: '22px' }}>
                    There is no item in your list  till yet !
                </div>

            </div>}

            <div style={{ top: '350px' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {one_cart && <div style={{ padding: '10px' }}>

                        <div style={{ padding: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <div onClick={() => delete_item('one')} style={{ color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '10px', borderColor: 'gray', borderWidth: '1px', backgroundColor: 'gray' }}>x</div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>

                                <img style={{ height: '80px', width: '80px', borderRadius: '5px' }} src={'http://ae04.alicdn.com/kf/H0ccd77f27eeb41d9a90407a8a423d57fS.jpg_.webp'} />

                                <div style={{ padding: '5px' }}>

                                    <div style={{ padding: '2px', display: 'flex', justifyContent: 'space-between' }}>

                                        Shirt

                                        <text style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '3px' }}>

                                            300$

                                        </text>

                                    </div>

                                    <div>

                                        Created At 02 / 02 / 2022

                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>

                                        <div style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '5px' }}>

                                            2 Pieces

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div> </div>}

                    {two_cart && <div style={{ padding: '10px' }}>

                        <div style={{ padding: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <div onClick={() => delete_item('two')} style={{ color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '10px', borderColor: 'gray', borderWidth: '1px', backgroundColor: 'gray' }}>x</div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>

                                <img style={{ height: '80px', width: '80px', borderRadius: '5px' }} src={'http://ae04.alicdn.com/kf/H0ccd77f27eeb41d9a90407a8a423d57fS.jpg_.webp'} />

                                <div style={{ padding: '5px' }}>

                                    <div style={{ padding: '2px', display: 'flex', justifyContent: 'space-between' }}>

                                        Shirt

                                        <text style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '3px' }}>

                                            300$

                                        </text>

                                    </div>

                                    <div>

                                        Created At 02 / 02 / 2022

                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>

                                        <div style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '5px' }}>

                                            2 Pieces

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div> </div>}

                    {three_cart && <div style={{ padding: '10px' }}>

                        <div style={{ padding: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <div onClick={() => delete_item('three')} style={{ color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '10px', borderColor: 'gray', borderWidth: '1px', backgroundColor: 'gray' }}>x</div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>

                                <img style={{ height: '80px', width: '80px', borderRadius: '5px' }} src={'http://ae04.alicdn.com/kf/H0ccd77f27eeb41d9a90407a8a423d57fS.jpg_.webp'} />

                                <div style={{ padding: '5px' }}>

                                    <div style={{ padding: '2px', display: 'flex', justifyContent: 'space-between' }}>

                                        Shirt

                                        <text style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '3px' }}>

                                            300$

                                        </text>

                                    </div>

                                    <div>

                                        Created At 02 / 02 / 2022

                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>

                                        <div style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '5px' }}>

                                            2 Pieces

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div> </div>}

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    {four_cart && <div style={{ padding: '10px' }}>

                        <div style={{ padding: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <div onClick={() => delete_item('four')} style={{ color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '10px', borderColor: 'gray', borderWidth: '1px', backgroundColor: 'gray' }}>x</div>

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>

                                <img style={{ height: '80px', width: '80px', borderRadius: '5px' }} src={'http://ae04.alicdn.com/kf/H0ccd77f27eeb41d9a90407a8a423d57fS.jpg_.webp'} />

                                <div style={{ padding: '5px' }}>

                                    <div style={{ padding: '2px', display: 'flex', justifyContent: 'space-between' }}>

                                        Shirt

                                        <text style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '3px' }}>

                                            300$

                                        </text>

                                    </div>

                                    <div>

                                        Created At 02 / 02 / 2022

                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px' }}>

                                        <div style={{ color: 'white', borderRadius: '5px', backgroundColor: 'deepskyblue', padding: '5px' }}>

                                            2 Pieces

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div> </div>}

                </div>

            </div>

            <Drawer
                open={isOpen}
                onClose={() => setOpen(!isOpen)}
                direction='left'
                size={200}
                style={{ padding: 20 }}
            >
                <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div style={{ fontSize: 40, color: 'pink' }}><CgProfile /></div>
                    <div style={{ padding: '4px', fontWeight: 'bolder', color: 'deepskyblue' }}>Your name </div>
                </div>

                <div style={{ marginTop: '50px' }}>

                    <div style={{ borderRadius: '5px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <Link to="/products" style={{ textDecoration: 'none' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                    <MdProductionQuantityLimits />
                                </div>

                                <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                    Products
                                </div>

                            </div>

                        </Link>

                    </div>

                    <div style={{ borderRadius: '5px', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <Link to="/orders" style={{ textDecoration: 'none' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around', outline: 'none' }}>

                                <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                    <BsCardChecklist />
                                </div>

                                <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                    Orders
                                </div>

                            </div>

                        </Link>



                    </div>

                    <div style={{ borderRadius: '5px', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <Link to="/favourites" style={{ textDecoration: 'none' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                    <MdOutlineFavoriteBorder />
                                </div>

                                <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                    Favourites
                                </div>

                            </div>

                        </Link>

                    </div>

                    <div style={{ backgroundColor: '#795548', borderRadius: '5px', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />


                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                <FaShoppingBag />
                            </div>

                            <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                My cart
                            </div>

                        </div>


                    </div>

                    <div style={{ borderRadius: '5px', backgroundColor: 'snow', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <Link to="/profile" style={{ textDecoration: 'none' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                    <HiOutlineUser />
                                </div>

                                <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                    My profile
                                </div>

                            </div>

                        </Link>

                    </div>

                </div>

            </Drawer>
        </div>
    )
}

export default Carts;
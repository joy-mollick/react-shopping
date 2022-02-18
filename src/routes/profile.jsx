import React, { useState, useEffect } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
// import insertTextAtCursor from 'insert-text-at-cursor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from 'react-simple-toasts';


import 'react-modern-drawer/dist/index.css'

import { GoThreeBars, GoSignOut } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdProductionQuantityLimits, MdOutlineFavoriteBorder } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi'
import { FaShoppingBag, FaAddressBook } from 'react-icons/fa'
import { BsCardChecklist } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { AiFillCalendar, AiFillEdit, AiFillPhone ,AiFillCamera} from 'react-icons/ai';

import { Link } from "react-router-dom";


function Profile() {

    const [isOpen, setIsOpen] = useState(false);

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {

        if (!loaded) {
            toast.success("Loading your profile ");
            setLoaded(true);
        }

    });


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

            <button id='three' style={{ backgroundColor: 'white', fontSize: '25px', position: 'absolute', left: '10px', top: '7px', border: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                <GoThreeBars />
            </button>

            <button onClick={()=>Toast("You are logged out ", (3000))} style={{ padding: '5px', position: 'absolute', top: '10px', right: '10px', fontSize: '25px', fontWeight: 'bold', color: 'blue', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
            <Link to="/signin">
                <GoSignOut />
            </Link>
            </button>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
            />

            <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', top: '1px', position: 'absolute', width: '82%', padding: '40px', backgroundColor: 'deepskyblue', color: 'white', fontWeight: 'bold', fontSize: '24px' }}>

                My profile

            </div>

            <div style={{ borderRadius: '10px', padding: '8px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                <div onClick={()=>Toast("It will let you edit the profile", (3000))} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-end', color: 'deepskyblue', padding: '8px', fontSize: '22px' }}><AiFillEdit /></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 70, color: 'grey' }}>
                    
                    <CgProfile />
                    
                    <div onClick={()=>Toast("It will let you upload photo", (3000))} style={{cursor:'pointer',color:'deepskyblue',fontSize:'50px'}}>
                        <AiFillCamera/>
                    </div>

                </div>

                <div style={{ padding: '6px', fontWeight: 'bolder', color: 'deepskyblue' }}>Your name </div>

                <div style={{ marginTop: '10px', display: 'flex', padding: '5px' }}>

                    <BiWorld />

                    <text style={{ marginLeft: '5px' }}>  Living in - Dhaka , Bangladesh .  </text>

                </div>

                <div style={{ display: 'flex', padding: '5px' }}>

                    <FaAddressBook />

                    <text style={{ marginLeft: '5px' }}>  Alibari Road , Sirajganj Sadar , Sirajganj.  </text>

                </div>

                <div style={{ display: 'flex', padding: '5px' }}>

                    <AiFillCalendar />

                    <text style={{ marginLeft: '5px' }}>  Member since 19th february , 2022  </text>

                </div>

                <div style={{ display: 'flex', padding: '5px' }}>

                    <AiFillPhone />

                    <text style={{ marginLeft: '5px' }}>  +88 01521491577  </text>

                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>

                    <div style={{ color: 'blue' }}>Total Orders</div>

                    <div style={{color:'green',borderWidth:'2px',borderColor:'sky',fontWeight:'bold'}}>4</div>

                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>

                    <div style={{ color: 'blue' }}>Cart List</div>

                    <div style={{color:'green',borderWidth:'2px',borderColor:'sky',fontWeight:'bold'}}>2</div>

                </div>

                <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }}>

                    <div style={{ color: 'blue' }}>Favourites</div>

                    <div style={{color:'green',borderWidth:'2px',borderColor:'sky',fontWeight:'bold'}}>8</div>

                </div>

            </div>


            <Drawer
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
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

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

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

                    <div style={{ borderRadius: '5px', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <Link to="/carts" style={{ textDecoration: 'none' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                    <FaShoppingBag />
                                </div>

                                <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                    My cart
                                </div>

                            </div>

                        </Link>

                    </div>

                    <div style={{ backgroundColor: '#795548', borderRadius: '5px', marginTop: '10px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />



                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                <HiOutlineUser />
                            </div>

                            <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                My profile
                            </div>

                        </div>



                    </div>

                </div>

            </Drawer>
        </div>
    )
}

export default Profile
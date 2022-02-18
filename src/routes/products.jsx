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
import { FaShoppingBag } from 'react-icons/fa'
import { BsCardChecklist } from 'react-icons/bs'

import { Link } from "react-router-dom";


function Products() {

    const [isOpen, setIsOpen] = useState(false);

    const [one_fav, setone] = useState(false);
    const [two_fav, settwo] = useState(false);
    const [three_fav, setthree] = useState(false);
    const [four_fav, setfour] = useState(false);
    const [five_fav, setfive] = useState(false);
    const [six_fav, setsix] = useState(false);
    const [seven_fav, setseven] = useState(false)
    const [eight_fav, seteight] = useState(false);

    const [one_cart, setone_cart] = useState(false);
    const [two_cart, settwo_cart] = useState(false);
    const [three_cart, setthree_cart] = useState(false);
    const [four_cart, setfour_cart] = useState(false);
    const [five_cart, setfive_cart] = useState(false);
    const [six_cart, setsix_cart] = useState(false);
    const [seven_cart, setseven_cart] = useState(false)
    const [eight_cart, seteight_cart] = useState(false);

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {

        if (!loaded) {
            toast.success("Loading products ");
            setLoaded(true);
        }

    });

    function added_favourite(id) {
        Toast("This item is added to favourites. ", (3000));

        if (id == 'one') {
            setone(true);
        }

        else if (id == 'two') {
            settwo(true);
        }

        else if (id == 'three') {
            setthree(true);
        }

        else if (id == 'four') {
            setfour(true);
        }

        else if (id == 'five') {
            setfive(true)
        }

        else if (id == 'six') {
            setsix(true)
        }

        else if (id == 'seven') {
            setseven(true)
        }

        else if (id == 'eight') {
            seteight(true);
        }

    }

    function added_cart(id) {

        Toast("This item is added to your carts. ", (3000));

        if (id == 'one') {
            setone_cart(true);
        }

        else if (id == 'two') {
            settwo_cart(true);
        }

        else if (id == 'three') {
            setthree_cart(true);
        }

        else if (id == 'four') {
            setfour_cart(true);
        }

        else if (id == 'five') {
            setfive_cart(true)
        }

        else if (id == 'six') {
            setsix_cart(true)
        }

        else if (id == 'seven') {
            setseven_cart(true)
        }

        else if (id == 'eight') {
            seteight_cart(true);
        }

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

            <div style={{display:'flex',justifyContent:'center',borderRadius:'10px',top:'1px',position:'absolute', width: '82%',padding:'30px',backgroundColor:'deepskyblue',color:'white',fontWeight:'bold',fontSize:'24px'}}>

                Products

            </div>

            <div style={{ marginTop: '350px', padding: '20px' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Shirt
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    300$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'http://ae04.alicdn.com/kf/H0ccd77f27eeb41d9a90407a8a423d57fS.jpg_.webp'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('one')}  style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (one_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{one_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('one')} style={{ color: (one_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Pant
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    350$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://i.pinimg.com/474x/73/84/4f/73844f67f5d9e54bba98cd182c450f45.jpg'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('two')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (two_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{two_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('two')} style={{ color: (two_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Shoe
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    200$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://sneakernews.com/wp-content/uploads/2019/04/fragment-air-jordan-3-white-blue-black-1.jpg'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('three')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (three_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{three_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('three')} style={{ color: (three_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Woman Burqa
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    400$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://static-01.daraz.com.bd/p/d119a8b643282fc5f4b1ddeb14312db8.jpg'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('four')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (four_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{four_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('four')} style={{ color: (four_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Watch
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    100$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://images-platform.99static.com/EqjuTlakwkLvkMc5HPVJt8V_bFk=/983x2:2017x1036/500x500/top/smart/99designs-contests-attachments/87/87860/attachment_87860653'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('five')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (five_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{five_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('five')} style={{ color: (five_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Money Bag
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    50$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://static-01.daraz.com.bd/p/c0eb82b972512321b63c99ce96c09fd5.jpg'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('six')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (six_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{six_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('six')} style={{ color: (six_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Sun Glass
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    70$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://m.media-amazon.com/images/I/51b1vCm3uKL._UL1500_.jpg'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('seven')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (seven_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{seven_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('seven')} style={{ color: (seven_fav ? 'red' : 'black'), cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none' }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>


                    <div style={{ padding: '30px' }}>

                        <div style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.1)' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ padding: '7px', color: 'blue', fontSize: '17px' }}>
                                    Tshirt
                                </div>

                                <div style={{ padding: '7px', color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
                                    150$
                                </div>

                            </div>

                            <div style={{ padding: '5px' }}>

                                <img style={{ height: '200px', width: '200px', borderRadius: '5px' }} src={'https://cdn.rushordertees.com/design/ZoomImage.php?src=NTUyMTM2Mw_f&style=RT2000&colorCode=WHT&x=240&y=300&width=880&height=880&scale=1.7&watermark=false&autoInvertDesign=true'} />

                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', backgroundColor: 'white' }}>

                                <div style={{ padding: '4px' }}>

                                    <div onClick={() => added_cart('eight')} style={{ cursor: 'pointer', display: 'flex', backgroundColor: 'violet', borderRadius: '5px', padding: '8px', color: 'white' }}>

                                        <div style={{ fontSize: '16px' }}>
                                            <MdProductionQuantityLimits />
                                        </div>

                                        <text style={{ color: (eight_cart?'#3E2723':'blue'), padding: '1px', alignItems: 'center' }}>{eight_cart?'Added to Cart':'Add to cart'}</text>

                                    </div>

                                </div>

                                <button onClick={() => added_favourite('eight')} style={{ cursor: 'pointer', padding: '8px', borderRadius: '6px', fontSize: '25px', backgroundColor: 'white', border: 'none', color: (eight_fav ? 'red' : 'black') }}>

                                    <MdOutlineFavoriteBorder />

                                </button>

                            </div>

                        </div>

                    </div>

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

                    <div style={{backgroundColor:'#795548', borderRadius: '5px', display: 'flex', height: '45px', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)' }}>

                        <div style={{ height: '42px', width: '1.5px', backgroundColor: 'blue', fontWeight: 'bold' }} />

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <div style={{ color: 'deepskyblue', marginLeft: '5px', fontSize: '20px' }}>
                                <MdProductionQuantityLimits />
                            </div>

                            <div style={{ color: 'deepskyblue', marginLeft: '25px', fontSize: '20px', fontWeight: 'bold' }}>
                                Products
                            </div>

                        </div>

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

export default Products
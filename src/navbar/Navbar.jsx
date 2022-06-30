
import React,{useState} from 'react'
import "./Navbar.css"

import { useDispatch,useSelector } from 'react-redux'
import { changeEvent, changeTheme } from '../redux/action/action'

import { Link } from 'react-router-dom'
import imgNavbarTop from '../images/1.png'
import logoNavbar from '../images/logo.png'
import {BsCamera,BsSearch,BsCart2,BsSunFill,BsMoonFill,BsFacebook} from 'react-icons/bs'
import { HiOutlineUser,HiMenu } from 'react-icons/hi'
import { TiMessageTyping } from 'react-icons/ti'
import { TbBuildingCastle } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { SiLinkedin} from 'react-icons/si'
import { AiFillTwitterCircle } from 'react-icons/ai'
// import Cart from "./routes/cart/Cart"
// import { Link } from 'react-router-dom'

import flag from '../images/uz.png'
import palace from '../images/palace.png'
import Sidebar from '../components/sidebar/Sidebar'

const Navbar = () => {

  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)
  // console.log(theme);
  const [hoveredBox,setHoveredBox] = useState("")
  const user = useSelector(state => state.user)
  const categories = useSelector(state=>state.categories)
    // console.log("user: ",user);
    // console.log("categories>>>> ",categories)
    const [sidebar, setDidebar] = useState(false)
  return (
    <div>
      <Link to='/'  >
          <div className="navbarTop">
            <img src={imgNavbarTop} alt="" />
          </div>
      </Link>

        <div className="navbarMain ">
          <div className="logoNavbar nav_hover_items"><img src={logoNavbar} alt="" /></div>
          <div className="searchNavbar">
                <div className="navsection ">
                  <select className='nav_hover_items' name="navProducts" id="navProducts">
                    <option value="products">Products</option>
                    <option value="suppliers">Suppliers</option>
                  </select>
                </div>
                <div className="nav_input">
                  <input type="text" placeholder='What are you looking for...' name="search" id="" />
                  <div className="nav_inp_svg">
                    <BsCamera />    
                  </div>                     
                </div>
                <div className="nav_search nav_hover_items">
                  <BsSearch />
                  <h3>Search</h3>
                </div>
          </div>
          <div className="iconsNavbar" > 
                  

                    <div className="sign_in_nav"
                onMouseEnter={()=> setHoveredBox("iconsNavbar") } 
                onMouseLeave={ ()=> setHoveredBox("") }
                >
                < HiOutlineUser className='user' /> 
                  <div className='changedh4'>
                  <Link to="/login">
                      <h4>Sign In</h4>
                      <h4>Join Free</h4>

                  </Link>
                    

                  </div>
                  {
                    hoveredBox === "iconsNavbar"? <div className="iconsNavbars_child">
                        <h4>Welcome Back</h4>
                        <button className="nav_bot_btn_sign_in btn">Sign In</button>
                        <button className="nav_bot_btn_join btn">Join Free</button>
                            <div className="contunue_with">
                            <div></div>
                            <p>Continue With</p>
                            <div></div>
                          </div>
                          <div className="nav_join_icons">
                                <BsFacebook className='facebook'/>
                                <FcGoogle />
                                <SiLinkedin className='SiLinkedin' />
                                <AiFillTwitterCircle className='AiFillTwitterCircle'/>


</div>
                          <div className="nav_sign_n_text">
                            <p>
                                 By sliding to Continue with or Create My Account , I agree to <span>Alibaba.com Free Membership Agreement and Receive Marketing Materials</span>
                            </p>
                          </div>
                          <br />
                          <br />
                          <hr />
                          <br />
                          <br />
                          <h3>My Alibaba</h3>
                          <br />
                          <h4>Manage RFQ</h4>
                          <br />
                          <h4>Orders</h4>
                          <br />
                          <h4>Favorities</h4>
                          <br />
                          <h4>Account</h4>
                          <br />



                    </div> : ""
                  }
                      </div>

                  
            
              
              <div className="masseges_nav"
                 onMouseEnter={()=> setHoveredBox("masseges_nav") } 
                 onMouseLeave={ ()=> setHoveredBox("") }
              >
                  <TiMessageTyping className='message'/>
                  <h4>Messages</h4>
                  {
                    hoveredBox === "masseges_nav"? <div className=" masseges_nav_child">
                      <br />
                      <br />
                        <h4>Do not miss messages</h4>
                          <br />
                        <p>Please log in to view all messages.</p>
                        <br />
                        <button className="nav_bot_btn_sign_in btn">Sign In</button>
                        <br />



                    </div> : ""
                  }

              </div>
              <div className="orders_nav nav_divs"
                   onMouseEnter={()=> setHoveredBox("orders_nav") } 
                   onMouseLeave={ ()=> setHoveredBox("") }
                >
                  <TbBuildingCastle className='crown' />
                  <h4 className='crow'>Orders</h4>

                  {
                    hoveredBox === "orders_nav"? <div className=" masseges_nav_child">
                      <div className="d_flex">
                      <img  height="20px" width="20px" src={palace} alt="" /> <p>Trade Assurance  </p> <p>Learn More</p>
                      </div>

                      <h4>Protects your Alibaba.com  Orders</h4>
                        <h4>Trade  Assurance ensures : </h4>
                        <h4> * Product quality</h4>
                        <h4> * On-Time Shipment</h4>
                    </div> : ""
                  }
              </div>
            
              <div className="cart_nav nav_divs" 
               onMouseEnter={()=> setHoveredBox("cart_nav") } 
               onMouseLeave={ ()=> setHoveredBox("") }
               
                  >
                 <BsCart2 className='cartimg'/>
                 <Link to="/cart">
                  <h4 className='cartwordslar'>Cart</h4>
                 </Link>
                 
                
              </div>
            
          </div>
        </div>


<div className="navnar_bottom">
            <div className={categories? "nav_bot_menu active":"nav_bot_menu"}
              onClick={()=> dispatch(changeEvent())}
            
            >
                <HiMenu />
                <h4 className="thin">Categories</h4>
                <IoIosArrowDown/>
               
            </div>
            {
                  categories && <Sidebar />
                }
            <div className="ready_ship">
                <h4 className="thin">Categories</h4>
            </div>
            <div className="personal">
                <h4 className="thin">Personal Protective E...</h4>
            </div>
            <div className="trade_shows">
                <h4 className="thin">Trade Shows</h4>
            </div>
            <div className="buyer_central">
                <h4 className="thin">Buyer Central</h4>
                <IoIosArrowDown/>
            </div>
            <div className="sell_on_alibaba">
                <h4 className="thin">Sell on Alibaba</h4>
                <IoIosArrowDown/>
            </div>
            <div className="help">
                <h4 className="thin">Help</h4>
                <IoIosArrowDown/>
            </div>

           

            <div className="empty_space">            </div>

            <div className="currency">
                <h4 className="thin">English -USD</h4>
                <IoIosArrowDown/>
            </div>
            <div className="location">
                <h4 className="thin">Ship to:</h4>
                <img src={flag} alt="" />
                <IoIosArrowDown/>
            </div>



        </div>

    </div>
  )
}

export default Navbar
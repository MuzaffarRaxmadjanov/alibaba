import React, { useEffect, useState } from 'react'
import './SinglePage.css'
import { useDispatch,useSelector } from 'react-redux'
import {db} from '../../server/firebase'
import { BsZoomIn,BsUpload } from "react-icons/bs"
import { TbWorld } from "react-icons/tb"


const SinglePage = ({match}) => {
  const [singlePro, setSinglePro] = useState([]);
  const [ malumot,setMalumot] = useState(false)
  function greet() {
    console.log('Hello world');
    setMalumot(true)
}

setTimeout(greet, 5000);
    console.log(match.params.id);
    useEffect(() => {
      db.collection('Alibaba_All_Products').onSnapshot((products) => setSinglePro(products.docs.filter(pro => pro.id == match.params.id).map((pro) => ({
          id: pro.id,
          pro: pro.data()
      }))));
  }, [])
    console.log(">>> ",singlePro);
    // 
  return (
   <div>
            {
              malumot ? 
             <div className='single_Page'>
              <div className="image_container">
                <div className="img_content">
                  <img src={singlePro[0].pro.url} alt="" />
                    
                </div>
                <p> <BsZoomIn /> viewlarger image</p>
                <div className="single_images">
                      <div className="single_image_for_choose">
                       <img src={singlePro[0].pro.url} alt="" />
                      </div>
                      
                  </div>
               
              </div>
        
        
              <div className="infa_container">
                <div><h1 className="single_title">{singlePro[0].pro.title}</h1></div>
                <div className="single_price_text">
                <h4>FOB Reference Price: <span className='link'>Get Latest Price </span></h4>
                </div>
                <br />
                <hr />
                <p>  Pieces(Min. Order)</p>

                <div className="single_price">
                 <div> <h2>${singlePro[0].pro.price} - 
                 $ { singlePro[0].pro.price * 1.8}</h2> </div>
                </div>
                <hr />
               
                <div className="single_pro_data">
                  <br />
                  <h3>Lead Time: </h3>
                          <br />
                          <br />
                  
                          <table>
                              <tr >
                                <th className='singil_td'>Quantity(pieces)  </th>
                                <th className='singil_th'><p>1 - 100</p>  </th>
                                <th className='singil_th'> <p>100</p> </th>
                              </tr>
                              <tr  className='singil'>
                                <td>Est. Time(days)</td>
                                <td>14</td>
                                <td>To be negotiated</td>
                              </tr>
                              
                            </table>
                </div>
        
                <div className="shipping">
                  <h4> Shipping:    Support Sea freight</h4>
                </div>

                <div className="single_world">
                  <h3> <TbWorld /> globalAlibaba.com Freight|
                   <span className="link">Compare</span>
                   <span className="link">Rates</span> | 
                   <span className="link">Learn</span>
                    <span className="link">more</span>
                          </h3>
                </div>
                <button className='singil_cart'>
              Add to Cart
            </button>
            
              </div>
              <div className="extrame_container"></div>
            </div>
               : 
            <div><h1>Loading...</h1></div>
            }

           
   </div>
    
  )
}

export default SinglePage
import React from 'react'
import "./Bannerslider.css"
import { FiChevronRight } from "react-icons/fi"
import Banner from './carusel/Banner'

const Bannerslider = () => {
  return (
    
        <div className='slidebar'>
        
          <div className='firstpart'>
            <div className='firstheadline'><h1 className='headlinetext'>MY MARKETS</h1></div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Consumer Electronics</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Apparel</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB1JdWLUhTpK1RjSZR0762EwXXa6.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Consumer Electronics</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Vehicle Parts & Accessories</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB1AkuTUgHqK1RjSZJn762NLpXa2.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Sport & Entertaiment</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/H5e92ef24edc94162b72c331cbd6fbe6fn.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Machinery</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://sc02.alicdn.com/kf/HTB1RxCkXHys3KVjSZFn760FzpXaP.png_50x50xz.jpg" alt="" />
                <p className='productinfo'>Home & Garden</p>
                <FiChevronRight className='icon1'/>
            </div>
            <div className='forall'>
                <img className='smallimages' src="https://img.alicdn.com/tfs/TB1SFxHuVY7gK0jSZKzXXaikpXa-36-36.png" alt="" />
                <p className='productinfo'>All Categories</p>
                <FiChevronRight className='icon1'/>
            </div>

          </div>

          <div className='secondpart'>
            <Banner/>          
          </div>

          <div className='lastpart'>

             <div className='lastheadline'>
                <h1 className='club'>Buyers Club</h1>
                <p className='clubprice'>US $10 off with a new supplier</p>
                <button className='clubmore'>View more</button>
             </div>
             <div className='tradeshow'><h1 className='showtext'>Online Trade Show</h1></div>

             <div className='reusable'>
                <h1 className='summershow'>2022 Summer Online Trade Show</h1>
                <img className='trade1' src="https://s.alicdn.com/@img/imgextra/i4/O1CN01DRRwSU24GIzjYwt8b_!!6000000007363-0-tps-350-350.jpg_100x100.jpg" alt="" />
             </div>
             <div className='reusable'>
                <h1 className='summershow'>New arrival samples from US $1</h1>
                <img className='trade1' src="https://s.alicdn.com/@img/imgextra/i2/O1CN010oe0vT26TFPrQEOib_!!6000000007662-0-tps-350-350.jpg_100x100.jpg" alt="" />
             </div>
             <div className='reusable'>
                <h1 className='summershow'>10,000 digital booths</h1>
                <img className='trade1' src="https://s.alicdn.com/@img/imgextra/i1/O1CN01KweqPX1Hdk5VKpg1s_!!6000000000781-0-tps-350-350.jpg_100x100.jpg" alt="" />
             </div>

          </div>


        </div>
    
  )
}

export default Bannerslider
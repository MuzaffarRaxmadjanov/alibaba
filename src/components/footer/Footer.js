import React from 'react';
import "./Footer.css";
import appstore from '../footer/footerImg/appstore.png'
import googleplay from '../footer/footerImg/googleplay.png'
import supplier from '../footer/footerImg/supplier.png'
import {  AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
        <footer>
        <div className="footerCont">
        <div className="marginn-div"></div>

            <div className="trade-alert">
                <p>Trade alert- Delivering the latest product trends and industry news straight to your inbox.</p>
               <div className="flex-div">
               <input className='input1' type="text" placeholder=" Your Email"/>
                <button>Subscribe</button>
               </div>
            </div>
            <div className="about-alibaba">
                <ul id="customer-service">
                    <h3>Costomer Service</h3>
                    <li><a href="##">Help Centre</a></li>
                    <li><a href="##">Report Abuse</a></li>
                    <li><a href="##">Submit a Dispute</a></li>
                    <li><a href="##">Policy & Rules</a></li>
                    <li><a href="##">Get paid For Your Feedback</a></li>
                </ul>
                <ul id="About-us">
                    <h3>About Us</h3>
                    <li><a href="##">About alibaba.com</a></li>
                    <li><a href="##">About Group</a></li>
                    <li><a href="##">Sitemap</a></li>
                </ul>
                <ul id="Source-on">
                    <h3>Source on alibaba.com</h3>
                    <li><a href="##">Resources </a></li>
                    <li><a href="##">All Category</a></li>
                    <li><a href="##">Request for Quotation</a></li>
                    <li><a href="##">Ready to ship</a></li>
                    <li><a href="##">Buyer partners</a></li>
                    <li><a href="##">Alibaba.com Select</a></li>
                </ul>
                <ul id="sell-on">
                    <h3>Sell On alibaba.com</h3>
                    <li><a href="##">Supplier Membership</a></li>
                    <li><a href="##">Leraning centre</a></li>
                    <li><a href="##">Partner Program</a></li>
                    
                </ul>
                <ul id="trade-service">
                    <h3>Trade Service</h3>
                    <li><a href="##">Trade Assurance </a></li>
                    <li><a href="##">Business Opportunity</a></li>
                    <li><a href="##">Logistic service </a></li>
                    <li><a href="##">Production Monitering & <br/>inspection Service</a></li>
                    <li><a href="##">Letter of Credit</a></li>
                </ul>
            </div>
            

        </div>
        <div className="social">
            <div className="social-app">
                <p>Download:</p>
                <a href="##"><img src={appstore} alt=""/></a>
                <a className='google' href="##"><img src={googleplay} alt=""/></a>
                
                
            </div>
            <div className="supplier-app">
                <p>Alibaba supplier:</p>
                <a href="##"><img src={supplier} alt=""/></a>
                
            </div>
            <div className="social-media">
                <p>Follow us:</p>
                <a href=""><FaFacebookF/></a>
                <AiOutlineInstagram/>
                <FaTiktok/>
                <FaLinkedinIn/>
                <AiOutlineTwitter/>
            </div>
        </div>
        <div className="additional">
            <p> Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית</p>
            <p>
                Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World <br/>
                     Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security
            </p>
            <p>Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate</p>
            <p>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
            <p ><span >© 1999-2022 Alibaba.com. </span>All rights reserved</p>
            <div className="marginn-div"></div>
        </div>
        </footer>
    </div>
  )
}

export default Footer
import React, {useState} from 'react'
import "./Sidebar.css"
import {FaUserCircle} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"
import {BsArrowLeft} from "react-icons/bs"
import {SIDEBAR_MAIN_DATA} from "../../static/static"

function Sidebar({sideberShow}) {
   const [sidebarMove, setSadiberMove] = useState(false)
   const [extrMenu, setExtraMenu ] = useState()

  document.body.style.overflow = sideberShow ? "hidden" : "auto"

  const findbyId = (id)=>{
      SIDEBAR_MAIN_DATA.forEach((item)=>{
         item.lists.forEach((i)=>{
            if(i.id === id){
               setExtraMenu(i)
            }
         })
      })
  }

  return (
    <div className={ sideberShow ?"sidebar" : "sidebar sideber_hide"}>
       <div className="sidebar_header">
          <FaUserCircle/>
          <span>Hello, Sign, in</span>
       </div>
       <div className={ sidebarMove ? "sidebar_content sidebar_contentToleft" : "sidebar_content"}>
         <div className="sidebar_item">

            {
               SIDEBAR_MAIN_DATA?.map((i, inx)=> (
                  <div key={inx}>
                      <h3 className="sidebar_title">{i.title}</h3>
                        <ul className="sidebar_collection">
                           {i.lists.map((li, inx)=>(
                              <li key={inx} onMouseEnter={()=> findbyId(li.id)} onClick={()=> setSadiberMove(true)}>
                                 <span>{li.name}</span>
                                 <FiChevronRight/>
                              </li>
                           ))}
                           
                        </ul>
                  </div>
               ))
            }

           
         </div>
         <div className="sidebar_item">
            <div onClick={()=> setSadiberMove(false)} className="sidebar_mainMenu">
               <BsArrowLeft/>
               <span>Main Menu</span>
            </div>
            <h3 className="sidebar_title">{extrMenu?.extraData.extraTitle}</h3>
                        <ul className="sidebar_collection">
                           {extrMenu?.extraData.extraItems.map((li, inx)=>(
                              <li key={inx}>
                                 <span>{li}</span>
                              </li>
                           ))}
                           
                        </ul>
                        

         </div>
       </div>
    </div>
  )
}

export default Sidebar
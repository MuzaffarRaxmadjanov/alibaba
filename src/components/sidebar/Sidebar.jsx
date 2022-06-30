import React, { useState } from 'react'
import './Sidebar.css'
import { FiChevronRight } from 'react-icons/fi'
// import { SAIDBAR_MAIN_DATA } from '../../static/static2'
import {SIDEBAR_DATA} from "../../static/Static"

function Sidebar() {

    const [extrMenu, setExtrMenu] = useState()
    const [sidebarCenter, setSidebarCenter] = useState(false)

    const finndById = (id) => {
        SIDEBAR_DATA.forEach((item) => {
            if (item.id === id) {
                setExtrMenu(item)
            }
        })
    }
    // className="s_item"

    return (
        <div className="sidebar">

          
            <ul  className="s_colletion">
                   {
                       SIDEBAR_DATA?.map((li, inx) => (

                                <li
                                    onClick={()=> setSidebarCenter(!sidebarCenter)}
                                    className="s_item"
                                    key={inx} onMouseEnter={() => {
                                        finndById(li.id)
                                    }}
                                >{li.title} <FiChevronRight /></li>
                                ))
                            }
                            </ul>
               
           

            {
                sidebarCenter && <div className="sidebar_right">
                <ul className="s_colletion_center" >
                    {
                        extrMenu.lists?.map((li, inx)=>(
                            <>
                                <h3 className='hash'> {li.title}</h3>
                                <ul className='extraInfos'>
                                    {
                                        li?.themes?.map((li,inx) => (
                                            <li className='li' key={inx}>{li}</li>
                                        ))
                                    }
                                </ul>
                                
                            </>
                        ))
                    }
                </ul>
            </div>
            }

            

        </div>
    )
}

export default Sidebar
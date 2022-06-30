import React,{useState} from 'react'
import { db } from '../../server/firebase'
import './Admin.css'
import { useDispatch,useSelector } from 'react-redux'
import { addUser } from '../../redux/action/action'

const Admin = () => {
    const [title,setTitle] = useState("")
    const[ url,setUrl ] = useState("")
    const [ price,setPrice] = useState(0)
    // const [ category,setCategory]= useState("watches")
    const dispatch = useDispatch()
    const savePro =() =>{
        db.collection("Alibaba_All_Products").add(
            {
                title,
                url,
                price
            }
        )
        setTitle("")
        setUrl("")
        setPrice("")

    }
  return (
    <div className='post_firebase_container'>
      <h1>Admin</h1>
      <div className='post_firebase_container2'>
       <div>
            <h3>Add Products</h3>
            <input type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder="title"
            />
            <input type="text"
            onChange={e => setUrl(e.target.value)}
            value={url}
            placeholder="Url"
            /> <input type="number"
            onChange={e => setPrice(e.target.value)}
            value={price}
            placeholder="Price"
            />
            {/* <select onChange={e=> setCategory(e.target.value)} >
                <option value="watches">watches</option>
                <option value="phones">phones</option>
            </select> */}
            <button onClick={()=> savePro()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Admin
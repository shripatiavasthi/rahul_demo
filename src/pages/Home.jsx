import React from 'react'
import { useNavigate} from 'react-router-dom';

export default function Home() {
   const navigate = useNavigate()
    const onClick = () => {
      navigate('/about')
    }
    return (
      <div style={{background : 'green',  justifyContent : 'center' , alignItems : 'center' , display : 'flex', height : '100vh'}}>
        <button onClick={onClick} style={{ border : '2px solid red' ,  width : '50px'}} >
          About Us
        </button>
      </div>
    )
}

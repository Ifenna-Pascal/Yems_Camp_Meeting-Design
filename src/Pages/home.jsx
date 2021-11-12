import React, {useState} from 'react'
import  Nav  from '../Components/Nav/Nav'
import Sidebar from '../Components/Nav/Sidebar/Sidebar'

function Home() {
    const [open, setOpen] = useState(false);
    const toggle = ()=> {
        setOpen(!open)
    }
    return (
       <>
        <Nav toggle={toggle} open = {open}/>
        <Sidebar open= {open}/>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>

        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>

        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        <h1>WElcome</h1>
        
        <h1>WElcome</h1>
        <h1>WElcome</h1>

       </>
    )
}

export default Home

import React from 'react'
import "./NavBar.css"
import CartWidget from "./subcomponents/CartWidget/CartWidget";

const Navbar = () => {
    return(
        <>
            <div className="StyleNavbar">

                <div className='StyleNavbar__ContainerLogo'>
                    <div className='ContainerLogo__Logo'></div>
                </div>

                <div className='StyleNavbar__ContainerContent'>
                <div className='ContainerContent__ContainerLinks'>
                
                    
                        <a className='ContainerLinks__Text'><h2>Productos</h2></a>
                        <a className='ContainerLinks__Text'><h2>Sobre nosotros</h2></a>
                        <a className='ContainerLinks__Text'><h2>Contacto</h2></a>

                        
                        <CartWidget />
                        
            
                    </div>
                </div>
                

    
        </div>

        </>    
    )
}

export default Navbar;
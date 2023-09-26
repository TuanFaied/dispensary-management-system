import React, { useRef } from 'react'
import logo from '../../Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import './SignUpHeader.css'

function SignUpHeader() {
    const navRef = useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
      }
  return (
    <header>
			<img className='logo'height={60} width={300} src={logo} alt='' />
            <div></div><div></div><div></div><div></div>
			<nav ref={navRef}>
              
				
				<a href="/LogIn">Log In</a>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<MenuIcon />
				</button>
			</nav>
            
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<MenuIcon />
			</button>
		</header>
  )
}

export default SignUpHeader
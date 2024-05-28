import { useState } from "react";
import Logo from "./logo"
import Menu from "./menu"
import SideBarMenu from "./sideBarMenu"



function Header() {
   const [menuVisible, setMenuVisible] = useState(false);

   const responsiveMenu = () => {
      console.log("Button clicked")
      setMenuVisible(!menuVisible);
   };
   const stilosHeader = "flex justify-between bg-emerald-400 w-full h-12"

   return (
      <header className={stilosHeader}>
         <Logo />
         <div className='hidden md:block'>
            <Menu />
         </div>

         <button onClick={responsiveMenu} className="md:hidden">
            {/* Botón con tres líneas */}
            <svg className="w-12 h-8" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
         </button>
         {menuVisible && <SideBarMenu menuVisible={menuVisible} />}
      </header>)
}

export default Header

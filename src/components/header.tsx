import Logo from "./logo"
import Menu from "./menu"



function Header() {
   const stilosHeader = "flex justify-between bg-emerald-400 w-full h-12"
   
   return (
      <header className={stilosHeader}>
         <Logo />
         <Menu />
      </header>
   )
}

export default Header

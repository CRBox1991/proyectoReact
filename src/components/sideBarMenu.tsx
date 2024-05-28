import Menu from "./menu";

type SideBarProps ={
    menuVisible?: boolean
}
 const sideStyles = 'md:hidden absolute top-12 border-black border-2 right-0 w-[200px] h-80 bg-emerald-400 p-10 text-center'

function SideBarMenu({menuVisible}: SideBarProps) {

    return (
        <div className={sideStyles}>
            <Menu menuVisible={menuVisible}/>
        </div>
    );
}

export default SideBarMenu
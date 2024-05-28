import { BsLinkedin } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 

function Footer() {
    const estilosNavBar ="flex justify-around items-center bg-emerald-400 w-full h-12 text-xl font-mono"
    

    const estilosLinks =
    {
        textDecoration: 'none',
        color: 'black',
        width: 100,        
    }

    return (
        <nav  className={estilosNavBar}>
            <a className='links' style={estilosLinks} href=""><BsFacebook /></a>
            <a className='links' style={estilosLinks} href=""><BsInstagram /></a>
            <a className='links' style={estilosLinks} href=""><BsLinkedin /></a>
        </nav>
    )
}

export default Footer
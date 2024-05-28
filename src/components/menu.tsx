import { NavLink } from "react-router-dom";

type MenuProps ={
    menuVisible?: boolean
}

function Menu(props: MenuProps) {
    //let user = null;
  let user = {
    name:'Cristian'
  }

    const {menuVisible} = props;
    const estilosNavBar =`flex items-center justify-end text-xl font-mono ${menuVisible ? 'flex-col': ''}`
    const estilosLinks ='[&.active]:underline [&.active]:text-white  no-underline text-black lg:w-30 lg:inline-block lg:ml-6 mt-2 mr-2'
    
    return (
        <nav className={estilosNavBar}>
            <NavLink className={estilosLinks} to="/">Home</NavLink>            
            {!user && <NavLink className={estilosLinks} to="/login">LogIn</NavLink>}
            {!user && <NavLink className={estilosLinks} to="/register">Register</NavLink>}
            {user && <NavLink className={estilosLinks} to="/bookPage">MyBooks</NavLink>}
            {user && <NavLink className={estilosLinks} to="/update">UpdateBook</NavLink>}
            {user && <NavLink className={estilosLinks} to="/edit">EditBook</NavLink>}
            {user && <NavLink className={estilosLinks} to="/profile">Profile</NavLink>}
        </nav>
    )
}

export default Menu
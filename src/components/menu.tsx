
function Menu() {
    const estilosNavBar = "flex items-center justify-end text-xl font-mono"
    

    const estilosLinks =
    {
        textDecoration: 'none',
        color: 'black',
        width: 100,
    }
    
    return (
        <nav className={estilosNavBar}>
            <a className='links' style={estilosLinks} href="">Home</a>
            <a className='links' style={estilosLinks} href="">MyBooks</a>
            <a className='links' style={estilosLinks} href="">LogIn</a>
        </nav>
    )
}

export default Menu
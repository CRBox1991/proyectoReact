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
            <a className='links' style={estilosLinks} href="">Facebook</a>
            <a className='links' style={estilosLinks} href="">Instagram</a>
            <a className='links' style={estilosLinks} href="">LinkedIn</a>
        </nav>
    )
}

export default Footer
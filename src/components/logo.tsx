


function Logo() {
    const img = "w-12 h-12 ml-8 mr-4";
    const div = " flex items-center"
    const p = "text-xl font-mono"

    
    
    return (
        <div className={div}>
            <img className={img} src='../public/imgs/logoLibros.jpg' alt='' />
            <p className={p}>Welcome to your virtual library</p>
        </div>
    )
}

export default Logo
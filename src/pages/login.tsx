

function Login() {

    const login = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const form = 'flex flex-col justify-around items-center w-80 h-44 border-2 border-emerald-400 rounded-lg'
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4'
    const h1 = 'font-mono text-2xl mb-4'

    return (
        
        <div className={login}>
            <h1 className={h1}>Please logIn</h1>
            <form className={form}>
                <input className={input} type="text" placeholder="Email"/>
                <input className={input} type="password" placeholder="Password" />
            </form>
        </div>
    )
}

export default Login
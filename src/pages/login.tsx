import { useState } from "react"


function Login() {

    const [formLogin, setFormLogin] = useState({
        email: 'dharianfenix@gmail.com',
        password: '1234',

    })

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormLogin({ ...formLogin, [name]: value })
    }

    const login = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const editDiv = 'flex flex-col justify-around items-center'
    const form = 'flex flex-col justify-around items-center w-[400px] h-44 border-2 border-emerald-400 rounded-lg '
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4 font-mono'
    const h1 = 'font-mono text-2xl mb-4'
    const label = 'font-mono w-[70px] w-24'
    const grupos = 'flex w-full h-10 items-center justify-around p-4'

    return (

        <div className={login}>
            <h1 className={h1}>Please logIn</h1>
            <div className={editDiv}>
                <form className={form}>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Email:</label>
                        <input name='email' value={formLogin.email} onChange={HandleInputChange} className={input} type="text" placeholder='Email' />
                    </div>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Password:</label>
                        <input name='password' value={formLogin.password} onChange={HandleInputChange} className={input} type="password" placeholder='Passwword' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
import { useState } from "react"


function Login() {

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    })

    const [loginErrors, setLoginErrors] = useState({
        email: '',
        password: '',
    })

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        const checkErrors = { email: "", password: "" }

        if (name === 'email' && !value) checkErrors.email = 'Email is required';
        if (name === 'password' && value.length < 8) checkErrors.password = 'Password must have minimun 8 characters';
        

        const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (name === 'email' && value.length > 3 && !emailRegex.test(value)) checkErrors.email = 'Email is invalid';

        setLoginErrors({ ...loginErrors, ...checkErrors })
        setFormLogin({ ...formLogin, [name]: value })
    }

    const login = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const editDiv = 'flex flex-col justify-around items-center'
    const form = 'flex flex-col justify-around items-center w-[420px] h-60 border-2 border-emerald-400 rounded-lg '
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4 font-mono'
    const h1 = 'font-mono text-2xl mb-4'
    const label = 'font-mono w-[90px] w-24'
    const grupos = 'flex flex-col w-full h-10 items-center justify-around'
    const grupos2 = 'flex w-full h-10 items-center justify-around p-4'
    const button = 'w-[93%] rounded-lg h-10 mb-3'
    const button2 = 'border-emerald-400 border-2 w-full rounded-lg h-10 pl-4 font-mono bg-emerald-200 hover:bg-emerald-400' 

    return (

        <div className={login}>
            <h1 className={h1}>Please logIn</h1>
            <div className={editDiv}>
                <form className={form}>
                    <div className={grupos}>
                        <div className={grupos2}>
                            <label className={label} htmlFor="">Email:</label>
                            <input name='email' value={formLogin.email} onChange={HandleInputChange} className={input} type="text" placeholder='Email' />
                        </div>
                        <div className='w-[212px]'>
                            {loginErrors.email && <p className="text-[12px] text-red-600">{loginErrors.email}</p>}
                        </div>
                    </div>
                    <div className={grupos}>
                        <div className={grupos2}>
                            <label className={label} htmlFor="">Password:</label>
                            <input name='password' value={formLogin.password} onChange={HandleInputChange} className={input} type="password" placeholder='Passwword' />
                        </div>
                        <div className='w-[300px] ml-[90px]'>
                            {loginErrors.password && <p className=" text-[12px] text-red-600">{loginErrors.password}</p>}
                        </div>
                    </div>
                    <div className={button}>
                        <button className={button2}>LogIn</button>
                    </div>
                </form>
            </div>
            {/* <pre style={{ fontSize: '1rem' }}>
                {JSON.stringify(formLogin, null, 3)}
            </pre> */}
        </div>
    )
}

export default Login
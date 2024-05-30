import { useState } from "react"


function Register() {

    const [formRegister, setFormRegister] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: ''
    })

    const [registerErrors, setRegisterErrors] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password2: ''
    })

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        const checkErrors = { name: '', surname: '', email: '', password: '', password2: '' };

        if (name === 'name' && !value) checkErrors.name = 'Name is required';
        if (name === 'surname' && !value) checkErrors.surname = 'Surname is required';
        if (name === 'email' && !value) checkErrors.email = 'Email is required';
        const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (name === 'email' && value.length > 3 && !emailRegex.test(value)) checkErrors.email = 'Email is invalid';
        if (name === 'password' && !value) checkErrors.password = 'Password is required';
        if (name === 'password' && value.length < 8) checkErrors.password = 'Password must have 8 characters';
        if (name === 'password2' && !value) checkErrors.password2 = 'Password is required';


        setRegisterErrors({ ...registerErrors, ...checkErrors })
        setFormRegister({ ...formRegister, [name]: value })
    }

    const register = 'w-full h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const registerDiv = 'flex flex-col justify-around items-center w-[35%] p-3'
    const form = 'flex flex-col justify-around items-center w-[500px] h-96 border-2 border-emerald-400 rounded-lg p-4'
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4'
    const h1 = 'font-mono text-2xl'
    const button = 'w-full rounded-lg h-10'
    const button2 = 'border-emerald-400 border-2 w-[95%] ml-2 rounded-lg h-10 pl-4 font-mono bg-emerald-200 hover:bg-emerald-400' 
    const label = 'font-mono w-[200px]'
    const grupos = 'flex flex-col w-full h-14 items-center justify-around'
    const grupos2 = 'flex w-full h-10 items-center justify-around p-4'

    return (
        <div className={register}>
            <h1 className={h1}>Register</h1>
            <div className={registerDiv}>
                <form className={form} action="">
                    <div className='flex flex-col items-center justify-around w-full h-full'>

                        <div className={grupos}>
                            <div className={grupos2}>
                                <label className={label} htmlFor="">Name:</label>
                                <input name='name' value={formRegister.name} onChange={HandleInputChange} className={input} type="text" placeholder="Name" />
                            </div>
                            <div className='w-[212px] ml-[90px]'>
                                {registerErrors.name && <p className="text-[12px] text-red-600">{registerErrors.name}</p>}
                            </div>
                        </div>
                        <div className={grupos}>
                            <div className={grupos2}>
                                <label className={label} htmlFor="">Surname:</label>
                                <input name='surname' value={formRegister.surname} onChange={HandleInputChange} className={input} type="text" placeholder='Surname' />
                            </div>
                            <div className='w-[212px] ml-[90px]'>
                                {registerErrors.surname && <p className="text-[12px] text-red-600">{registerErrors.surname}</p>}
                            </div>
                        </div>
                        <div className={grupos}>
                            <div className={grupos2}>
                                <label className={label} htmlFor="">Email:</label>
                                <input name='email' value={formRegister.email} onChange={HandleInputChange} className={input} type="email" placeholder='Email' />
                            </div>
                            <div className='w-[212px] ml-[90px]'>
                                {registerErrors.email && <p className="text-[12px] text-red-600">{registerErrors.email}</p>}
                            </div>
                        </div>
                        <div className={grupos}>
                            <div className={grupos2}>
                                <label className={label} htmlFor="">Password:</label>
                                <input name='password' value={formRegister.password} onChange={HandleInputChange} className={input} type="password" placeholder='Password' />
                            </div>
                            <div className='w-[212px] ml-[90px]'>
                                {registerErrors.password && <p className="text-[12px] text-red-600">{registerErrors.password}</p>}
                            </div>
                        </div>
                        <div className={grupos}>
                            <div className={grupos2}>
                                <label className={label} htmlFor="">Repeat Password:</label>
                                <input name='password2' value={formRegister.password2} onChange={HandleInputChange} className={input} type="password" placeholder='Repeat Password' />
                            </div>
                            <div className='w-[212px] ml-[90px]'>
                                {registerErrors.password2 && <p className="text-[12px] text-red-600">{registerErrors.password2}</p>}
                            </div>
                        </div>
                        <div className={button}>
                            <button className={button2}>Register</button>
                        </div>
                    </div>
                </form>
            </div >
            {/* <pre style={{ fontSize: '1rem' }}>
                {JSON.stringify(formRegister, null, 3)}
            </pre> */}
        </div>
    )
}

export default Register
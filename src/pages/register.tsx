import { useState } from "react"


function Register() {

    const [formRegister, setFormRegister] = useState({
        name: 'empty',
        surname: 'empty',
        email: 'empty',
        password: 'empty',
        password2: 'empty'
    })

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormRegister({ ...formRegister, [name]: value })
    }

    const register = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const registerDiv = 'flex flex-col justify-around items-center w-[35%] h-96 p-3'
    const form = 'flex flex-col justify-around items-center w-[500px] h-96 border-2 border-emerald-400 rounded-lg p-4'
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4'
    const h1 = 'font-mono text-2xl mb-4'
    const button = 'w-full rounded-lg h-10'
    const button2 = 'border-emerald-400 border-2 w-full rounded-lg h-10 pl-4 font-mono'
    const label = 'font-mono w-[200px]'
    const grupos = 'flex w-full h-10 items-center justify-around'

    return (
        <div className={register}>
            <h1 className={h1}>Register</h1>
            <div className={registerDiv}>
                <form className={form} action="">
                    <div className='flex flex-col items-center justify-around w-full h-full'>

                        <div className={grupos}>
                            <label className={label} htmlFor="">Name:</label>
                            <input name='name' value={formRegister.name} onChange={HandleInputChange} className={input} type="text" placeholder="Name" />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Surname:</label>
                            <input name='surname' value={formRegister.surname} onChange={HandleInputChange} className={input} type="text" placeholder='Surname' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Email:</label>
                            <input name='email' value={formRegister.email} onChange={HandleInputChange} className={input} type="email" placeholder='Book Id' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Password:</label>
                            <input name='password' value={formRegister.password} onChange={HandleInputChange} className={input} type="password" placeholder='Photo' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Repeat Password:</label>
                            <input name='password2' value={formRegister.password2} onChange={HandleInputChange} className={input} type="password" placeholder='Price' />
                        </div>
                        <div className={button}>
                            <button className={button2}>Add Book</button>
                        </div>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Register
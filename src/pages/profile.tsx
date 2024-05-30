import { useState } from "react"



function Profile() {
    const [formProfile, setFormProfile] = useState({
        name: 'Cristian',
        surname: 'Redondo Caja',
        email: 'daharianfenix@gmail.com',
        photo: 'https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg'
    })

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormProfile({ ...formProfile, [name]: value })
    }


    const profile = 'w-full min-h-[86vh] flex justify-around items-center flex-wrap gap-4 '
    const profileDiv = 'flex flex-col justify-around items-center border-2 rounded border-emerald-500 w-[35%] h-96 p-3'
    const img = ' w-[200px] h-[200px] mb-4'
    const img2 = 'rounded-full w-[200px] h-[200px]'
    const ps = 'font-mono text-2xl mb-4 text-center'
    const input = 'border-emerald-400 border-2 w-[300px] rounded-lg h-10 pl-4 font-mono'
    const button = 'w-[92%] rounded-lg h-10 mb-5'
    const button2 = 'border-emerald-400 border-2 w-[95%] ml-2 rounded-lg h-10 pl-4 font-mono bg-emerald-200 hover:bg-emerald-400 ' 
    const label = 'font-mono w-[70px]'
    const grupos = 'flex w-full h-10 items-center justify-around'


    return (
        <div className={profile}>
            <div className={profileDiv}>
                <div className={img}>
                    <div><img className={img2} src={formProfile.photo} alt="" /></div>
                </div>
                <div className={ps}><p>{formProfile.name}</p></div>
                <div className={ps}><p>{formProfile.surname}</p></div>
                <div className={ps}><p>{formProfile.email}</p></div>
            </div>
            <div className={profileDiv}>
                <div className='flex flex-col items-center justify-around w-full h-full'>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Name:</label>
                        <input onChange={HandleInputChange} name='name' className={input} type="text" value={formProfile.name} placeholder="Name" />
                    </div>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Surname:</label>
                        <input onChange={HandleInputChange} name='surname' className={input} type="text" value={formProfile.surname} placeholder='Surname' />
                    </div>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Email:</label>
                        <input onChange={HandleInputChange} name='email' className={input} type="text" value={formProfile.email} placeholder='Email' />
                    </div>
                    <div className={grupos}>
                        <label className={label} htmlFor="">Photo:</label>
                        <input onChange={HandleInputChange} name='photo' className={input} type="text" value={formProfile.photo} placeholder='Photo' />
                    </div>
                </div>
                <div className={button}>
                    <button type="button" className={button2}>Edit</button>
                </div>
            </div >
            {/* <pre style={{ fontSize: '1rem' }}>
                {JSON.stringify(formProfile, null, 3)}
            </pre> */}
        </div >
    )
}

export default Profile
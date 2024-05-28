


function Profile() {

    const profile = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4 '
    const img = ' w-[300px] h-[300px] mb-4'
    const img2 = 'rounded-full w-[300px] h-[300px]'
    const ps = 'font-mono text-2xl mb-4 text-center'

    return (
        <div className={profile}>
            <div>
                <div className={img}>
                    <div><img className={img2} src="https://t3.ftcdn.net/jpg/02/98/94/38/360_F_298943877_A4W7tVyZPCu6gNGuGXJUerZbXsWmblLb.jpg" alt="" /></div>
                </div>
                <div className={ps}><p>Cristian</p></div>
                <div className={ps}><p>Redondo Caja</p></div>
                <div className={ps}><p>dharianfenix@gmail.com</p></div>
            </div>
        </div>
    )
}

export default Profile
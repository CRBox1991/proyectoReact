



function UpdateBook(){

    const update = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const editDiv = 'flex flex-col justify-around items-center'
    const form = 'flex flex-col justify-around items-center w-[400px] h-96 border-2 border-emerald-400 rounded-lg p-4'
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4 font-mono'
    const h1 = 'font-mono text-2xl mb-4'
    const button = 'w-full rounded-lg h-10 mb-3'
    const button2 = 'border-emerald-400 border-2 w-full rounded-lg h-10 pl-4 font-mono'
    const label = 'font-mono w-[70px]'
    const grupos = 'flex w-full h-10 items-center justify-around'

    return(
        <div className={update}>
            <h1 className={h1}>Update your book</h1>
            <div className={editDiv}>
                <form className={form} action="">
                    <div className='flex flex-col items-center justify-around w-full h-full'>

                        <div className={grupos}>
                            <label className={label} htmlFor="">Title:</label>
                            <input className={input} type="text" placeholder="Title" />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Author:</label>
                            <input className={input} type="text" placeholder='Author' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Photo:</label>
                            <input className={input} type="text" placeholder='Photo' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Price:</label>
                            <input className={input} type="text" placeholder='Price' />
                        </div>
                        <div className={grupos}>
                            <label className={label} htmlFor="">Id:</label>
                            <input className={input} type="text" placeholder='Book Id' />
                        </div>
                    </div>

                    <div className={button}>
                        <button className={button2}>Update Book</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateBook
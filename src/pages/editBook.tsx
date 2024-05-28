


function EditBook() {

    const edit = 'w-full min-h-[86vh] flex flex-col justify-center items-center flex-wrap gap-4'
    const form = 'flex flex-col justify-around items-center w-80 h-96 border-2 border-emerald-400 rounded-lg'
    const input = 'border-emerald-400 border-2 w-5/6 rounded-lg h-9 pl-4'
    const h1 = 'font-mono text-2xl mb-4'

    return (
        <div className={edit}>
            <h1 className={h1}>Register</h1>
            <form className={form} action="">
            <input className={input} type="text"placeholder="Title"/>
                <input className={input} type="text" placeholder="Author"/>
                <input className={input} type="text" placeholder="Photo"/>
                <input className={input} type="text" placeholder="Price"/>
                <input className={input} type="text" placeholder="Type"/>
                <input className={input} type="text" placeholder="Book Id"/>
            </form>
        </div>
    )
}

export default EditBook
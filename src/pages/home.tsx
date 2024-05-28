

function HomePage() {

    const h1 = 'font-mono text-2xl text-white border-4 border-emerald-500 p-4 rounded bg-black'
    const div = 'w-full min-h-[86vh] flex flex-col justify-center items-center bg-[url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg)] bg-cover'

    return (
        <div className={div}>
            <h1 className={h1}>Bienvenido a tu biblioteca virtual</h1>
        </div>
    )


}

export default HomePage
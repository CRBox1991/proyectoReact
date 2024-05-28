import BookList from "../components/bookList"


function BookPage() {
    
    const stilosHome = " border-2 border-black w-full min-h-[84vh]"

    return (
        <main className={stilosHome}>
            <BookList/>
        </main>
    )
}

export default BookPage
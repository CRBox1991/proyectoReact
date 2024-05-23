import Book from "../components/bookItem"
import BookList from "../components/bookList"


function BookPage() {
    // const book = {
    //     id_book: 1,
    //     id_user: 1,
    //     title: 'Caperucita Roja',
    //     author: 'Jacked Jhons',
    //     photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocjE_mrBvWiREmlE6-vvH8K1jEoT8TiMW43toYmsYfw&s',
    //     price: 12.99,
    //     type: 'Tapa dura'
    // }
    const stilosHome = " border-2 border-black w-full min-h-[84vh]"

    return (
        <main className={stilosHome}>
            <BookList/>
        </main>
    )
}

export default BookPage
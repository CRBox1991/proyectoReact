import bookArray from "./bookArray";
import BookItem from "./bookItem";


function BookList(){
    const list = 'flex justify-around flex-wrap gap-y-1.5'
    return (
        <div className={list}>
            {bookArray.map((book)=><BookItem key={book.id_book} book={book}/>)}
        </div>
    )
}

export default BookList
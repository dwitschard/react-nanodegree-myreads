import { Book } from "../../../shared/components/Book";
import { PropTypes } from "prop-types";

export const BookShelf = ({ books, title, onShelfSelectHandler }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              onShelfSelectHandler={onShelfSelectHandler}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

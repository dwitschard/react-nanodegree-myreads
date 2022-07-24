import { Link } from "react-router-dom";
import { BookShelf } from "./components/BookShelf";

export const MyReadsContainer = ({ books, onShelfSelectHandler }) => {
  const getBooksByCategory = (books, category) =>
    books.filter((book) => book.shelf === category);

  const categories = [
    { key: "read", value: "Read" },
    { key: "currentlyReading", value: "Currently Reading" },
    { key: "wantToRead", value: "Want to Read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {categories.map((category) => (
            <BookShelf
              onShelfSelectHandler={onShelfSelectHandler}
              key={category.key}
              books={getBooksByCategory(books, category.key) || []}
              title={category.value}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

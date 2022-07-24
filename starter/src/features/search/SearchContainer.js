import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import { useState } from "react";
import { Book } from "../../shared/components/Book";
import { toDomain } from "../../utils";

export const SearchContainer = ({ booksInShelf, onShelfSelectHandler }) => {
  const [searchResults, setSearchResults] = useState([]);

  const triggerSearch = async (query, maxResults = 20) => {
    let res = null;
    if (query && query.length > 0) {
      res = await BooksAPI.search(query, maxResults);
    }
    if (res && !res.error) {
      setSearchResults(
        res.map((book) => {
          const isInShelf = booksInShelf.find(
            (shelfBook) => shelfBook.id === book.id
          );
          return toDomain(book, isInShelf ? isInShelf.shelf : book.shelf);
        })
      );
    } else {
      setSearchResults([]);
    }
  };

  const searchChangeHandler = (e) => {
    e.preventDefault();
    return triggerSearch(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchChangeHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults
            .filter((book) => !!book)
            .map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfSelectHandler={onShelfSelectHandler} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

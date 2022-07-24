import "./App.css";
import { SearchContainer } from "./features/search/SearchContainer";
import { Route, Routes } from "react-router-dom";
import { MyReadsContainer } from "./features/my-reads/MyReadsContainer";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { toDomain } from "./utils";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res.map((book) => toDomain(book)));
    };
    getBooks();
  }, []);

  const onShelfChangeHandler = (bookToUpdate, shelf) => {
    const updateBook = async () => {
      await BooksAPI.update(bookToUpdate, shelf);
    };
    updateBook();
    setBooks([
      ...books.filter((book) => book.id !== bookToUpdate.id),
      {
        ...bookToUpdate,
        shelf,
      },
    ]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MyReadsContainer
              onShelfSelectHandler={onShelfChangeHandler}
              books={books}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchContainer
              booksInShelf={books}
              onShelfSelectHandler={onShelfChangeHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

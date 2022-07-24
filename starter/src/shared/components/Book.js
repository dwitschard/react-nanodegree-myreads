import PropTypes from "prop-types";
import { bookCategories, toCommaSeparatedString } from "../utils";

export const Book = ({
  book,
  onShelfSelectHandler,
  showShelfChanger = true,
}) => {
  return (
    (book && (
      <div className="book">
        <div className="book-top">
          <BookCover backgroundImage={book.thumbnail} />
          {showShelfChanger && (
            <BookShelfChanger
              shelf={book.shelf}
              onSelect={(selectedShelf) => {
                book.shelf = selectedShelf;
                onShelfSelectHandler(book, selectedShelf);
              }}
            />
          )}
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {toCommaSeparatedString(book.authors)}
        </div>
      </div>
    )) || <></>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  showShelfChanger: PropTypes.bool,
  onShelfSelectHandler: PropTypes.func.isRequired,
};

const BookCover = ({ height = 193, width = 128, backgroundImage }) => {
  return (
    <div
      className="book-cover"
      style={{
        width,
        height,
        backgroundImage: "url(" + backgroundImage + ")",
      }}
    />
  );
};

const BookShelfChanger = ({ onSelect, shelf }) => {
  const onChangeHandler = (onSelect) => {
    return (e) => {
      e.preventDefault();
      return onSelect(e.target.value);
    };
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeHandler(onSelect)} value={shelf || "none"}>
        <option value="none" disabled>
          Move to...
        </option>
        {bookCategories.map((category) => (
          <option key={category.key} value={category.key}>
            {category.value}
          </option>
        ))}
      </select>
    </div>
  );
};

BookCover.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundImage: PropTypes.string.isRequired,
};

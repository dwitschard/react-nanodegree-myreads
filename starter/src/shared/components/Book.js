import { BookShelfChanger } from "./BookShelfChanger";
import PropTypes from "prop-types";

const toCommaSeparatedString = (list) => {
  if (list) {
    return list.join(", ");
  }
  return list;
};

export const Book = ({
  book,
  showShelfChanger = true,
  onShelfSelectHandler,
}) => {
  return (
    (book && (
      <div className="book">
        <div className="book-top">
          <BookCover backgroundImage={book.thumbnail} />
          {showShelfChanger && (
            <BookShelfChanger
              shelf={book.shelf}
              onSelect={(selectedShelf) =>
                onShelfSelectHandler(book, selectedShelf)
              }
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

BookCover.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundImage: PropTypes.string.isRequired,
};

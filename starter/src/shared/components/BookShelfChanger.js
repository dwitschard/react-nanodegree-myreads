export const BookShelfChanger = ({ onSelect, shelf }) => {
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
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

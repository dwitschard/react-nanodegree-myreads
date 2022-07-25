export const toDomain = (book, overridingShelf) => {
  const { id, title, authors, shelf, imageLinks } = book;
  return {
    id,
    title,
    authors,
    thumbnail: book.thumbnail || imageLinks ? imageLinks.thumbnail : null,
    shelf: overridingShelf || shelf,
  };
};

export const bookCategories = [
  { key: "read", value: "Read" },
  { key: "currentlyReading", value: "Currently Reading" },
  { key: "wantToRead", value: "Want to Read" },
];

export const toCommaSeparatedString = (list) => (list ? list.join(", ") : list);

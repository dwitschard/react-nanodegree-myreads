export const toDomain = (book, overridingShelf) => {
  const { id, title, authors, shelf, imageLinks } = book;
  return {
    id,
    title,
    authors,
    thumbnail: book.thumbnail || imageLinks.thumbnail,
    shelf: overridingShelf || shelf,
  };
};

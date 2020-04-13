function bookController(Book) {
  /* POST */
  function post(req, res) {
    const book = new Book(req.body);
    if (!req.body.title) {
      res.status(400);
      return res.send('Title is required');
    }
    console.log(`Inserting ${JSON.stringify(req.body)}`);
    book.save();
    res.status(201);
    return res.json(book);
  }
  /* GET */
  function get(req, res) {
    const { query } = req;
    console.log(`Fetching Book by query ${JSON.stringify(query)}`);
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      const returnBooks = books.map((book) => {
        const newBook = books.toJSON();
        newBook.links = {};
        // eslint-disable-next-line no-underscore-dangle
        newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
        return newBook;
      });
      return res.json(returnBooks);
    });
  }
  // revealing module pattern
  return { post, get };
}

module.exports = bookController;

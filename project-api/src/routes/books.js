import express from "express";

const router = express.Router();

router.get("/search", (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: "1984",
        authors: "Orwell",
        covers: [
          "http://booksat.scarlettrugers.com/bookcoverdesign/wp-content/uploads/2013/10/1984-60th-anniversary-edition-1.jpeg",
          "http://booksat.scarlettrugers.com/bookcoverdesign/wp-content/uploads/2013/10/1984-book-cover.jpeg",
        ],
        pages: 198,
      },
      {
        goodreadsId: 2,
        title: "The Stranger",
        authors: "Albert Camus",
        covers: [
          "https://images-na.ssl-images-amazon.com/images/I/5186RLIXsLL._SX321_BO1,204,203,200_.jpg",
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/L%E2%80%99%C3%89tranger_%28Camus_novel%29.jpg/220px-L%E2%80%99%C3%89tranger_%28Camus_novel%29.jpg",
        ],
        pages: 97,
      },
    ],
  });
});

export default router;

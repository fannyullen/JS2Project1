const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = new Database("./db/products.db", {
    verbose: console.log,
});

const port = 8000;

const app = express();

const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/å/g, "a")
      .replace(/ä/g, "a")
      .replace(/ö/g, "o")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

app.use(cors(/* {
    origin: ["http://localhost:3000"]
} */));

app.use(bodyParser.json());
/* app.use(express.json()); */

// GET /api/products
app.get("/api/products", (req, res) => {

    const select = db.prepare("SELECT id, productName, productPrice, description, category, color, image, SKU, publishDate, urlSlug FROM products")

    const products = select.all();

    res.json(products);
});

// GET /api/products/:urlSlug
app.get("/api/products/:urlSlug", (req, res) => {

    const { urlSlug } = req.params;

    const select = db.prepare("SELECT id, productName, productPrice, description, category, color, image, SKU, publishDate, urlSlug FROM products WHERE urlSlug = ?");

    const product = select.get(urlSlug);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
})

// GET search
app.get("/api/search", (req, res) => {
    const query = req.query.q;

    if (!query) return res.json([]);

    const stmt = db.prepare("SELECT * FROM products WHERE productName LIKE ?");
    
    const products = stmt.all(`%${query}%`);

    res.json(products);
})

// POST anrop
app.post('/api/products', (req, res) => {
    /* const { productName, description, category, color, image, SKU, productPrice, publishDate } = req.body;
    const product = { productName, description, category, color, SKU, image, productPrice, publishDate } */

    const product = {
        productName: req.body.productName,
        description: req.body.description,
        category: req.body.category,
        color: req.body.color,
        image: req.body.image,
        SKU: req.body.SKU,
        productPrice: req.body.productPrice,
        publishDate: new Date().toISOString(),
        urlSlug: slugify(req.body.productName)
    }

    const insert = db.prepare(`
        INSERT INTO products (
        productName,
        description, 
        category,
        color,
        image,
        SKU,
        productPrice,
        publishDate,
        urlSlug
        ) VALUES (
         @productName,
         @description,
         @category,
         @color,
         @image,
         @SKU,
         @productPrice,
         @publishDate,
         @urlSlug
        )
        `);

        insert.run(product);

    res.status(201).send();
});

// DELETE-anrop
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const stmt = db.prepare("DELETE FROM products WHERE id = ?");
    const result = stmt.run(id);

    if (result.changes > 0) {
        res.status(200).json({ message: "Produkten raderades." });
    } else {
        res.status(404).json({ message: "Produkten hittades inte."})
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
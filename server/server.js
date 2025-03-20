const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = new Database("./db/products.db", {
    verbose: console.log,
});

const port = 5175;

const app = express();

app.use(cors(/* {
    origin: ["http://localhost:3000"]
} */));

app.use(bodyParser.json());
/* app.use(express.json()); */

// GET /api/products
app.get("/api/products", (req, res) => {

    // Prepare the SELECT query
    const select = db.prepare("SELECT id, productName, productPrice, description, category, color, image, SKU, urlSlug FROM products")

    // Execute the query and fetch all rows
    const products = select.all();

    res.json(products); // response, the products, in json format
});

// GET /api/products/:id
app.get("/api/products/:id", (req, res) => {

    const productId = req.params.id;

    const select = db.prepare("SELECT id, productName, productPrice, description, category, color, image, SKU, urlSlug FROM products WHERE id = ?");

    const product = select.get(productId);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
})

// GET search
app.get("/api/search", (req, res) => {
    // Vi vill komma åt värdet (query) i input-fältet
    const query = req.query.q;

    if (!query) return res.json([]);

    // Hämtar data från backend
    const stmt = db.prepare("SELECT * FROM products WHERE productName LIKE ?");
    //Filtrerar
    const products = stmt.all(`%${query}%`);

    // Response
    res.json(products);
})

app.post('/api/products', (req, res) => {
    const { productName, description, category, color, image, SKU, productPrice } = req.body;
    const product = { productName, description, category, color, SKU, image, productPrice }

    const insert = db.prepare(`
        INSERT INTO products (
        productName,
        description, 
        category,
        color,
        image,
        SKU,
        productPrice
        ) VALUES (
         @productName,
         @description,
         @category,
         @color,
         @image,
         @SKU,
         @productPrice
        )
        `);

        insert.run(product);

    res.status(201).send()
});

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
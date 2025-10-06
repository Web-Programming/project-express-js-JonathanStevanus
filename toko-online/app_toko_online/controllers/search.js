var products = require('../../data/products.json');

exports.searchByID = (req, res) => {
  
    const q = req.query.q ? req.query.q.toLowerCase() : "";
  
    let filteredProducts;
    if (q === "") {
    
        filteredProducts = products;
    } else {
        filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(q));
    };
    res.render("index", {
        title: "Hasil Pencarian",
        products: filteredProducts,
        isSearch: true,
        keyword: req.query.q
    });
};

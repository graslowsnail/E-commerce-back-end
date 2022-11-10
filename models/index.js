// import models
const Product = require("./Product.js");
const Category = require("./Category.js");
const Tag = require("./Tag.js");
const ProductTag = require("./ProductTag.js");

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Product
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "product_tags",
  foreignKey: "product_id",
});

// Tags belongToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "product_tags",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

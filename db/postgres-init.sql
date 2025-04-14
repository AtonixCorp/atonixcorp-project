CREATE TABLE product_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

INSERT INTO product_table (name, description)
VALUES ('Sample Product', 'This is a sample product description.');
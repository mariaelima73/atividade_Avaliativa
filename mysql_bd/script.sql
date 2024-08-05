CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255),
description TEXT,
category VARCHAR(255),
price DECIMAL(10,2),
stock INT,
expiry_date DATE
);

INSERT INTO `products` VALUES
(1, 'Creme de avelã', 'Creme de leite com avelã', 'Creme', 4.99, 20, 20250625),
(2, 'Creme com passas', 'Creme de leite com passas', 'Creme', 4.99, 15, 20250601),
(3, 'Sorvete de bacuri', 'Sorvete sabor bacuri', 'Sorvete', 11.99, 8, 20241212),
(4, 'Sorvete de cajá', 'Sorvete sabor cajá', 'Sorvete', 11.99, 7, 20250114),
(5, 'Picolé de chocolate', 'Picolé sabor chocolate', 'Picolé', 3.99, 18, 20241030),
(6, 'Picolé de abóbora', 'Picolé sabor abóbora', 'Picolé', 3.99, 15, 20241028);

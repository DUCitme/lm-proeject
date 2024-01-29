CREATE DATABASE bookstore;

USE bookstore;

CREATE TABLE category(
    categoryid INT PRIMARY KEY AUTO_INCREMENT,
    categoryname VARCHAR(255)
);

INSERT INTO category (categoryname)
VALUES
    ('Sách Ngoại Ngữ'),
    ('Sách Kĩ Năng Sống'),
    ('Tiểu Thuyết'),
    ('Sách Thiếu Nhi'),
    ('Sách Cho Teen');

SELECT * FROM category;

CREATE TABLE languages(
    languageid INT PRIMARY KEY AUTO_INCREMENT,
    languagename VARCHAR(255)
);

INSERT INTO languages (languagename)
VALUES
    ('Tiếng Anh'),
    ('Tiếng Việt'),
    ('Tiếng Nhật');

SELECT * FROM languages;

CREATE TABLE publishers(
    publisherid INT PRIMARY KEY AUTO_INCREMENT,
    publishername VARCHAR(255)
);

INSERT INTO publishers (publishername)
VALUES
    ('XB Kim Đồng'),
    ('NXB Thế Giới'),
    ('NXB Hà Nội'),
    ('NXB Hồng Đức'),
    ('NXB Dân Trí');

SELECT * FROM languages;
SELECT * FROM publishers;
SELECT * FROM category;

CREATE TABLE book(
    bookid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    categoryid INT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    description VARCHAR(255) NOT NULL,
    stockquantity INT NOT NULL,
    isbn VARCHAR(50) NOT NULL,
    publishedDate VARCHAR(255) NOT NULL DEFAULT '2020-01-01',
    image VARCHAR(255) NOT NULL,
    languageID INT,
    publisherID INT,
    weight INT,
    page INT,
    dimensions VARCHAR(20),
    featured BOOLEAN,
    bestseller BOOLEAN,
    FOREIGN KEY (categoryid) REFERENCES category(categoryid),
    FOREIGN KEY (languageID) REFERENCES languages(languageid),
    FOREIGN KEY (publisherID) REFERENCES publishers(publisherid)
);

DROP TABLE book;

-- Insert into book table here

INSERT INTO book (title, author, categoryid, price, description, stockquantity, isbn, publishedDate, image, languageID, publisherID, weight, page, dimensions, featured, bestseller)
VALUES ('The Alchemist', 'Paulo Coelho', 3, 100000, 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.', 100, '9780062315007', '1988', 'https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg', 1, 1, 100, 100, '20 x 20 x 20', 1, 1);


CREATE TABLE Customer (
    customerid INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(15) NOT NULL
);

-- Insert into customer table here

CREATE TABLE orders(
    orderid INT PRIMARY KEY AUTO_INCREMENT,
    customerid INT,
    orderdate VARCHAR(255) NOT NULL,
    totalamount VARCHAR(255) NOT NULL,
    orderstatus VARCHAR(255) NOT NULL,
    shippingaddress VARCHAR(255) NOT NULL,
    paymentmethod VARCHAR(255) NOT NULL,
    FOREIGN KEY (customerid) REFERENCES Customer(customerid)
);

CREATE TABLE ordersdetail(
    orderdetailid INT PRIMARY KEY AUTO_INCREMENT,
    orderid INT,
    bookid INT,
    quantity INT,
    subtotal DECIMAL(15,2),
    FOREIGN KEY (orderid) REFERENCES orders(orderid),
    FOREIGN KEY (bookid) REFERENCES book(bookid)
);

CREATE TABLE reviews(
    reviewID INT PRIMARY KEY AUTO_INCREMENT,
    bookid INT,
    customerid INT,
    rating INT,
    comment VARCHAR(255) NOT NULL,
    reviewdate VARCHAR(255) NOT NULL,
    FOREIGN KEY (customerid) REFERENCES Customer(customerid),
    FOREIGN KEY (bookid) REFERENCES book(bookid)
);

CREATE TABLE favorites(
    favoriteID INT PRIMARY KEY AUTO_INCREMENT,
    bookid INT,
    customerid INT,
    FOREIGN KEY (customerid) REFERENCES Customer(customerid),
    FOREIGN KEY (bookid) REFERENCES book(bookid)
);

CREATE TABLE promotion (
    promotionID INT PRIMARY KEY,
    promoCode VARCHAR(50),
    discount DECIMAL(5, 2),
    startdate DATE,
    enddate DATE
);

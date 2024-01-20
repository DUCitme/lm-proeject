create database Project4
go

 use Project4
 go


CREATE TABLE Book (
    BookID INT PRIMARY KEY IDENTITY,
    Title VARCHAR(255),
    Author VARCHAR(255),
    [Description] TEXT,
    Price DECIMAL(10, 2),
    CategoryID VARCHAR(50),
    StockQuantity INT,
    ImageURL VARCHAR(255)
);
CREATE TABLE  Category (
 CategoryID  INT PRIMARY KEY IDENTITY,
 CatagoryName VARCHAR(255),
    


);
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY IDENTITY,
    Username VARCHAR(50),
    [Password] VARCHAR(50),
    FullName VARCHAR(255),
    [Address] VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Email VARCHAR(255)
);



CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    CustomerID INT,
    OrderDate DATE,
    TotalPrice DECIMAL(10, 2),
    OrderStatus VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);


CREATE TABLE OrderDetail (
    OrderDetailID INT PRIMARY KEY IDENTITY,
    OrderID INT,
    BookID INT,
    Quantity INT,
    UnitPrice DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (BookID) REFERENCES Book(BookID)
);


CREATE TABLE Review (
    ReviewID INT PRIMARY KEY IDENTITY,
    CustomerID INT,
    BookID INT,
    Content TEXT,
    Rating INT,
    ReviewDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (BookID) REFERENCES Book(BookID)
);


CREATE TABLE Promotion (
    PromotionID INT PRIMARY KEY,
    PromoCode VARCHAR(50),
    Discount DECIMAL(5, 2),
    StartDate DATE,
    EndDate DATE
);
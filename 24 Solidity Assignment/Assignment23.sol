//SPDX-License-Identifier:MIT

pragma solidity >=0.7.0 <0.9.0;

contract structure {
    struct Book {
        string title;
        string author;
        uint bookID;
        uint price;
    }
    // define a struct- name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book = Book("Blokchain for beginners", "Ineuron", 4, 1000);
    }

    function getBookId() public view returns (uint) {
        return book.bookID;
    }

    function getBookTitle() public view returns (string memory) {
        return book.title;
    }

    function getBookAuthor() public view returns (string memory) {
        return book.author;
    }
   
    function getBookPrice() public view returns (uint) {
        return book.price;
    }
}

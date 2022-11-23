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
    
    //23529 gas (Cost only applies when called by a contract)
    function getBookId() public view returns (uint) {
        return book.bookID;
    }

    //23485 gas (Cost only applies when called by a contract)
    function getBookTitle() public view returns (string memory) {
        return book.title;
    }
    
    //24599 gas (Cost only applies when called by a contract)
    function getBookAuthor() public view returns (string memory) {
        return book.author;
    }
   
    //23485 gas (Cost only applies when called by a contract)
    function getBookPrice() public view returns (uint) {
        return book.price;
    }
}

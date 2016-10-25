(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        global.UAM.library.push(
        {
            categoryName: newCategoryName,
            books: []
        });
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        for (var index = 0; index < global.UAM.library; index++)
        {
            if (global.UAM.library[index].categoryName === categoryObject.categoryName)
            {
                global.UAM.library.splice(index, 1);
            }
        }
        
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        var index = global.UAM.library.indexOf(categoryObject);
        global.index.library[index].books.push(
        {
            title: title,
            count: count
        }
        )
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        for (var categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex++)
        {
            for (var bookIndex = 0; bookIndex < global.UAM.library[categoryIndex].books.length; bookIndex++)
            {
                if (global.UAM.library[categoryIndex].books[bookIndex].title === bookObject.title)
                    global.UAM.library[categoryIndex].books.splice(bookIndex, 1);
            }
        }
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        for (var i = 0; i < global.UAM.library.length; i++) {
            if (global.UAM.library[i] === categoryName) {
                return global.UAM.library[i];
            }
        }
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        for (var categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex ++) {
            for (var bookIndex = 0; bookIndex < global.UAM.library[categoryIndex].books.length; bookIndex++) {
                if (global.UAM.library[categoryIndex].books[bookIndex].title === title) {
                    return global.UAM[categoryIndex].books[bookIndex];
                }
            }
        }
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
       for (var categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex++) {
           for (var bookIndex = 0; bookIndex < global.UAM.library[categoryIndex].books.length; bookIndex++) {
              if (global.UAM.library[categoryIndex].books[bookIndex].title === bookObject.title) {
                  global.UAM.library[categoryIndex].books[bookIndex].count++;
              }
           }
       }
    };
    
    global.UAM.getBorrowedBooks = function() {
        const borrowedBooks = [];

        for (var categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex++)
        {
            for (var bookIndex = 0; bookIndex < global.UAM.library[categoryIndex].books.length; bookIndex++)
            {
                if (global.UAM.library[categoryIndex].books[bookIndex].count == 0)
                {
                    borrowedBooks.push(global.UAM.library[categoryIndex].books[bookIndex]);
                }
            }
        }

        return borrowedBooks;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/

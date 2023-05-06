
class MenuItem {  //define MenuItem class
  constructor(name,price){ 
    this.name = name;      
    this.price = price;    
  }
  //constructor to initialize the properties of a MenuItem
  // object.
}
class Menu {     //define Menu class 
  constructor(name) { //Constructor to initialize       properties for Menu object
    this.name = name; //properties of Menu 
    this.items= [];  //This is my empty array that I will be pushing items to.
  }

  addItem(item){ //this is the method i will be using to  
    this.items.push(item);//push items to my empty array.
  }
  removeItem(name){ // This is a method to remove a menu item 
    this.items = this.items.filter(item => item.name !== name); //from the items array.
  }

  viewMenu(){  //this method will allow me to view the menu in dialog using 
    let menu = `(${this.name} menu)`; // template literals. 
    //this method will iterate over the 'items' array and outputs the menu items to 
    //an alert dialog.

    for (let item of this.items) { //will add the name of the menu to the menu string
      menu += `${item.name} ${item.price } `; //add menu items with template literal to 
    }                                         //string.

    alert (menu);  // this will show the menu in an alert dialog.

  }
}

//adding menu items to the menu 
const myMenu = new Menu ('Better Buzz Coffee');

myMenu.addItem(new MenuItem ('Coffee', 3.75));

myMenu.addItem(new MenuItem ('Croissant', 4.25));

myMenu.addItem(new MenuItem ('Cake Pop', 2.75));

while (true){ // This is the loop to prompt user for actions 
  let choice = prompt('What would you like to do?(add, remove, view, or exit)');
  //asking user for choice selection on menu prompt.

  if(!choice || choice === 'exit'){ //this will ask user to exit
    break; 
  }else if (choice === 'add'){ //check if user wants to add new item
    let name = prompt ('Enter the menu item name:'); //ask user for item name.
    let price = prompt ('Enter the menu item price:'); //ask user for item price.
    let item = new MenuItem (name, parseFloat(price)); //create new  menuItem object
    myMenu.addItem(item); //add item to menu
    alert(`Added ${name} to the menu.`); //show success message in alert dialog.
  }else if (choice === 'remove'){ //check if user wants to remove item from menu.
    let name = prompt ('Enter the menu item name to remove:');
     //ask user for item name to remove from menu.

    myMenu.removeItem(name);
    alert (`Removed ${name} from the menu.`); //removed from menu will alert in dialog
  }else if (choice === 'view'){ //check if user wants to see the menu.
    
    myMenu.viewMenu(); //this will show menu in an alert dialog

  }else{
    alert('Invalid choice.Please try again.'); //this will prompt an invalid input alert
  }                                            
}
import React, { useState, useEffect } from 'react';
import {ShoppingList, AddItemForm } from './EinkaufslisteComponents';
//import AddItemForm from './AddItemForm';

interface Item {
  id: number;
  name: string;
  completed: boolean;
}

const EinkaufslisteContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  // Laden der Items aus dem localStorage beim Laden der Komponente
  useEffect(() => {
    const storedItems = localStorage.getItem('shoppingListItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  
  // Speichern der Items in den localStorage bei jeder Änderung
  useEffect(() => {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }, [items]);


  const addItem = (name: string) => {
    const newItem = {
      id: Date.now(),
      name,
      completed: false
    };
    setItems([...items, newItem]);
  };

  const removeItems = () =>  {
    setItems(items.filter(item => !item.completed))
  }

  const toggleItemCompletion = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <AddItemForm addItem={addItem} removeCompletedItems={removeItems} />
      <ShoppingList items={items} toggleItemCompletion={toggleItemCompletion} />
    </div>
  );
}

export {EinkaufslisteContainer};

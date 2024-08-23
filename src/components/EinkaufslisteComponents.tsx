import React from 'react';
import { useState } from 'react';
import {
    shoppingListItemStyle,
    shoppingListItemCheckboxStyle,
    addItemForm,
    addItemInput,
    addItemButton,
    removeCompletedButton} from './EinkaufslisteComponents.module.css';
//import Item  from './EinkaufslisteContainer';

interface Item {
    id: number;
    name: string;
    completed: boolean;
  }

interface ShoppingListProps {
  items: Item[];
  toggleItemCompletion: (id: number) => void;
}

interface ShoppingListItemProps {
    item: Item;
    toggleItemCompletion: (id: number) => void;
}
  
const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, toggleItemCompletion }) => {
    console.log(shoppingListItemStyle);
    return (
        <li className={shoppingListItemStyle}>
        <input
            className={shoppingListItemCheckboxStyle}
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleItemCompletion(item.id)}
        />
        {item.name}
        </li>
    );
}
  
  
const ShoppingList: React.FC<ShoppingListProps> = ({ items, toggleItemCompletion }) => {
  return (
    <ul style={{ paddingLeft: "0" }}>
      {items.map(item => (
        <ShoppingListItem key={item.id} item={item} toggleItemCompletion={toggleItemCompletion} />
      ))}
    </ul>
  );
}

interface AddItemFormProps {
    addItem: (name: string) => void;
    removeCompletedItems: () => void;
}
  
const AddItemForm: React.FC<AddItemFormProps> = ({ addItem, removeCompletedItems }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
        addItem(name);
        setName('');
        }
    };

    return (
        <form className={addItemForm} onSubmit={handleSubmit}>
        <input
            className={addItemInput}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Neues Item"
        />
        <button className={addItemButton} type="submit">Hinzufügen</button>
        <button className={removeCompletedButton} type="button" onClick={removeCompletedItems}>Löschen</button>
        </form>
    );
}
  

export {ShoppingList, AddItemForm};
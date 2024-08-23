import React from "react";
import { shoppingListItemStyle } from './EinkaufslisteComponents.module.css';

interface Rotation {
    task: string;
    person: string;
}

interface PutzplanProps {
    rotation: Rotation[];
}


const PutzplanComponent: React.FC<PutzplanProps> = ({rotation}) => {
  return (
      <div>
        <ul style={{ paddingLeft: "0" }}>
            {rotation.map((item,index) => (
            <li className={shoppingListItemStyle} key={index}> <strong>{item.person}:</strong> &emsp; {item.task}</li>
        ))}
        </ul>
      </div>
  );
}

export default PutzplanComponent;
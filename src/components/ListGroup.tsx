import { useState } from "react";

// {item: [], heading: string} using props is how we pass data to out components 
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string)=> void;
}

//defining a function that will be used in the App.tsx file this is were the functionality is done
function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  
  //Hook how we have the selected item highlighted when clicked
  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
        {items.map((item, index) => 
          <li 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}  
            key={item} 
            onClick={() => {setSelectedIndex(index); onSelectItem(item);}}
          >
            {item}
          </li>)}
        </ul>
    </>
  );
}

export default ListGroup;

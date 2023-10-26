import ListGroup from "./components/ListGroup";

function App(){
  //array of cities for the list
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item: string) =>{
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;
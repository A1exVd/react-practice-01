import ControlledInput from './components/ControlledInput';
import ProductList from './components/ProductList';


/*
  ПОЧЕМУ создание статических массивов лучше выносить за пределы реакт компонентов?
  Потому что массив будет пересоздаваться при каждом рендеринге компонента. Это может быть
  проблемой при создании больших структур или, например, при использовании
  React.memo (предотвращение рендеринга дочерненго комопнента, если props не изменились).
  Если мы передаем массив в качестве props в дочерний компонент обернтутый в React.memo, то 
  при рендеринге родительского компонента массив будет пересоздаваться, ссылка на массив изменяться
  следовательно дочерний комопнент ререндериться, несмотря на использование React.memo. Если же выносим
  массив, то ссылка на него будет неизменной.
*/
const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop", price: "999.99" },
  { id: 2, name: "Mouse", description: "Wireless ergonomic mouse", price: "49.50" },
  { id: 3, name: "Keyboard", description: "Mechanical RGB keyboard", price: "120.00" },
  { id: 4, name: "Monitor", description: "4K ultra-wide monitor", price: "350.00" },
  { id: 5, name: "Headphones", description: "Noise-canceling headphones", price: "200.00" }
];

function App() {
  return (
    <div className="App">
        <ProductList products={products} />
        <ControlledInput name="productName" id="productName" label="Product name" placeholder="Enter product name"/>
    </div>
  );
}

export default App;

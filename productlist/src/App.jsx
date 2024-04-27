
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './component/ProductList'

function App() {
  

  return (

    <div className="app-container">
    {/* Navbar */}
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Geeky NG</span>
      </div>
    </nav>
    
    {/* Product List */}
    <div className="product-list-container">
      <ProductList />
    </div>
  </div>
  )
}

export default App

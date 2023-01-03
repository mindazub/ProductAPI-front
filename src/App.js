import './App.css';
import Products from './components/ProductList'

function App() {
  return (
    <div className="App">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Products</h1>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

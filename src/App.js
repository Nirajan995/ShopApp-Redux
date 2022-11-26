import "./App.css"
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom"; 
import ProductDetail from "./containers/ProductDetail";
import ProductPage from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductPage/>}/>
          <Route path="/product/:productId" exact element={<ProductDetail/>}/>
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {Route, Routes} from "react-router-dom"
import {NavBar} from "./components"
import{ShopPage, HomePage, DetailsPage} from "./pages"

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/details/:id" element={<DetailsPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

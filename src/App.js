import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Order from './Pages/order'; // Assuming your component is named 'Order', not 'order'
import Profile from './Pages/Profile';
import Search from './components/search'
import ErrorPage from './Pages/ErrorPage';

function App() {
  const [form, setForm] = useState(false);
  const HandleFormChange = () => {
    setForm(true);
  };
  const [cartNo, setCartNo] = useState(0);
  const [userName, setUserName] = useState('');
  const [singleProd, setSingleProd] = useState('');
  const [cart, setCart] = useState([]);
  const [lightMode, setLightMode] = useState(true)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Navbar 
      lightMode={lightMode}
      setLightMode={setLightMode}
      />
      {/* the routes */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              form={form}
              setForm={setForm}
              HandleFormChange={HandleFormChange}
              userName={userName}
              setUserName={setUserName}
              cart={cart}
              setCart={setCart}
              singleProd={singleProd}
              setSingleProd={setSingleProd}
              cartNo={cartNo}
              setCartNo={setCartNo}
              lightMode={lightMode}
              setLightMode={setLightMode}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route
          exact
          path="/Order"
          element={
            <Order
              form={form}
              setForm={setForm}
              HandleFormChange={HandleFormChange}
              cart={cart}
              setCart={setCart}
              singleProd={singleProd}
              setSingleProd={setSingleProd}
              cartNo={cartNo}
              setCartNo={setCartNo}
              userName={userName}
              setUserName={setUserName}
              lightMode={lightMode}
              setLightMode={setLightMode}
            />
          }
        />
        <Route
          exact
          path="/Profile"
          element={
            <Profile
              setLightMode={setLightMode}
              lightMode={lightMode}
              userName={userName}
              setUserName={setUserName}
              email={email}
              setEmail={setEmail}
              cartNo={cartNo}
            />
          }
        />
        <Route
          exact
          path="/Search"
          element={
            <Search 
            lightMode={lightMode}
              setLightMode={setLightMode}
              cart={cart}
              setCart={setCart}
              cartNo={cartNo}
              setCartNo={setCartNo}
              singleProd={singleProd}
              setSingleProd={setSingleProd}
            />
          }
        />
        <Route
          exact
          path="*"
          element={
            <ErrorPage
              form={form}
              setForm={setForm}
              HandleFormChange={HandleFormChange}
            />
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;

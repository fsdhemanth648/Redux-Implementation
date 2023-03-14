import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Counter from './features/counter/Counter';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((store)=>store.cart);
  const { isOpen } = useSelector((store)=>store.modal);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems, dispatch]);

  useEffect(()=>{
    dispatch(getCartItems());
  },[dispatch] );

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
      <Counter/>
    </div>
  );
}

export default App;

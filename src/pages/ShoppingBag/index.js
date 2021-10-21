import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import BagItem from "../../components/BagItem";
import { Card } from 'reactstrap';
import bagitem from '../../components/BagItem/BagItem.module.css';
//import BagList from "../../components/BagList";
import './ShoppingBag.css';
import useLocalStorage from '../../hooks/useLocalStorage';

const ShoppingBag = () => {
  const [shoppingBag, setShoppingBag] = useState([]);
  const [shoppingOrder, setShoppingOrder] = useLocalStorage(
    'shoppingorder',
    []
  );
  const [qty, setQty] = useState({
    quantity: 1,
  });
  const [subTotal, setSubTotal] = useLocalStorage('total', []);

  const productPrice = shoppingBag.reduce((a, c) => a + c.price * c.bagQty, 0);

  //const [bag, setBag] = seLocalStorage("shoppingBag", [...shoppingBag])
  useEffect(() => {
    let shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'));
    console.log(shoppingBag);
    setShoppingBag(shoppingBag);
  }, []);

  const submitShoppingBag = (product, price) => {
    setShoppingOrder([...shoppingOrder, product]);
    //price.productPrice = 0;
    setSubTotal([...subTotal, price]);

    //localStorage.removeItem('shoppingBag')
  };

  const removeItem = (product) => {
    let shoppingBagCopy = [...shoppingBag];
    shoppingBagCopy = shoppingBagCopy.filter((item) => item.id !== product.id);
    setShoppingBag(shoppingBagCopy);
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBagCopy));
  };

  return (
    <div>
      <main>
        <h1 className='title'>Shopping Bag</h1>

        {/*<BagList bag={ShoppingBag_Data} />*/}
        {shoppingBag === null || shoppingBag === [] ? (
          <p>Shopping Cart is Empty</p>
        ) : (
          <section>
            {shoppingBag.map((product) => (
              <Card className={bagitem.card} key={product.id}>
                <div className={bagitem.image}>
                  {product.imageUrl === null || product.imageUrl === '' ? (
                    <img
                      src='https://i.postimg.cc/2y43Z54p/noimg.png'
                      alt={product.productName}
                    />
                  ) : (
                    <img src={product.imageUrl} alt={product.productName} />
                  )}
                </div>
                <div className={bagitem.content}>
                  <h3>Title: {product.productName}</h3>
                  <p>Type: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Qty: {product.bagQty}</p>
                  {product.quantity > 0 && (
                    <>
                      <li>
                        <div className='row'>
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.quantity).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </div>
                {/*<div className={bagitem.count}>
               <input>Count:{product.exist.qty}</input>
               </div>*/}
                {/* <div className={bagitem.additem}>
                <button onClick={() => addItem(product)}> + </button>
              </div> */}

                <div className={bagitem.removeitem}>
                  <button onClick={() => removeItem(product)}>
                    Remove From Bag
                  </button>
                </div>
              </Card>
            ))}
            <p className='subtotal'>Sub Total: ${productPrice} </p>

            <Link to='/checkout'>
              <button
                onClick={() => submitShoppingBag(shoppingBag)}
                className='checkout'
              >
                Proceed To Checkout
              </button>
            </Link>

            <Link to='/gallery'>
              <button className='shopping'>Continue Shopping</button>
            </Link>
          </section>
        )}
      </main>
    </div>
  );
};

export default ShoppingBag;

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import './GrandTotal.css';
import { Container } from 'reactstrap';

const GrandTotal = (props) => {
  const submitOrder = () => {
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    const shippingInfo = JSON.parse(localStorage.getItem('shippinginfo'));
    const paymentMethod = JSON.parse(localStorage.getItem('paymentmethod'));
    const productsOrdered = JSON.parse(localStorage.getItem('productsOrdered'));

    // if (!paymentMethod && !shippingInfo) {
    //   alert('missing information');
    //   props.history.push('/bag');
    // }

    const userOrder = {
      ...totalPrice,
      ...shippingInfo,
      ...paymentMethod,
      ...productsOrdered,
    };

    const token = localStorage.getItem('token');

    if (!token) {
      props.history.push('/');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };

    axios
      .post('http://localhost:3001/orders/checkout', userOrder, options)
      .then(function (response) {
        console.log(response);
        props.history.push('/ordersubmission');
        localStorage.removeItem('shippinginfo');
        localStorage.removeItem('shoppingBag');
        localStorage.removeItem('paymentmethod');
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('productsOrdered');
        return;
      })
      .catch(function (error) {
        console.log(error);
        alert('error checking out');
      });
  };
  const order = JSON.parse(localStorage.getItem('shoppingBag')) || [];
  const totalPrice = order.reduce((a, c) => a + c.price * c.bagQty, 0);
  return (
    <Container>
      <div>
        <h4 className='h4'>Grand Total ${totalPrice}</h4>

        <div className='col text-center'>
          <Link to='/ordersubmission' className='button1' onClick={submitOrder}>
            Submit Order
          </Link>
        </div>

        <div className='col text-center'>
          <Link className='button2' to='/bag'>
            Back To Shopping Bag
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(GrandTotal);

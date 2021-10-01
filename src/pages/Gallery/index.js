import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import Item from '../../components/Item';
import { withRouter } from 'react-router';

// const inventory = [
//   {
//     id: 1,
//     item_name: "Best piece of artwork ever",
//     description: "art work at its prime",
//     price: "$44",
//     creator: "iCreator",
//     img_url:
//       "https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_1280.jpg",
//   },
//   {
//     id: 2,
//     item_name: "Best piece of artwork ever",
//     description: "say what? this is amazing",
//     price: "$44",
//     creator: "iCreator",
//     img_url:
//       "https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_1280.jpg",
//   },
//   {
//     id: 3,
//     item_name: "Would you look at that?",
//     description: "i have never seen anything better in my life :)",
//     price: "$44",
//     creator: "iCreator",
//     img_url:
//       "https://cdn.pixabay.com/photo/2020/08/02/14/18/blue-5457731_1280.jpg",
//   },
// ];

const Gallery = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/items')
      .then((res) => {
        console.log(res);
        setInventory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Welcome to the Gallery of galleries</h2>
      <div>
        {inventory.map((item) => (
          <Container key={item.id}>
            <Item item={item} />
          </Container>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Gallery);

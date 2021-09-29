/*import React, { useState, useEffect } from 'react';*/

//I had to comment that import for the time being. It was giving me warning messages. After I commented it out, it compiled successfully! Once you start to actually use this import, you can uncomment them. -Ben Von Achen :)

const SellerDashboard = () => {
  return (
    <>
      {/* When the model's/backend are set up integrate it so that the user's name shows up */}
      <h2>'first_name' Dashboard</h2>
      <p>username: </p>
      <p>first name:</p>
      <p>last name: </p>
      <p>email address:</p>
      <p>account type: Seller</p>

      <button>Create New Listing</button>
      <button>Manage Listing's</button>
      <button>Update Account</button>
    </>
  );
};

export default SellerDashboard;

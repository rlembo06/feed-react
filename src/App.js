import React from 'react';

import FeedsView from "views/FeedsView";

// URL: ${API_URL}/v3/users/5411bab0c8e1e7656f4ff291/activities
// Method: GET
// Type: application/json
// QueryString :
// {
//   limit : 10,
//   sort: '-date',
//   skip: 0,
//   type: 'Walking,Running,Cycling'
// }

const App = () => (
  <div className="App">
      <FeedsView />
  </div>
);

export default App;


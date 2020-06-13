import React from 'react';
import FeedsList from "./views/FeedsList";

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
function fetchActivities() {}

const App = () => (
  <div className="App">
    <FeedsList />
  </div>
);

export default App;


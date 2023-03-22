import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./Api";

import { useEffect } from "react";

function App() {
  const { data, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const shouldFetch = data === null && !error && !loading;

  useEffect(() => {
    shouldFetch && dispatch(fetchUsers());
  });

  return (
    <div>
      <h1>asdasd</h1>
      {loading && <h2>loading</h2>}
    </div>
  );
}

export default App;

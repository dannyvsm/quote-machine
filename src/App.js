import './App.css';
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    console.log("loading has changed")
  }, [loading])

  const handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    setData(data);
    
  }

  return (
    <div>
      <h1>Chuck Norris Quote Machine</h1>
      <button onClick={handleFetch}>handleFetch</button>
      <button onClick={() => setLoading(!loading)}>change loading</button>
      {data.value && (
        <>
          <h2>Joke:</h2>
          <p>{data.value}</p>
        </>
        )}
    </div>
  );
}
export default App;

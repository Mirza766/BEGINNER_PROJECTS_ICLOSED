import useFetch from './hooks/UsingPromise';
import './App.css';

function App() {
  const { data, loading, error } = useFetch("http://jsonplaceholder.typicode.com/posts");
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; 

  return (
    <h2>Hello</h2>
  );
}

export default App;

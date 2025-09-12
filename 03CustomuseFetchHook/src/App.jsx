import useFetch from './hooks/UsingPromise';
import './App.css';

function App() {
  const { data, loading, error } = useFetch("https://api.github.com/users/Mirza766");
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; 

  return (
    <div>
      <p>Followers are : {data.followers}</p>
      <p>ID is : {data.id}</p>
      <img src={data.avatar_url} alt="GitHub profile" width={300} />
    </div>
  );
}

export default App;

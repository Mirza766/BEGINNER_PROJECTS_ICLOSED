import useFetch from './hooks/UsingPromise';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('https://api.github.com/users/Mirza766');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; 

  return (
  <div
    style={{
      textAlign: "center",
      margin: "1rem",
      backgroundColor: "gray",
      color: "white",
      padding: "1rem",
      fontSize: "1.875rem", // Tailwind "text-3xl" ≈ 30px
    }}
  >
    GitHub Followers:{" "}
    {data.followers !== undefined ? data.followers : "Loading..."}
    <img
      src={data.avatar_url}
      alt="Git picture"
      width={300}
      style={{ display: "block", margin: "1rem auto" }}
    />
  </div>
);
}

export default App;

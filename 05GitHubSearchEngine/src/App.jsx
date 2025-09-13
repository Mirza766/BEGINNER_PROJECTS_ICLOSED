import useFetch from "./components/CustomeUseFetchHook";
import { useState } from "react";

export default function TestComponent() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("best match");
  const [perPage, setPerPage] = useState(10);
  const [query, setQuery] = useState("react");

  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    query
  )}&sort=${sort === "best match" ? "" : sort}&per_page=${perPage}&page=${page}`;

  const { data, loading, error } = useFetch(url);

  console.log(data);

  

  const repos = data?.items || [];
  const totalCount = data?.total_count || 0;
  const totalPages = Math.ceil(totalCount / perPage);

  if (error) <div>{error.message}</div>
  if (loading) <div>Loading .....</div>

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        GitHub Repository Search
      </h1>

      <div className="mb-4">
        <input
          placeholder="Enter the query"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          className="border p-2 rounded w-full sm:w-1/2"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>

        <select
          className="border p-2 rounded w-full sm:w-1/2"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="best match">Best Match</option>
          <option value="stars">Stars</option>
          <option value="updated">Updated</option>
        </select>
      </div>
        <ul className="border p-3 rounded-lg shadow-sm hover:bg-gray-50 transition">
          {repos.map((repo) => (
  <li className="p-3 hover:bg-gray-50 transition" key={repo.id}>
    <a
      href={repo.html_url}
      target="_blank"
      className="text-blue-600 font-semibold"
    >
      {repo.full_name}
    </a>
    <p className="text-sm text-gray-700">{repo.description}</p>
    <div className="flex gap-4 text-sm mt-2">
      <span>&#9733; 120 {repo.stargazers_count}</span>
      <span>Updated: {new Date(repo.updated_at).toLocaleString()}</span>
    </div>
  </li>
))}
</ul>
<div>
  <button className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" disabled={page===1} 
  onClick={()=>setPage((p)=>p-1)}> Prev</button>
  <span>{page} of{totalPages}</span>
  <button className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50" disabled={page===totalPages} 
  onClick={()=>setPage((p)=>p+1)}>Next</button>

</div>

    

    </div>
  );
}

import React, { useEffect } from 'react'
import { fetchData } from '../API/API'
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "react-intersection-observer"


const InfiniteScrollingApp = () => {

    const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['PokemonData'],
        queryFn: fetchData,
        getNextPageParam: (lastPage, allPages) => {
            console.log("Last Page", lastPage, allPages)
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
            
        }
    })
    console.log("Data", data)


    const { ref, inView } = useInView({
        threshold: 1,
    })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    if (status === "loading") return <p>Loading.....</p>
    if (status === "error") return <div>Error Fetching Data</div>




    return (
    <div>
      <h2>Infinite Scrolling App</h2>

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.results?.map((user) => (
            <li key={user.id} style={{ padding: "10px", border: "1px solid #ccc" }}>
              <p>{user.name}</p>
              <img
                src={user.image}
                alt={user.name}
                style={{ height: "100px", width: "auto" }}
              />
            </li>
          ))}
        </ul>
      ))}

      {/* Observer trigger for infinite scroll */}
     <div ref={ref} style={{ padding: "20px", textAlign: "center" }}>

                {isFetchingNextPage
                    ? "Loading more..."
                    : hasNextPage
                        ? "Scroll down to load more"
                        : "No More users"}
            </div>
    </div>
  );
};

export default InfiniteScrollingApp;


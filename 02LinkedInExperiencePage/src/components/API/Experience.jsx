import { FetchInd } from "./Api";
import {useQuery} from "@tanstack/react-query"
import { useParams } from "react-router-dom";



function SelectedExperience(){
const {id}=useParams();
const {data,isPending,isError,error}=useQuery({
    queryKey:['experience',id],
    queryFn:()=>FetchInd(id)
})

console.log(data)
if (isPending) return <p>Loading...</p>;
if(!data) return <p>No Data....</p>
if (isError) return <p>Error: {error.message}</p>;

return (

<div>
<h2>Fetching Individual Data</h2>
    <ul>
        <li key={data.id}>
         <h2>{data.title}</h2>
              <p>{data.company} - {data.employement}</p>
              <p>
                {data.startMonth} {data.startYear} -{" "}
                {data.currentlyWorking ? "Present" : `${data.endMonth} ${data.endYear}`}
              </p>
        </li>
    </ul>
</div>
)

}


export default SelectedExperience;
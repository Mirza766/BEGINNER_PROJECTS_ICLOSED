
import addtodoContext from "./addtodoContext";
import useLocalStorage from "../API/customHook";
const AddtodoContextProvider=(({children})=>{
   const [addtodo, setaddtodo] = useLocalStorage("tododata", []);  //Our Custom Hook
    const Addtodo=(data)=>{
      setaddtodo((prev)=>[...prev,{id:Date.now(),...data}])
    }
    const DeleteTodo=(id)=>{
        setaddtodo((prev)=>prev.filter((exp)=>exp.id!==id))
    }
    return (
        <addtodoContext.Provider value={{DeleteTodo,Addtodo,addtodo,setaddtodo}}>
        {children}
        </addtodoContext.Provider>
    )
})
export default AddtodoContextProvider
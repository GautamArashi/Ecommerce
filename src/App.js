import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{setData(json);console.log(json)})
  },[])

  return (
   <>
   <div className="flex">
    <div className="min-w-[200px] ">
      <div className="bg-red-300 p-2 w-[350px] h-[140px] m-2 rounded-md">
      <div className="m-5 ">Choose category</div>
      <select name="" id="" className='w-60 border-2 ml-10 border-black'>
        <option value="">men's clothing</option>
        <option value="">jewelery</option>
        <option value=""> electronics</option>
        <option value="">women's clothing</option>
       
      </select>
      </div>
     
    </div>
    <div className="center gap-10 flex-wrap">

{data + map ((item)=>{
  return(
    <div className="max-w-[400px] h-[500px] bg-gray-300  rounded-2xl p-2">
      <div className="bg-red-500 center"><img src={item.image} alt="" className='h-[290px] w-[390px]'/></div>
      <div className="text-xl">{item.title}</div>
      <div className="">category : {item.category}</div>
      <div className="">Price: ${item.price}</div>
    </div>
  )
})}

</div>
   </div>

   </>
  );
}

export default App;

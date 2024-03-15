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
    <div className="min-w-[200px z-10] ">
      <div className="bg-red-300 p-2 w-[350px] h-full m-2 rounded-md">
      <div className="m-5 ">●Choose Categories</div>
      <select name="" id="" className='w-60 border-2 ml-10 border-black'>
        <option value="">Men's Clothes</option>
        <option value="">jewellery</option>
        <option value=""> Electronics</option>
        <option value="">Women's clothing</option>
       
      </select>
      </div>
     
    </div>
    <div className="center gap-10 flex-wrap bg-gray-200 to bg-gray-200 ">

{data.map ((item)=>{
  return(
    <div className="max-w-[400px] h-[500px] bg-orange-300 m-2 hover:bg-orange-500  rounded-2xl p-2 cursor-pointer">
      <div className="bg-red-500 "><img src={item.image} alt="" className='h-[290px] w-[390px]'/></div>
      <div className="h-6 font-bold l  text-xl mb-8 ">●{item.title}</div>
      <div className="h-6 font-bold   text-xl mb-5 "> ●Categories: {item.category}</div>
      <div className="h-6 font-bold   text-xl "> ●Price: ${item.price}</div>
    </div>
  )
})}

</div>
   </div>

   </>
  );
}

export default App;

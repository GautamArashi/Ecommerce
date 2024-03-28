import { useEffect, useState } from "react";
import "./App.css";
import logo from "./Asset/GT_cart.png";
import { FaSearch } from "react-icons/fa";
import SearchResultlist from "./components/SearchResultList";

function App() {
  const [data, setData] = useState([]);
  const [input, setinput] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);
  // const searchbar = ({ setResults }) => {
  //   const [input, setinput] = useState("");
  // };

  const fetchdata = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json);
        const tempResult = json.filter((user) => {
          return (          
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(tempResult);
      });
  };

  fetchdata("m")
  const handlechange = (value) => {
    setinput(value);
    fetchdata(value);
  };

  return (
    <>
      <div className="h-40 bg-slate-600 ">
        <div className=" flez center">
          <SearchResultlist results={results} />
          {/* <searchbar setResults={setResults} /> */}
          <input
            className="mt-3 h-8 w-2/5 p-2 rounded-full text-black outline-none text-sm position-absolute border-red-500 z-0"
            placeholder="search...."
            value={input}
            onChange={(e) => handlechange(e.target.value)}
            type=""
          />
          <div className="text-blue-500 text-2xl position-relative mr-5 z-50">
            <FaSearch />
          </div>
        </div>
        <div className="">
          <img className="h-40 cursor-pointer" src={logo} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="min-w-[250px z-10] ">
          <div className="bg-lime-400 h-full">
            <div className=" rounded-md ">
              <iframe
                src="https://giphy.com/embed/zDweJMevu6iL7BK0h6"
                width="300"
                height="300"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
              <p>
                <a href="https://giphy.com/gifs/Truvia-zoom-grocery-cart-run-zDweJMevu6iL7BK0h6"></a>
              </p>
            </div>
            <div
              className="m-5 
            
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap')
"
            >
              ●Choose Categories
            </div>
            <select name="" id="" className="w-60 border-2 ml-10 border-black">
              <option value="">Men's Clothes</option>
              <option value="">jewellery</option>
              <option value=""> Electronics</option>
              <option value="">Women's clothing</option>
            </select>
          </div>
        </div>
        <div className="center gap-10 flex-wrap bg- bg-gray-200 ">
          {data.map((item) => {
            return (
              <div className="max-w-[400px] h-[500px] bg-orange-300 m-2 hover:bg-orange-500  rounded-2xl p-2 cursor-pointer">
                <div className="bg-red-500 ">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[290px] w-[390px]"
                  />
                </div>
                <div className="p-4">
                  <div className="h-6 font-bold l  text-xl mb-8 ">
                    ●{item.title.slice(0, 55)}
                  </div>
                  <div className="h-6 font-bold   text-xl mb-5 ">
                    {" "}
                    ●Categories: {item.category}
                  </div>
                  <div className="h-6 font-bold   text-xl ">
                    {" "}
                    ●Price: ₹{Math.round(item.price * 13)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

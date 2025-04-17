import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";                  when working without backend
import Cards from "./Cards";
import axios from "axios"

import { Link } from "react-router-dom";

function Course() {

  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");

        console.log(res.data)
        setBook(res.data)
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getBook();
  },[])
  return (
    <>
      <div max-w-screen-2xl="true" container="true" mx-auto="true" md:px-20="true" px-4="true"  >
        <div className="mt-28 text-center justify-center items-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>

          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tenetur quos, quo accusantium accusamus, laboriosam minus nemo
            itaque inventore explicabo ducimus animi molestias quasi, tempore
            nostrum reprehenderit. Accusamus dolore natus commodi, facilis unde
            reprehenderit minima ratione tempora distinctio totam modi quo
            nesciunt magnam omnis laudantium explicabo rem dolor inventore non
            deleniti odit. Veritatis nulla dignissimos porro amet doloribus odit
            accusantium.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

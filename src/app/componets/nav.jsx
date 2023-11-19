"use client"; // th
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { fetchOrigins } from '../slices/originsSlice';
import { FaArrowLeft, FaRegBookmark, FaShapes, FaBookmark, FaSearch, FaBold } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBusinesses } from '../slices/business';
export const dynamic = "force-dynamic"
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  }
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  let router = useRouter();
  function handleBackClick() {
    router.back()
  }
const dispatch = useDispatch();

useEffect(() =>{
dispatch(fetchOrigins());
dispatch(fetchBusinesses());
}, [])
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  function Category(props) {
    return (<button
      className={`bg-transparent rounded-none text-white py-2 px-4 border-b-2 ${selectedCategory === props.category ? 'border-white' : 'border-transparent'} hover:border-white transition duration-300`}
      onClick={() => handleCategoryClick(props.category)}
    >
      {props.category}
    </button>
    );
  }

  return (
    <>
      <div className='' >
        <nav className=" px-4 py-2.5 bg-white  w-full fixed   z-20 bottom-0  border-b  md:rounded-none border-purple-900 shadow-lg">
          <div className="container max-w-5xl flex flex-wrap items-center justify-center mx-auto">
        
            <Link href="/" className="flex mx-9  md:mx-16 lg:mx-28 items-center">
              <span className="self-center text-2xl font-black italic whitespace-nowrap text-slate-800"> <FaShapes /></span>
            </Link>
            <Link href="/search" className="flex mx-9 md:mx-16 lg:mx-28 items-center">
              <div className=' text-slate-800 text-2xl'>
                <FaSearch />
              </div>
            </Link>
            <div onClick={handleBackClick} className="flex mx-9 cursor-pointer  md:mx-16 lg:mx-28 items-center">
              <div className='text-2xl px-5 text-slate-800 '> <FaBold /></div>
            </div>

          </div>
          {/* <div className="w-full">
          <div className="flex text-xs justify-center md:justify-center m-4">


            < Category category="All" />
            < Category category="Hotels" />
            < Category category="Convenience" />

            < Category category=" Restaurants" />
          </div>
        </div> */}

          {/* <MobileNavBar></MobileNavBar> */}
        </nav>
      </div>
    </>

  );
}

export default NavBar;

function menuLines() {
  return <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>;
}

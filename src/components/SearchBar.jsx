import Search from '../assets/icons/icon-search.svg'
import  { useState } from 'react';
import useGitHubProfileStore from '../githubProfileStore';
import axios from 'axios';

function SearchBar() {

  const setSearchResult = useGitHubProfileStore((state) => state.setSearchResult);
  const [searchTerm, setSearchTerm] = useState('');

  const searchProfile = () => {
    axios
      .get(`https://api.github.com/users/${searchTerm}`)
      .then((response) => {
        setSearchResult(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
   };



  return (
    <div className='bg-primary-white p-4 rounded-xl shadow-2xl dark:bg-dark-darkBlueDark'>
      <div className='flex items-center justify-center'>
        <label htmlFor="search" className='lg:mr-4'> 
          <img className="lg:w-8" src={Search} alt="Search" />
        </label>
        <input
         type="text" 
         name="search" 
         className='bg-primary-white outline-none pt-5 w-full pl-6 justify-center lg:text-2xl -translate-y-2 dark:bg-dark-darkBlueDark cursor-text dark:text-primary-white' 
         placeholder='Search...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}

         />
        <button onClick={searchProfile} type="button" className='lg:font-bold bg-primary-Blue text-primary-white lg:py-3 lg:px-6 py-2 px-4 border border-primary-Blue rounded-xl'>Search</button>
      </div>
    </div>
  )
}

export default SearchBar

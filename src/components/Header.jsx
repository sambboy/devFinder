import Sun from '../assets/icons/icon-sun.svg'
import Moon from '../assets/icons/icon-moon.svg'
import {useState} from 'react'

function Header() {

  const [darkMode, setDarkMode] = useState(true);


  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    if (darkMode ){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }

  }

  return (
            <div className='flex justify-between items-center lg:pb-8'>
                    <h1 className='lg:text-3xl text-xl font-bold dark:text-primary-white'>devFinder</h1>
                    <button  onClick={toggleDarkMode} className='flex gap-4'>
                    { darkMode ? <><span className='dark:text-primary-white'>Dark</span> <img className='' src={Moon} alt='Moon' /> </> : <> <span className='dark:text-primary-white'>Light</span><img src={Sun} alt='Sun' /></> }
                    </button>
            </div>
  )
}

export default Header

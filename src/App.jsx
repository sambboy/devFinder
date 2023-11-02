import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Body from './components/Body';

function App() {




  return (
    <>
    <header className='bg-sky flex items-center justify-center h-screen' >
        <div className='mx-auto px-6 lg:w-4/6'> 
        <Header/>
        <SearchBar />
        <Body />
        </div>
    </header>
      
    </>
  )
}

export default App





 

























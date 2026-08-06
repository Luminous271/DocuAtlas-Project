import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import UserGreeting from '../Components/UserGreeting.jsx'


function Search() {
  
  return(
    <>
      <div className='page'>
            <Header/>
                  <UserGreeting message={"Search"}/>
            <div className='body'>
            </div>
            <Footer/>
      </div>
    </>
  );
}

export default Search
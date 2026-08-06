import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import UserGreeting from '../Components/UserGreeting.jsx'

function Courses() {
  
  return(
    <>
      <div className='page'>
          <Header/>
          <UserGreeting message={"Courses"}/>
          <div className='body'>
          </div>
          <Footer/>
      </div>
    </>
  );
}

export default Courses
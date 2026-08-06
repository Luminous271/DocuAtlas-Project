import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import UserGreeting from '../Components/UserGreeting.jsx'


function Settings() {
  
  return(
    <>
    
      <div className='page'>
      <Header/>
        <UserGreeting message={"Settings"}/>
        <div className='body'>
        </div>
      <Footer/>
      </div>
    </>
  );
}

export default Settings
import './App.css';
import {Route,Routes} from "react-router-dom";
import NewMeetup from "./pages/Newmeetup";
import Favourites from './pages/Favourites';
import Allmeetups from './pages/Allmeetups';
import Layout from './components/layout/Layout';




function App() {
  return (
    <Layout>
      
    <Routes>
      <Route exact path='/' element={<Allmeetups/>}/>
      <Route path='/new-meetup' element={<NewMeetup/>}/>
      <Route path="/favourites" element ={<Favourites/>}/>
     

      
      </Routes>
    
     
    </Layout>
  );
}

export default App;


import './App.css';


import { Nave } from './Nave'
import { Aboutsection } from './Aboutsection';
import { Aboutme } from './Aboutme';
import { Sectionskils } from './Sectionskils';
import { Footersection } from './Footersection';
import { Formsection } from './Formsection';
import { Potfoliosection } from './Potfoliosection';
// import { Navebar } from './Navebar';
import Nav from './Nav';






function App() {



  return (
    <div className="App">
   

                                                                                       {/* navesection */}
 {/* <Nave/> */}
 

 





{/* <Navebar></Navebar> */}
 {/* <Nave></Nave> */}
 <Nav></Nav>
 <Aboutsection/>
 <Aboutme/>
 <Sectionskils/>
 <Potfoliosection/>
 <Formsection/>
 <Footersection/>



    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';

import FooterDefault from './components/FooterDefault';

import SlideProductShow from './components/SlideProductShow';

import ScrollChroma from './components/ScrollChroma';



import MenuInterativo from './components/MenuInterativo';

import MenuAnimationScroll from './components/MenuAnimationScroll';

//import SimpleParallax from './components/SimpleParallax';


import AwesomeSilder from './components/AwesomeSlider';

import CommentsContainer from './components/CommentsContainer';

import CloudAnimation from './components/CloudAnimation';

import CurveContainer from './components/CurveContainer';

import api from './services/api';

import StudentCard from './components/StudentCard';

import FormStudent from './components/FormStudent';



function App() {
  const [students, setStudents] = useState([]);
  
  useEffect( () => {
    async function loadStudents() {
      const response = await api.get('/students');
      setStudents(response.data);
    }
    loadStudents();
  }, []);
  async function handleAddStudent (data) {
    const response = await api.post("/students/github", data);
    if(response.data){
      setStudents( [...students, response.data] );
      window.alert("Student created with success!!!");
    }
    else{
      window.alert("Error Ocurred error status : " + response.status);
    }
  }
  return (
    <>
      <CloudAnimation />
      <MenuAnimationScroll/>
      <MenuInterativo />
      <ScrollChroma />
      <div id="app">
        <FormStudent onSubmit={handleAddStudent}/>
        <main>
          <ul className="student-container">
            {
              students.map( student => 
                <StudentCard key={ student._id } properties={ student }/>
              )
            }
          </ul>
        </main>
      </div>

      <SlideProductShow icon="undo" />
      <AwesomeSilder />

      <CommentsContainer />
      <CurveContainer />
      <FooterDefault/>
    </>
  );
}
export default App;

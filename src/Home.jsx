import React, { useState } from 'react';
import Button from '@mui/material/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import Images from './assets/Images';


function Home(){
    const [menuOpen, setMenuOpen] = useState(false);
    const resumeURL = Images.image13;
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      const handleResumeClick = () => {
        // Open the resume document in the same tab
        window.location.href = resumeURL;
      };
    return(
        <>
           <div className={`container ${menuOpen ? 'responsive' : ''}`}>
        <p style={{float:'left',color:'white',marginLeft:30}}>PORTFOLIO</p>
        <a href="/about" style={{marginRight:50}}>Contact</a>
        <a href="/project">Projects</a>
        <a href="/">Home</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
        &#9776;
        </a>
      </div>

      
      <div className='container3'>
      <div className='blueSection'>
        <div className='card'>
          <div className='about'>
            <div>
            <img src={Images.image1}></img>
            </div>
            <div className="text">
            <p style={{fontFamily:'monospace',fontSize:20}}>HELLO EVERYBODY,I AM</p>
            <p style={{fontFamily:'sans-serif',fontSize:35,marginTop:0,fontWeight:'bold'}}>SHRAWANI GAIKWAD</p>
            <p style={{fontSize:20,marginTop:-30}}>Software developer</p>
            <p style={{fontFamily:'revert-layer',color:'GrayText', fontSize:19,marginTop:30}}>As a software developer, I am constantly motivated by the excitement of learning new things. 
            My passion for innovation and growth drives me to explore emerging technologies and expand my skill set.
            I am  always eager to tackle new projects and contribute to the ever-evolving landscape of technology.
              </p>
              <div style={{fontFamily:'revert-layer',color:'GrayText', fontSize:17}}>
              <p>
              <i className="bi bi-calendar" style={{color:'blue'}}></i>
              &nbsp; 5th March, 2004
              </p>
              <p>
              <i className="bi bi-telephone" style={{color:'blue'}}></i>
              &nbsp; +91 9822289375
              </p>
              <p>
              <i className="bi bi-envelope" style={{color:'blue'}}></i>
              &nbsp; shrawanigaikwad@gmail.com
              </p>
              <p>
              <i className="bi bi-house" style={{color:'blue'}}></i>
              &nbsp; Pune
              </p>
              </div>
              <div style={{display:'flex',marginLeft:10}}>
              <h2 style={{ cursor: 'pointer' ,marginLeft:10}} onClick={() => window.open('https://github.com/ShrawaniGaikwad', '_blank')}>
              <i className="bi bi-github"></i>
              </h2>
              <h2 style={{ cursor: 'pointer',marginLeft:50 }} onClick={() => window.open('https://wa.me/9822289375', '_blank')}>
              <i className="bi bi-whatsapp"></i>
            </h2>
            <h2 style={{ cursor: 'pointer' ,marginLeft:50}} onClick={() => window.open('https://www.instagram.com/shrawani_gaikwad', '_blank')}>
            <i className="bi bi-instagram"></i>
          </h2>
          </div>
          </div>
        </div>
        </div>
      </div> 
      <div className="skills">
      <div className="container1">
        <h1 style={{color:'white',fontSize:40}}>Skills</h1>

        <div className="row">
        <div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>Frontend Development</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>Frontend Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1. Knowledge of HTML, CSS, Bootstrap, Material Design.
      <br></br>2. Have worked on Framework Angular and Library React + Vue
      <br></br>3. Designing : Figma and Photoshop
      <br></br>4.Currently working on a Freelancing project.
      </p>
    </div>
  </div>
</div>
<div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>Backend Development</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-filetype-js" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>Backend Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1.Have knowledge of javascript and typescript.
      <br></br>2. Worked on Node.js and Express.js development.
      <br></br>3. Hosted servers on Render and firebase for MEAN and MERN satck projects.
      </p>
    </div>
  </div>
    </div>
    <div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>DataBase Management</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>DataBase Management</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1. Have knowledge of SQL database programming.
      <br></br>2. Worked on Mongodb compass and mongodb atlas.
      <br></br>3. Have Knolwledge of connection in MEAN stack and MERN stack projects.
      </p>
    </div>
      </div>
      </div>
        </div>

        <div className="row">
        <div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>Software Development</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-filetype-java" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.521 15.175a1.3 1.3 0 0 1-.082-.466h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466V11.85h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.568-.094 1.1 1.1 0 0 1-.408-.266 1.1 1.1 0 0 1-.243-.39m3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617z"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>Software Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1. Knowledge of following languages : <br></br>C C++ Java Python
      <br></br>2. Have a good Problem solving approach (1600 Leetcode Problems solved)
      </p>
    </div>
  </div>
</div>
<div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>Machine Learning</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-filetype-py" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.158.299-.464.474a1.45 1.45 0 0 1-.732.173H.79v1.342H0zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.513-.182H.788v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24m2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855z"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>Machine Learning</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1. Knolwledge of Numpy, Scipy, Matplotlib.
      <br></br>2. Knowledge of : <br></br> Decision Tree Algorithm <br></br>K Nearest Neighbour algorithm <br></br>
      Supervised Machine Learnign using regression<br></br>Linear Regression algorithms <br></br> Logistic Regression Algorithm<br></br>
      </p>
    </div>
  </div>
    </div>
    <div className="flip-card" >
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <h2 style={{color:'black'}}>App Development</h2>
      <svg  xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
      </svg>
    </div>
    <div className="flip-card-back">
    <h2 style={{color:'black'}}>App Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20,marginTop:20}}>
      1. Knowledge of Flutter and Flask
      <br></br>2. Knowledge of App dvevelopment in Java
      </p>
    </div>
      </div>
      </div>
        </div>
        </div>


      {/* <div className="row">
        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
      </svg>
      <h2>Frontend Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
        </div>
        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-filetype-js" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"/>
      </svg>
      <h2>Backend Development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
        </div>
        <div className="card1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
      </svg>
      <h2>DataBase Management</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
      </div>
        </div> */}
        {/* <div className="row">
        <div className="card1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-filetype-java" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.521 15.175a1.3 1.3 0 0 1-.082-.466h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466V11.85h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.568-.094 1.1 1.1 0 0 1-.408-.266 1.1 1.1 0 0 1-.243-.39m3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617z"/>
      </svg>
      <h2>Software development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
      </div>
        <div className="card1">
        
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-filetype-py" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.158.299-.464.474a1.45 1.45 0 0 1-.732.173H.79v1.342H0zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.513-.182H.788v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24m2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855z"/>
      </svg>
      <h2>Machine Learning</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
        </div>
        <div className="card1">
        <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
        <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
      </svg>
      <h2>App development</h2>
      <p style={{fontFamily:'"Monsterrat", sans-serif',fontSize:17,textAlign:'left',marginLeft:20}}>
      "I am a skilled frontend developer with a strong passion for creating intuitive and visually appealing user interfaces. 
      With expertise in HTML, CSS, JavaScript, and frontend frameworks(Angular , React), 
      I excel at transforming design concepts into seamless web experiences.
      </p>
        </div>
        </div> */}
    </div>
    {/* <div className='education'>
      
    </div> */}
    <div className='education'>
    <h1 style={{textAlign:'center',fontSize:40,color:'white'}}>Education</h1>
    <div className="container4">
    <div className="custom-card">
      <div className="img-box"><img src={Images.image4}/></div>
      <div className="custom-content">
        <h2>Bachelor In Computer Engineering</h2>
        <p>Currently Studying in Pune Institute Of Computer Engineering (Savitribai Phule Pune University)</p>
        <h2>First Year</h2>
        <p>CGPA : 9.67</p>
        <p>First Sem SGPA : 9.58</p>
        <p>Second Sem SGPA : 9.77</p>

        <h2>Second Year</h2>
        <p>CGPA : 9.67</p>
        <p>First Sem SGPA : 9.87</p>
        <p>Second Sem SGPA : 9.77</p>
      </div>
    </div>
    <div className="custom-card">
      <div className="img-box"><img src={Images.image6}/></div>
      <div className="custom-content">
        <h2>Higher Secondary</h2>
        <p>Studied at St. Vincents Junior College</p>
        <h2>Jee Advanced</h2>
        <p>CRL Rank : 20113</p>
        <h2>Jee Mains</h2>
        <p>Percentile : 93.33</p>
        <h2>MHTCET</h2>
        <p>Percentile : 99.27</p>
        <h2>HSC</h2>
        <p>Percentage : 91.17%</p>
      </div>
    </div>
    <div className="custom-card">
      <div className="img-box"><img src={Images.image16}/></div>
      <div className="custom-content">
        <h2>Higher Secondary</h2>
        <p>Studied at St. Mira's School</p>
        <h2>SSC</h2>
        <p>Percentge : 95.40%</p>
        <h2>English</h2>
        <p>84 / 100</p>
        <h2>Mathematics</h2>
        <p>99 / 100</p>
        <h2>Science</h2>
        <p>97 / 100</p>
      </div>
    </div>
  </div>
  </div>

    </div>
      <h1 style={{textAlign:'center'}}>Projects</h1>
      <div className='cont1'>
        <div className='gridrow'>
          <div className='rowcard1'>
            <img src={Images.image8}></img>
          </div>
          <div className='rowcard1'>
          <div style={{marginLeft:30,marginTop:0}}>
            <h1>FreeLancing</h1>
            <h2>Project Name: Designing a profile website for Company</h2>
            <h3>Technology: MEAN stack</h3>     
            <h3>  Description:</h3>      
                <ul style={{fontFamily:'"Monsterrat", sans-serif',fontSize:20,textAlign:'left'}}>
                  <li>This project has Angular used in frontend with material design and bootstrap used.</li>
                  <li>It has NodeJS and ExpressJs for server-side development.</li>
                  <li>It has MongoDB used as Database.</li>
                  <li>This project consists of authentication routing, json-server implemented, and well-structured code with all basic concepts implemented.
                </li>
                </ul>
                <div style={{textAlign:'center'}}>
                <Button color='primary' variant='contained' onClick={()=> window.location.href="https://angular-fa929.web.app/"}>Open Project</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center'}}>
      <Button color='primary' variant='contained' onClick={()=> window.location.href="/project"}>More Projects</Button>
      </div>
      <div style={{textAlign:'center',backgroundColor:'#f0f0f0'}}>
        <h1><u>Resume</u></h1>
        <div>
            <p>Click the link below to download my resume:</p>
            <Button color='primary' variant='contained' onClick={handleResumeClick}>Acess Resume</Button>
        </div>
        </div>
    <div className='footer'>
      <div style={{display:'flex',justifyContent:'center'}}>
            <h2 style={{ cursor: 'pointer' ,marginLeft:10}} onClick={() => window.open('https://github.com/ShrawaniGaikwad', '_blank')}>
              <i style={{color:'white'}} className="bi bi-github"></i>
            </h2>
            <h2 style={{ cursor: 'pointer',marginLeft:50 }} onClick={() => window.open('https://wa.me/9822289375', '_blank')}>
              <i style={{color:'white'}} className="bi bi-whatsapp"></i>
            </h2>
            <h2 style={{ cursor: 'pointer' ,marginLeft:50 }} onClick={() => window.open('https://www.instagram.com/shrawani_gaikwad', '_blank')}>
              <i style={{color:'white'}} className="bi bi-instagram"></i>
            </h2>
            <h2 style={{ cursor: 'pointer' ,marginLeft:50 }} onClick={() => window.open('https://www.linkedin.com/in/shrawani-gaikwad-774540310', '_blank')}>
              <i style={{color:'white'}} className="bi bi-linkedin"></i>
            </h2>
        </div>
        <div style={{display:'flex',color:'white',justifyContent:'center'}}>
        <p style={{ cursor: 'pointer', marginLeft: '20px' }} onClick={() => window.location.href = "/"}>Home</p>
        <p style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => window.location.href = "/project"}>Projects</p>
        <p style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => window.location.href = "/about"}>Contact</p>
        </div>
    </div> 
        </>
    )
}

export default Home;
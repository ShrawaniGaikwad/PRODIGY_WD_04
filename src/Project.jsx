import './Project.css';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Images from './assets/Images';


function Project(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
      <div className='cont1'>
        <div className='gridrow'>
          <div className='rowcard1'>
            <img src={Images.image17}></img>
          </div>
          <div className='rowcard1'>
          <div style={{marginLeft:30,marginTop:0}}>
            <h1>App Development</h1>
            <h2>Project Name:  Lesion Lens</h2>
            <h3>Technology: App development using android studio and ML 
                project deployment.</h3>     
            <h3>  Description:</h3>      
                <ul style={{fontFamily:'"Monsterrat", sans-serif',fontSize:20,textAlign:'left'}}>
                  <li> This project is build to detect the type of lesion(cancer).</li>
                  <li> This project using images to be entered in the app and ML model 
                        will detect the type of lesion.</li>
                  <li> App development is done using android studios.</li>
                </ul>
                <div style={{textAlign:'center'}}>
                {/* <Button color='primary' variant='contained' onClick={()=> window.location.href="https://angular-fa929.web.app/"}>Open Project</Button> */}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='cont1'>
        <div className='gridrow'>
          <div className='rowcard1'>
            <img src={Images.image3} style={{marginTop:120,marginBottom:100}}></img>
          </div>
          <div className='rowcard1'>
          <div style={{marginLeft:30,marginTop:0}}>
          <h1>System Programming</h1>
            <h2>Project Name:  Virtual File System</h2>
            <h3>Technology:  C++ Programming</h3>     
            <h3>  Description:</h3>      
                <ul style={{fontFamily:'"Monsterrat", sans-serif',fontSize:20,textAlign:'left'}}>
                  <li> This project provides all functionality to the user which is same as 
                        Linux File system.</li>
                  <li> It provides necessary commands, system calls implementations of 
                        file system through customized shell</li>
                  <li>In this project we implement all necessary data structures of file 
                      system like Incore Inode Table, File Table, UAREA, User File Descriptor table</li>
                </ul>
                <div style={{textAlign:'center'}}>
                <Button color='primary' variant='contained' onClick={()=> window.location.href="https://github.com/ShrawaniGaikwad/Projects/blob/a7b9e61c1e6117df5a03f8059150ef3c91438030/CVFS.cpp"}>Open Project</Button>
                </div>
            </div>
          </div>
        </div>
      </div>      
      <div className='cont1'>
        <div className='gridrow'>
          <div className='rowcard1'>
            <img src={Images.image7} style={{marginTop:120,marginBottom:100,borderRadius:50}}></img>
          </div>
          <div className='rowcard1'>
          <div style={{marginLeft:30,marginTop:0}}>
            <h2>Project Name: Chat Application using Socket Programming</h2>
            <h3>Technology:  Java</h3>     
            <h3>  Description:</h3>      
                <ul style={{fontFamily:'"Monsterrat", sans-serif',fontSize:20,textAlign:'left'}}>
                  <li>TIn this project we created two applications as Client and server.</li>
                  <li>Inside the client application we have to create a socket object which 
                      connects the server by specifying the IP address and port number.</li>
                  <li>Inside Server application we have created two objects- one for the 
                    server socket and one for socket.</li>
                </ul>
                <div style={{textAlign:'center'}}>
                <Button color='primary' variant='contained' onClick={()=> window.location.href="https://github.com/ShrawaniGaikwad/Projects/blob/main/Client.java"}>Open Project</Button>
                </div>
            </div>
          </div>
        </div>
      </div> 
      <div className='cont1'>
        <div className='gridrow'>
          <div className='rowcard1'>
            <img src={Images.image10} style={{marginTop:120,marginBottom:100,borderRadius:50}}></img>
          </div>
          <div className='rowcard1'>
          <div style={{marginLeft:30,marginTop:0}}>
            <h2>Project Name: AI Based Writing Aid</h2>
            <h3>Technology:  Python Programming</h3>     
            <h3>  Description:</h3>      
                <ul style={{fontFamily:'"Monsterrat", sans-serif',fontSize:20,textAlign:'left'}}>
                  <li>AI Based Writing Aid with ML, you can draw on the screen by only 
                      waiving your finger around in Air</li>
                  <li>This Project is Developed with OpenCV and Media Pipe libraries of 
                      Python</li>
                </ul>
                <div style={{textAlign:'center'}}>
                <Button color='primary' variant='contained' onClick={()=> window.location.href="https://github.com/ShrawaniGaikwad/Projects/blob/68967f894a87a05af43fda76202a7e6f5b95e3cc/AI_Based_Writing_Aid/main%20(1).py"}>Open Project</Button>
                </div>
            </div>
          </div>
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
export default Project;
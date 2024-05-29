import './About.css';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Loader from './Loader';
import Images from './assets/Images';


// http://localhost:3000/api/help

function About(){
  const resumeURL = Images.image13;
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleResumeClick = () => {
      // Open the resume document in the same tab
      window.location.href = resumeURL;
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Query, setQuery] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
      setLoading(true);
      console.log("Inside the handle submit")
        const formData = { Name, Email, Query };
        try {
            const response = await fetch('https://portfolioserver-4uqa.onrender.com/help', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Form submitted successfully!');
                setName('');
                setEmail('');
                setQuery('');
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
        finally {
          setLoading(false); // Set loading to false after form submission
      }
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
      {loading && <Loader />}
      
      <div className='start' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
  <div style={{ fontFamily: 'revert-layer', fontSize: 30, textAlign: 'center' ,fontWeight:'bold'}}>
    <p >Get In Touch</p>
    <p>Lets's Work Together</p>
  </div>
</div>

      <div className='mycontainer' style={{fontFamily:'"Monsterrat", sans-serif',fontSize:15,textAlign:'left'}}>
        <div className='row1'>
        <div className='mycard' >
        <i className="bi bi-send-fill"></i>
        <h3>Email</h3>
        <hr style={{width:50,marginTop:0}}/>
        {/* <h3 style={{ cursor: 'pointer',color:'red',marginLeft:10}} onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=shrawanigaikwad5@gmail.com', '_blank')}>shrawanigaikwad5@gmail.com</h3> */}
        <h3
  style={{ cursor: 'pointer', color: 'red', marginLeft: 10 }}
  onClick={() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'mailto:shrawanigaikwad5@gmail.com';
    } else {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=shrawanigaikwad5@gmail.com', '_blank');
    }
  }}
>
  shrawanigaikwad5@gmail.com
</h3>
            </div>
            <div className='mycard' >
            <i className="bi bi-phone-fill"></i>
            <h3>Phone</h3>
            <hr style={{width:50,marginTop:0}}/>
            <h3 style={{color:'gray',marginLeft:10}}>+91 9822289375</h3>
            </div>
            <div className='mycard' >
                <i className="bi bi-linkedin"></i>
                <h3>Connect on LinkedIn</h3>
                <hr style={{width:50,marginTop:0}}/>
                <h3 style={{ cursor: 'pointer',color:'red',marginLeft:10}} onClick={() => window.open('https://www.linkedin.com/in/shrawani-gaikwad-774540310', '_blank')}>Shrawani Gaikwad</h3>
            </div>
        </div>
      </div>
      <div style={{display: 'flex',justifyContent:'center'}}>
      <div className='mycard2'>
        <h1 style={{fontFamily:'"Monsterrat", sans-serif',fontSize:15,textAlign:'center'}}>Drop A Message</h1>
        <p>Enter Your Name</p>
        <TextField
                required
                id="name"
                label="Name"
                placeholder="Enter your Name"
                value={Name}
                onChange={handleNameChange}
            />
        <br></br>
        <p>Enter Email Address</p>
        <TextField
                required
                id="email"
                type="email"
                label="Email"
                placeholder="Email Address"
                value={Email}
                onChange={handleEmailChange}
            />
        <br></br>
        <p>Message</p>
        <TextareaAutosize
          required
          id="message"
          minRows={3}
          maxRows={6}
          className='custom-textarea'
          placeholder="Enter your message here"
          style={{ height: '50px', borderColor: 'gray' }}
          value={Query}
          onChange={handleMessageChange}
        />
        <div style={{ display: 'flex', justifyContent: 'center',marginTop:20 }}>
        <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      </div>
      <div style={{textAlign:'center'}}>
        <h1><u>Resume</u></h1>
        <div>
            <p>Click the link below to download my resume:</p>
            <Button color='primary' variant='contained' onClick={handleResumeClick}>Acess Resume</Button>
        </div>
        </div>
      <div className='footer1'>
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
export default About;
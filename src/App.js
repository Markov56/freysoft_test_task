import React, { useState } from 'react';
import './index.scss';
import Vacancies from './components/Vacancies';
import VacanciesSearch from './components/VacanciesSearch';
import Slider from './components/Slider/Slider'


function App() {
  
  const [searchValue, setSearchValue] = useState('');

  return (    
    <div className="wrapper">
      <header>
        <div className="container">
            <a href="" className="header__logo">
                <img src="./images/freysoft-logo.svg" alt="logo"/>
            </a>
            <nav>       
                <a href="#" className="header__nav-link">
                    Company
                </a>   
                <a href="#" className="header__nav-link">
                    Services
                </a>
                <a href="#" className="header__nav-link">
                    Blog
                </a>
                <a href="#" className="header__nav-link">
                    Career
                </a>      
            </nav>
            <button className="header__btn">
                Contact Us
            </button>
            </div>
    </header>
    <main>

        <section className="info">
          <div className="container">
            <div className="text">
                <h1 className="title">We’ve got the job for you!</h1>
                <p className="description">We offer experienced IT specialists to be involved in ground-breaking digital
                    projects and IT novices to develop skills in our perspective workplace. </p>
            </div>
          </div>

            <Slider />
            <Slider />
            <Slider />
            
        </section>

        <section className="about">
          <div className="container">
            <h2>About&nbsp;the company</h2>
            <p>Founded in 2019, FreySoft is a global provider of full-cycle software development services with headquarters in Kyiv, Ukraine. Our objective is to work on innovative projects that matter and bring value with the most balanced “personal life” / “work” ratio for our team.</p>
            <p>The key areas of our activity include IT staff augmentation, web and mobile app development, MVP development for startups, integration & automatization, support & maintenance, legacy application transformation, UI/ UX product design, and AI-chatbots development.</p>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="process__info">
              <h2>FreySoft Recruitment process</h2>
              <div className="process__info-text">
                <p>From the start, you will feel the responsive and effective process of recruiting. The main is bureaucracy-free environment inside the company.</p>
                <p>Identifying the right talent, attracting them, and motivating them to apply is what we strive for in our recruitment process. We have two key phases of hiring the candidate. After, you get either feedback or an offer.</p>
              </div>
            </div>
            <div className="process__cards">
              <div className="process__card">
                <p>Stage number 1</p>
                <h3>Interview with<br/>an HR manager</h3>
                <div className="text-box">
                  <p>We arrange the phone or video interview at your convenient time. Duration is on average 30-40 minutes. At this phase we are getting to know each other better, determining if the requisite qualifications fill the position and the candidate aligning with an organization’s culture and values.
                  </p>
                </div>
                <p className="number purple">1</p>
              </div>            
              <div className="process__card">
                <p>Stage number 2</p>
                <h3>Technical<br/>examination</h3>
                <div className="text-box">
                  <p>A tech interview can take about an hour. The date and time of the meeting will be agreed in advance for your convenience. This phase is a great opportunity for you to know about the stack and get acquainted with the lead or the team you will be working with. You are welcomed to ask any questions you may have about the skills and technologies implemented in the project.</p>
                  <p>If you are considering multiple vacancies for different projects, we can arrange separate technical interviews that will focus on the required skills for each individual project. </p>
                </div>
                <p className="number blue">2</p>
              </div>            
            </div>
            <img className="process__float" src="./images/process.png" alt="process float" />
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2>Within our recruitment process, as a candidate…</h2>
            <div className="cards">
              <div className="card">
                <img src="../images/will_get.svg" alt="logo" />
                <h3>You will get</h3>
                <ul>                
                  <li>
                    <img src="./images/check.png" alt="" />
                    <span>The fast feedback on every stage of the recruitment</span>
                  </li>
                  <li>
                    <img src="./images/check.png" alt="" />
                    <span>Timesaving productive interviews</span>
                  </li>
                  <li>
                    <img src="./images/check.png" alt="" />
                    <span>Opportunity to get acquainted with the future project, your team colleagues, and CEO in advance chance of receiving the job offer on the same day of your interview</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <img src="./images/will_not_get.svg" alt="logo" />
                <h3>You will not get</h3>
                <ul>                
                  <li>
                    <img src="./images/checkmark_negative.png" alt="" />
                    <span>Huge exhausted free tests</span>
                  </li>
                  <li>
                    <img src="./images/checkmark_negative.png" alt="" />
                    <span>Long-awaited pauses in communication with us multiple interviews from our side</span>
                  </li>
                  <li>
                    <img src="./images/checkmark_negative.png" alt="" />
                    <span>Bullshit</span>
                  </li>
                  <li>
                    <img src="./images/checkmark_negative.png" alt="" />
                    <span>Harassment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <VacanciesSearch setSearchValue={setSearchValue}/>
        <Vacancies searchValue={searchValue}/>
        

        
    </main>
      
    </div>
  );
}

export default App;

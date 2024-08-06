import React from 'react'
import "./About.css"
import AboutImg from "/aboutimg.jpg"
import { useState, useEffect, } from "react";


function About() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/public/list.json')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.about);
      })
  }, []);


  return (
    <div className='about-us'>
      <h1 className='abput-paragraph'>About Us</h1>
      <hr />
      <img src={AboutImg} alt="" className='imggg'/>
      <p className='ps'>Uzbekistan's club is a global platform created to bring together successful Uzbekistanis. Our exclusive, high-quality, and impactful content motivates young people, and our multidisciplinary projects serve as role models for them to become world-class professionals. Our goal is to turn our international nonprofit into a hub for the intellectual potential of Uzbekistanis.</p>
      <p className='ps'>Uzbekistan's club is now officially recognized as an NGO, and we're excited to announce the establishment of our representative offices in two strategic locations: Washington, D.C., in the United States, and London in the United Kingdom. These offices serve as the foundation for our global expansion.&nbsp;Our vision is to extend our presence across Europe and various regions worldwide, fostering collaboration, cultural exchange, and professional growth among Uzbekistanis and our international partners. Stay tuned for updates on our expanding network of offices as we continue to promote excellence and connectivity on a global scale.</p>
      <div className='grids-about'>
        <div>
          <h1>14M+</h1>
          <p>viewrs</p>
        </div>
        <div>
          <h1>80+</h1>
          <p>viewrs</p>
        </div>
        <div>
          <h1>10+</h1>
          <p>viewrs</p>
        </div>
      </div>
      <div className="Ton">
        <h1 className=''>Project Creators</h1>
        <div className=''>
          <div className="gdi">
            {
              posts.map((user, id) =>
                <div className="" key={id}>
                  <img src={user.img} className='grid-image'/>
                  <p className="">{user.name}</p>
                  <p className="">{user.des}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className='der'>
        <h1 className='derh1'>About Project</h1>
        <p>A young and progressive team working and gaining experience in the creative industry, media, and education for several years has implemented Uzbekistan's club project since 2021.Thousands of Uzbekistanis with great potential are making successful careers in large companies, authoritative organizations and educational institutions worldwide. Hundreds of compatriots have started their profitable businesses in foreign countries. This trend will continue due to the growth of our population and the development of private education in Uzbekistan, the desire of the young <br /> <br/> generation to work on themselves.Thousands of Uzbekistanis with great potential are making successful careers in large companies, authoritative organizations and educational institutions worldwide. Hundreds of compatriots have started their profitable businesses in foreign countries. This trend will continue due to the growth of our population and the development of private education in Uzbekistan, the desire of the young generation to work on themselves.Thousands of Uzbekistanis <br/> <br/> with great potential are making successful careers in large companies, authoritative organizations and educational institutions worldwide. Hundreds of compatriots have started their profitable businesses in foreign countries. This trend will continue due to the growth of our population and the development of private education in Uzbekistan, the desire of the young generation to work on themselves.Thousands of Uzbekistanis with great potential are making successful careers in large companies, authoritative organizations and educational institutions worldwide. Hundreds of compatriots <br/> <br/> have started their profitable businesses in foreign countries. This trend will continue due to the growth of our population and the development of private education in Uzbekistan, the desire of the young generation to work on themselves.Thousands of Uzbekistanis with great potential are making successful careers in large companies, authoritative organizations and educational institutions worldwide. Hundreds of compatriots have started their profitable businesses in foreign countries. This trend will continue due to the growth of our population and the development of private education in Uzbekistan, the desire of the young generation to work on themselves.</p>
      </div>
    </div>
  ) 
}

export default About

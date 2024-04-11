import React from "react";
import "./project.css";
import portfolio1 from "../../assets/assets/Indiabusiness.png";
import portfolio2 from "../../assets/assets/beatsLanding.png";
import portfolio3 from "../../assets/assets/Todo.png";
import portfolio4 from "../../assets/assets/portfolio-4.png";
import portfolio5 from "../../assets/assets/portfolio-5.png";
import portfolio6 from "../../assets/assets/portfolio-6.png";

// let data = [
//   {
//     img: portfolio1,
//   },
//   {
//     img: portfolio2,
//   },
//   {
//     img: portfolio3,
//   },
//   {
//     img: portfolio4,
//   },
//   {
//     img: portfolio5,
//   },
//   {
//     img: portfolio6,
//   },
// ];

const Project = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>

      {/* {data.map((item) => (
      ))} */}
        <div className="workImgs">
        <div className="project-1">
        <a href="https://indiabusiness.org.in/"> <img src={portfolio1} alt="" className="worksImg" /></a> 
        <div className="project-1desc">
         <h2>ITC-ONLINE WEB APP</h2>

         <p>A web-based tool helping users manage finances with expense tracking, budgeting features, and visualizations. It offers secure authentication and data encryption for privacy. Empowers users to make informed financial decisions.</p>

         <button>visit</button>

        </div>

        </div>
        <div className="project-1">

        <div className="project-1desc">
         <h2>ITC-ONLINE WEB APP</h2>

         <p>A web-based tool helping users manage finances with expense tracking, budgeting features, and visualizations. It offers secure authentication and data encryption for privacy. Empowers users to make informed financial decisions.</p>

         <button>visit</button>

        </div>
        <a href="https://123-shiva.github.io/Beats-landing-page/"> <img src={portfolio2} alt="" className="worksImg" /></a>
     

        </div>
        
    
        <a href="https://123-shiva.github.io/ToDo-list-/">   <img src={portfolio3} alt="" className="worksImg" /></a>
          {/* <img src={portfolio4} alt="" className="worksImg" />
          <img src={portfolio5} alt="" className="worksImg" />
          <img src={portfolio6} alt="" className="worksImg" /> */}
        </div>
        <button className="worksBtn">See More</button>
    </section>
  );
};

export default Project;

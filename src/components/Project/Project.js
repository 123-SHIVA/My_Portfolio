import React from "react";
import "./project.css";
import portfolio1 from "../../assets/assets/portfolio-1.png";
import portfolio2 from "../../assets/assets/portfolio-2.png";
import portfolio3 from "../../assets/assets/portfolio-3.png";
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
          <img src={portfolio1} alt="" className="worksImg" />
          <img src={portfolio2} alt="" className="worksImg" />
          <img src={portfolio3} alt="" className="worksImg" />
          <img src={portfolio4} alt="" className="worksImg" />
          <img src={portfolio5} alt="" className="worksImg" />
          <img src={portfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  );
};

export default Project;

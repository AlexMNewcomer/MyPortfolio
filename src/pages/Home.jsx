import img1902 from '../assets/IMG_1902.jpeg';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <img src={img1902} alt="My Profile" className="home-photo" />
      <p>
        I am a motivated security coordinator & general warehouse safety trainer at Saadia Distribution as well as a sales lead/trainer for Herr's Fruit Farm with 4+ years of experience in security & 10+ years of experience in sales & inventory management. Since these fields are quite different from each other, they've allowed me to gather different viewpoints & knowledge to enhance my abilities in a multitude of aspects. I'm also currently studying software development at Rutgers University and will be graduating in April. Not only that, they've allowed me to recognize what I'm passionate about & continuously striving for which is leading an organized & confident team to reach maximum effectiveness & proficiency for an organization while maintaining the highest possible team member satisfaction.
      </p>
      <p>
        Some examples of my results include;
      </p>
      <p>
        QVC:
        <ul>
          <li>Developed a more adept onboarding process for potential candidates to maximize safety while maintaining high levels of efficiency.</li>
          <li>Constituted clear & detailed step-by-step guides on how to both properly enter new team members into our GEPP System & create scannable badges for each new member as well.</li>
        </ul>
      </p>
      <p>
        Herr's:
        <ul>
          <li>Continuously set new sales records during our most important holiday events over the last 3 years & set a new record in sales over our summer season in 2021.</li>
        </ul>
      </p>
      <p>
        I love learning. I currently have an associate degree in Business Administration from HACC. However, I do plan on continuing my education & obtaining a bachelors degree in Business Management from Millersville University. I also have every intention in becoming fluent in Spanish.
      </p>
      <p>
        Outside of work, I spend a lot of time at the gym trying to maintain a healthy body. When I'm not at the gym or at work, my favorite hobby is playing & collecting a strategy card game called Magic the Gathering. I absolutely love the creativity, complex strategies, problem solving & teamwork that comes from playing.
      </p>
    </div>
  );
}

import '../styles/Home.css';
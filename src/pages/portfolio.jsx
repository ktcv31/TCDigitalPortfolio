import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Wicked Needles', repoLink: 'https://github.com/Project1-13/Project-13' },
    { title: 'Aurora Auction', repoLink: 'https://github.com/Alexand3rLe/AuctionWebsite' },

  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

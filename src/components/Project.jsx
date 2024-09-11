import React from 'react';

const Project = ({ title, imageUrl, appLink, repoLink }) => {

  const defaultImage = 'path-to-default-image.jpg';

  return (
    <div className="project">
      <h3>{title}</h3>
      {/* <img 
        src={imageUrl || defaultImage} 
        alt={title} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      /> */}
      <div>
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <br />
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;

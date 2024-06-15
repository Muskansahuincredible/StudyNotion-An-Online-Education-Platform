import React from 'react';
import { BarLoader } from 'react-spinners';
import loadingGif from '../../assets/Images/preloader.gif';
// import backgroundImg from '../../assets/Images/'; // Import your background image

const Loading = () => {
  return (
    <>
      <div style={{ ...styles.loaderContainer, backgroundImage: `url("https://media.istockphoto.com/id/943758330/vector/vector-e-learning-pattern-e-learning-seamless-background.jpg?s=612x612&w=0&k=20&c=g-LUAMLrBSk9PxS3UDEsbKrcLwAjjmwvWueUZNHaMek=")` }}>
        <img 
          src={loadingGif}
          alt="Loading GIF" 
          style={styles.gif} 
        />
        <BarLoader size={150} color={"#123abc"} loading={true} />
      </div>
    </>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white', // Fallback background color
    backgroundSize: 'cover', // Make sure the image covers the entire container
    backgroundImage: '', // Initially empty, will be replaced by the URL in runtime
  },
  gif: {
    marginBottom: '20px', // Add some space between the GIF and the loader
  },
};

export default Loading;

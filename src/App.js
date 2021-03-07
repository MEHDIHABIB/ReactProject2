import image from "./imageInSrc.jpg";


function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className="title red"> Your name here </h1>
      <br/>
      <img src={image} height="300px" width="300px"  alt="myImage" />
      <br/>
      <img src="/imageInPublic.jpg" height="300px" width="300px" alt="myImage" />
      <video width="320px" height="240px" controls >
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
       </div>
    </div>
  );
}

export default App;

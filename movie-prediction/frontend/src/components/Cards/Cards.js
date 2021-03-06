import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import card1 from "./card1.jpg"


export default function Sample() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '400px', height: '550px', margin:'30px 0px 0px 40px' }} /// these are optional style, it is not necessary
  >
    
    
    
    <FrontSide style={{ backgroundColor: '#fffffc'}} >
      <h2>IMDB Movie Rate Prediction</h2> <br /> 
      {/* <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button> */}
      <img src={card1}
       width="350px"
       height= '200px'
       margin="auto"
       padding="10px"
      >
      
      
      </img>

      <h3><p>Are you a young producer looking to make a new movie?</p> </h3>
      <h3><p>Use this feature to get which combination of actors, director and genre works the best for you!</p> </h3>
     </FrontSide>
    
    
    <BackSide style={{ backgroundColor: '#fffffc'}}>
      <h3>IMDB Movie Rate Prediction</h3>
      <div className="myList">
      <li style={{fontSize: "20px"}}>Sometimes budgeting a movie can prove to be costly if the movie fails badly at the box office.</li> <br></br>
      <li style={{fontSize: "20px"}}>This Feature predicts the success of movie by providing imdb score on the basis of actors and directors using Machine Learning Algorithm</li> <br></br>
      <li style={{fontSize: "20px"}}>If you are planning to invest heavy money and resources on any movie, it is better to know if movie will earn success or not  </li>
      <p> </p>
      </div>
    </BackSide>
  </Flippy>


  )
}
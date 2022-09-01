import {React , useState , useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { PieChart } from 'react-minimal-pie-chart';
function Leetcode() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/anjanayraina")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
    
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    console.log(items.totalSolved);
 
    return (
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My  <strong className="purple">Leetcode Profile</strong>
      </h1>
       <h1 className="project-heading">
          Total Questions Solved : <strong className="purple">{" "}{items.totalSolved}</strong> 
        </h1>
        <br/>
<br/>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Easy </h2>
        <div className = "rectangle-easy"></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Medium </h2>
        <div className = "rectangle-medium"></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2>Hard </h2>
        <div className = "rectangle-hard"></div>
      </Col>
<br/>
<br/>
      </Row> 
        <PieChart
  data={[

    {title : "Easy" , value : items.easySolved ,color: '#b284be'} ,
    {title : "Medium" , value : items.mediumSolved ,color: '#8a2be2'} ,
    {title : "Hard" , value : items.hardSolved ,color: '#551a8b'} 
  ] 
  }
  radius = {20} animation  animationDuration={500}
   animationEasing="ease-out"
   center={[50,25]}
/>;
        
        {/* {Console.log(items.totalSolved)} */}
      </Container>
    );
  }
}

export default Leetcode
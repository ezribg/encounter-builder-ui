import Monsters from "./Monsters";
import '../css/App.css'

const Home = (props) => {

    // const apiURL = "https://api.open5e.com/v2/";
    
    const apiURL = "https://www.dnd5eapi.co/graphql";
    

    return (
        <div>
            <Monsters apiURL={apiURL}/>
        </div>
    )

};

export default Home;
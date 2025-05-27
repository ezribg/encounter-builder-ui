import Monsters from "./Monsters";
import '../css/App.css'

const Home = (props) => {

    const apiURL = "https://www.dnd5eapi.co/graphql/2014";

    return (
        <div>
            <Monsters apiURL={apiURL} />
        </div>
    )

};

export default Home;
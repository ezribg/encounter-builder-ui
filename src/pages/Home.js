import Monsters from "./Monsters/Monsters";

const Home = (props) => {

    const apiURL = "https://api.open5e.com/v2/";

    return (
        <div>
            <Monsters apiURL={apiURL}/>
        </div>
    )

};

export default Home;
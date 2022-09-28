import "../styles/home.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Display from "../components/Display";
// import Header from "../components/Header";
function Home() {
    return (
        <> 
        {/* <div>Home Page</div> */}
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Display/>
            {/* <Display/> */}
        </div>
        </> 
    );
}

export default Home;
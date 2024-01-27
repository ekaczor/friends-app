import NavBar from "../../navBar/NavBar";
import FriendComponent from "../../components/FriendComponent";

//I think that I want to give the user the ability to add a hobby
const HomePage = () => {
  console.log("Hello World");
  return (
    <div>
    
      <header>
        <NavBar />
      </header>
      <div >
        <FriendComponent name='Joe'/>
      </div>
    </div>
  );
};

export default HomePage;


import NavBar from "../../navBar/NavBar";
// import FriendComponent from "../../components/FriendComponent";
import HomeHobby from "../../components/HomeHobby";

//I think that I want to give the user the ability to add a hobby
const HomePage = () => {
  console.log("Hello World");
  return (
    <div className="home-body">
    
      <header>
        <NavBar />
      </header>
      <content className="content">
      <h3 className="home-info">Welcome to HobbyNexus, a personalized space where you can showcase and celebrate your passions! This unique app allows you to curate your hobbies and effortlessly organize your friends based on shared interests. Imagine having a dedicated place to connect with friends who share your enthusiasm for specific activities. It's not just a social platform; it's your go-to hub for cultivating meaningful connections through shared hobbies. Explore, connect, and turn every moment into an opportunity for memorable experiences with like-minded friends. Ready to bring your interests to life and connect with friends who share your zest for life?</h3>
      <div >
        {/* <FriendComponent name='Joe'/> */}
        <HomeHobby/>
      </div>
      </content>
    </div>
  );
};

export default HomePage;

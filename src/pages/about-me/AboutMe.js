import NavBar from "../../navBar/NavBar";

const AboutMe = () => {
  console.log("Hello World");
  return (
    <div className="home-body">
      <header>
        <NavBar />
      </header>
      <p className="about-info">Hello, friends! I'm Evan, the creator of HobbyNexus. I'm passionate about bringing people together through shared interests and hobbies. As a firm believer in the joy of connecting with others over common pursuits, I've crafted HobbyNexus to be a platform where you can seamlessly organize and share your hobbies. Whether it's exploring new activities, discovering like-minded individuals, or simply building lasting connections, HobbyNexus is the place where your hobbies meet new friends. Join me on this exciting journey of fostering a community bound by the love for diverse and enriching hobbies. Let's make every hobby a shared adventure!
      </p>
    </div>
  );
};

export default AboutMe;

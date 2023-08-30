import MyProjectCard from "./MyProjectCard";

const MyProject = () => {
  return (
    <div className="myproject-form">
      <div className="myproject-title mb-30">
        <h2>My Projects</h2>
      </div>
      <div className="my-projects">
        <MyProjectCard></MyProjectCard>
        <MyProjectCard></MyProjectCard>
        
      </div>
    </div>
  );
};

export default MyProject;

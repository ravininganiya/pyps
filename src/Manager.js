import { useEffect, useState } from "react";

const Manager = () => {
  const [optn, setOptn] = useState([]);
  const [project, setProject] = useState();
  const [task, setTask] = useState([]);
  const [taskList, setTaskList] = useState();
  useEffect(() => {
    let tempVal = localStorage.getItem("admin");
    tempVal = JSON.parse(tempVal);
    // console.log(tempVal, "localstraoge");
    setOptn(tempVal);
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    let tempData = { project };
    // if (taskList == tempData) {
    // }
    setTaskList({ project, tasks: [task] });
    console.log(taskList);
    // let tempList = [...taskList, { project, task }];
    // setTask("");
    // setTaskList(tempList);
  };
  return (
    <>
      {console.log(taskList, "taskList")}
      Manager task
      <br />
      Project :
      <form onSubmit={(e) => handleAddTask(e)}>
        <select onChange={(e) => setProject(e.target.value)}>
          {optn &&
            optn.map((item) => <option value={item.Name}>{item.Name}</option>)}
        </select>
        <br />
        Task :{" "}
        <input
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>add task </button>
      </form>
    </>
  );
};

export default Manager;

import {useState} from "react";
import {useDispatch} from "react-redux";
import {storeTask} from "./utilities/state/taskSlice.js";


const App =() => {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleInput = (event) => {
        // console.log(event.target.value)

        setTask(event.target.value);
    }

    const addNewTask = () => {
        dispatch(storeTask(
            task
        ))
    }

  return (
      <>
          <div>
              <label htmlFor="small-input"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
              <input type="text" id="small-input" name="task" onChange={handleInput}
                     className=" w-1/2 m-4 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <button type="button" name="add_task" onClick={addNewTask}
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple
                  to Blue
              </button>

          </div>
          <div>
              <h1>{task}</h1>
          </div>
      </>
  )
}

export default App

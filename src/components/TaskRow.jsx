export const TaskRow = ({task, toggleTask}) => {
 
 
  return (
    <>
    <tr >
      <td>
        {task.name}
      <button
      onClick={()=> toggleTask(task)}
      >delet</button>
      
      </td>
    </tr>
  
    </>
  );

};

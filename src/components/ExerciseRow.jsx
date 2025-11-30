import '../App.css';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md'

function ExerciseRow({ exercise, onDelete, onEdit}) {
    return(
        <>
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
               <MdEdit onClick={e => {e.preventDefault(); onEdit(exercise)}} />

            </td>
            <td>
                <MdDelete onClick={e => {e.preventDefault(); onDelete(exercise._id)}} />
            </td>
        </tr>
        </>
    )
}

export default ExerciseRow;
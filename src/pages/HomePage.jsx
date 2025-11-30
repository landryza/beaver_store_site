import { Link, useNavigate } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useEffect, useState } from 'react';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises')
        const data = await response.json();
        setExercises(data)
    }

    useEffect(() => {
        loadExercises();
    }, []);

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            {method: 'DELETE'}
        );
        if(response.status === 204){
            setExercises(exercises.filter(m => m._id !== _id))
        } else{
            alert(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}` )
        }
    }

    const onEdit = (exercise) =>{
        setExerciseToEdit(exercise)
        navigate('/edit-exercise')
    }

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseTable>
            <Link to='/create-exercise'>Create an exercise</Link>
        </>
    );
}

export default HomePage;
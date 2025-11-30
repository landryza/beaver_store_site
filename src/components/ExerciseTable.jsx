import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, onDelete, onEdit}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
            {exercises.map((exercise) => (
                <ExerciseRow exercise={exercise}
                    onDelete={onDelete} onEdit={onEdit} key={exercise._id} />))}
                </tbody>
            </table>
        </>
    )
}

export default ExerciseTable;
import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
  })
  return (
    <div className="d-flex mt-5 ms-auto ">
      <button className="btn btn-light ms-2" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete
      </button>
    </div>
  )
}

export default DeleteProjectButton

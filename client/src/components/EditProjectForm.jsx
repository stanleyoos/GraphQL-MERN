import { useState } from 'react'
import { GET_PROJECT } from '../queries/projectQueries'
import { useMutation } from '@apollo/client'
import { UPDATE_PROJECT } from '../mutations/projectMutations'

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState(project.status)

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  })

  const onSubmit = (e) => {
    e.preventDefault()
    updateProject()
  }
  return (
    <div className="mt-5">
      <h4>Update project details</h4>
      <form onSubmit={onSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          {' '}
        </textarea>
        <label className="form-label">Status</label>
        <select
          className="form-select"
          id="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="new">Not started</option>
          <option value="progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="mt-3 btn btn-light">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditProjectForm

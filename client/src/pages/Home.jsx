import Clients from '../components/Clients'
import AddClientModal from '../components/AddClientModal'
import Projects from '../components/Projects'
import AddProjectModal from '../components/AddProjectModal'

const Home = () => {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}

export default Home

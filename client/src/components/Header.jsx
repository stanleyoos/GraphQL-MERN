import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link to="/" className="text-decoration-none m-2">
          <div className="d-flex">
            <h2 className="mr4">Projects Dashboard</h2>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header

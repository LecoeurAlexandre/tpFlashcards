import { Link, NavLink } from "react-router-dom"
import { useRef } from "react"

const NavBar = () => {

    const idQuestionRef = useRef()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> Accueil eFlashcard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={`/form`}> <i class="bi bi-patch-plus"></i>Ajouter une flashcard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={`/question/:id`}><i class="bi bi-shuffle">Flashcard au hasard</i></NavLink>
                </li>   
            </ul>
            <form className="d-flex ms-auto">
                <div className="mb-3 ">
                    <input type="number" id="nbQuestion" className="form-control" ref={idQuestionRef} required/>
                </div>
                <button className="btn btn-success btn-sm">GO</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
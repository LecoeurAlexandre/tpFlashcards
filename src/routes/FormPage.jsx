import { useDispatch } from "react-redux"
import { useRef } from "react"
import { addFlashCard } from "./FormSlice";

const FormPage = () => {
    const dispatch = useDispatch;

    const questionRef = useRef();
    const responseRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault()

        const question = questionRef.current.value
        const response = responseRef.current.value

        const flashCardValues = {
            question, 
            response
        }
        dispatch(addFlashCard(flashCardValues))
    }
    
    return (
      <>
        <h2>Ajout d'une flashcard</h2>
        <hr />
        <form onSubmit={submitFormHandler}>
            <div className="input-group mb-3">
                <span className="input-group-text">Question</span>
                <input type="text" className="form-control" ref={questionRef} required/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Explication</span>
                <textarea className="form-control" ref={responseRef} required></textarea>
            </div>
            <button type="button" className="btn btn-primary">Créer</button>
        </form>
      </>
    )
  }
  
  export default FormPage
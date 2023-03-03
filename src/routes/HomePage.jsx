import { useSelector } from "react-redux"

const HomePage = () => {
    const flashCard = useSelector(state => state.questions.questions)
    
    return (
      <>
        <h2>Flashcards</h2>
        <hr />
        <p>
        Un jeu de cartes mémoire (le terme anglais flashcard est parfois utilisé) est un dispositif d'apprentissage fondé sur la technique de la répétition espacée. Une carte mémoire étant une fiche cartonnée comportant une question et la réponse au dos, l'exercice consiste à tirer les cartes, et donc les questions, une à une, à essayer d'y répondre, puis à les répartir en fonction de la qualité de la réponse, appréciée par l'apprenant ; une autre succession de tirages intervenant quelque temps après, etc., jusqu'à ce que l'ensemble des réponses soient données sans erreur. 
        </p>
        <hr />
        <h3>Liste des Flashcards</h3>
        <hr />
        {}

      </>
    )
  }
  
  export default HomePage
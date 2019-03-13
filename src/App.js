import React from 'react';
import Flashcards from './Flashcards'
import FlashcardForm from './FlashcardForm'
import './App.css';
import { Container, Header } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, question: 'Does this work?', answer: 'Not yet' },
      { id: 2, question: 'Test', answer: 'Testing' },
      { id: 3, question: 'Test2', answer: 'Testing2' }
    ]
  }

  getId = () => Math.floor((1 + Math.random()) * 10000)

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData }
    this.setState({ flashcards: [flashcard, ...this.state.flashcards] })
  }

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
        return flashcard
    })
    this.setState({ flashcards: [...flashcards] })
  }

  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1'>React Flashcards</Header>
        <br />
        <FlashcardForm add={this.addFlashcard} />
        <hr />
        <Flashcards flashcards={this.state.flashcards} remove={this.removeFlashcard} />
      </Container>
    )
  }
}

export default App;

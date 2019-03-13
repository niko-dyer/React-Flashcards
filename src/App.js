import React from 'react';
import Flashcards from './Flashcards'
import FlashcardForm from './FlashcardForm'
import './App.css';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    flashcards: [
      { id: 1, question: 'Does this work?', answer: 'Not yet' },
      { id: 2, question: 'Test', answer: 'Testing' },
      { id: 3, question: 'Test2', answer: 'Testing2' }
    ],
    showForm: false
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

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1'>React Flashcards</Header>
        <hr />
        <br />
        <Segment basic>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          { this.state.showForm ? <FlashcardForm add={this.addFlashcard} /> : null }
        </Segment>
        <hr />
        <Flashcards flashcards={this.state.flashcards} remove={this.removeFlashcard} />
      </Container>
    )
  }
}

export default App;

import React from 'react';
import Flashcards from './Flashcards'
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

  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1'>React Flashcards</Header>
        <hr />
        <Flashcards flashcards={this.state.flashcards} />
      </Container>
    )
  }
}

export default App;

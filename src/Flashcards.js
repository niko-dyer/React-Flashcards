import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import Flashcard from './Flashcard'

class Flashcards extends React.Component {

    render() {
        return (
            // <Segment.group style={{ cursor: 'pointer' }}>
            <div>
                {
                    this.props.flashcards.map(flashcard => (
                        <Flashcard question={flashcard.question} id={flashcard.id} remove={this.props.remove} answer={flashcard.answer} key={flashcard.id} raised />
                    ))
                }
            </div>

        )
    }

}

export default Flashcards;
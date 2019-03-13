import React from 'react'
import { Button, Card } from 'semantic-ui-react'

class Flashcard extends React.Component {
    state = {
        showQuestion: true,
    }

    toggleQuestion = () => {
     this.setState({showQuestion: !this.state.showQuestion})
    }

    render() {
        return (
            <Card
                fluid
                color='red'
                onClick={this.toggleQuestion}
            >
            {this.state.showQuestion ? this.props.question : this.props.answer}
            </Card>
        )
    } 
}

export default Flashcard;
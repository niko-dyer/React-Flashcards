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
            <div>
                <Card
                    fluid
                    color='red'
                    onClick={this.toggleQuestion}
                    style={{padding: '30px', marginTop: '20px'}}
                >
                {this.state.showQuestion ? this.props.question : this.props.answer}
                </Card>
                <Button color='blue' onClick={() => this.props.remove(this.props.id)}>Delete</Button>
            </div>
        )
    } 
}

export default Flashcard;
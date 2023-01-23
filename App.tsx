import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <WordAdder></WordAdder>
    </div>
  );
}
class ListOfWords extends React.Component {
  render() {
    return (
      <div>
        <h2>List1 </h2>
        {this.props.words.join(',')}
      </div>
    );
  }
}
class ListOfWords2 extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>List2(Pure) </h2>
        {this.props.words.join(',')}
      </div>
    );
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    //can be solved by using [.... this.state.words] here
    words.push('marklar');
    this.setState({ words: words });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <ListOfWords words={this.state.words} />
        <ListOfWords2 words={this.state.words} />
        <h2>Orignal List </h2>
        length {this.state.words.length} <h5>list </h5>
        {this.state.words.join(',')}
      </div>
    );
  }
}

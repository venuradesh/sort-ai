import React, { Component } from "react";

class Assessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&category=18")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.results,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1>Answer the questions</h1>{" "}
        {items.map((item, x) => (
          <ol key={x}>
            <li>
              {item.question}
              <br />
              <input type="checkbox" />
              <label> {item.correct_answer}</label>
              <br />
              <input type="checkbox" />
              <label> {item.incorrect_answers[0]}</label>
              <br />
            </li>
          </ol>
        ))}
        <input type="button" value={"Click to Submit"} />
      </div>
    );
  }
}

export default Assessment;

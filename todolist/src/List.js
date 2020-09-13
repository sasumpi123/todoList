import React from "react";

/*
{
  content: string;
  isDone: boolean;
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      currentContent: "",
    };
  }

  addToDo = () => {
    const { toDoList, currentContent } = this.state;

    toDoList.push({
      content: currentContent,
      isDone: false,
    });

    this.setState({ toDoList, currentContent: currentContent });
  };

  changeContent = (e) => {
    const value = e.target.value;
    this.setState({ currentContent: value });
  };

  deleteToDo = (index) => {
    const { toDoList } = this.state;
    toDoList[index].isDone = true;
    this.setState({ toDoList });
  };

  render() {
    const { toDoList, currentContent } = this.state;

    return (
      <div>
        <input value={currentContent} onChange={this.changeContent}></input>
        <button onClick={this.addToDo}>add to do list</button>
        {toDoList.map((toDo, index) => {
          return (
            <ToDo
              toDo={toDo}
              id={index}
              key={index}
              deleteToDo={this.deleteToDo}
            ></ToDo>
          );
        })}
      </div>
    );
  }
}

class ToDo extends React.Component {
  get menu() {
    const { toDo, deleteToDo, id } = this.props;
    if (!toDo.isDone) {
      return <button onClick={() => deleteToDo(id)}>Im Done!.</button>;
    } else {
      return null;
    }
  }

  render() {
    const { toDo, id } = this.props;
    return (
      <div>
        {id}----------{toDo.content}
        -----------{JSON.stringify(toDo.isDone)}
        {this.menu}
      </div>
    );
  }
}

export default App;

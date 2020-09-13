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
      todoList: [],
      currentContent: "",
    };
  }
  addToDo = () => {
    const { todoList, currentContent } = this.state;

    todoList.push({
      content: currentContent,
      isDone: false,
    });
    this.setState({ todoList });
  };
  doneTodo = (index) => {
    const { todoList } = this.state;
    todoList[index].isDone = true;
    this.setState({ todoList });
  };
  deleteTodo = (index) => {
    const { todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({ todoList });
  };
  changeContent = (e) => {
    const value = e.target.value;
    this.setState({ currentContent: value });
  };

  render() {
    const { todoList, currentContent } = this.state;

    return (
      <div>
        <input value={currentContent} onChange={this.changeContent}></input>
        <button onClick={this.addToDo}>add to do list</button>
        {todoList.map((list, index) => {
          return (
            <div key={index}>
              {index}
              -----------
              {list.content}
              -----------
              {list.isDone}
              <button onClick={() => this.doneTodo(index)}>완료</button>
              <button onClick={() => this.deleteTodo(index)}>삭제</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

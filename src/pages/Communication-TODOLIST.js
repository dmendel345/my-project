import React from 'react'
import MainNavbar from '../components/MainNavbar'
import { Jumbotron, Container, Image, Navbar, InputGroup, FormControl, Form ,Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class TodoEntry extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Enter a Todo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
      </div>
    );
  }
}



var todoItems = [];
todoItems.push({ index: 1, value: "First todo", done: false });
todoItems.push({ index: 2, value: "Second todo", done: true });
todoItems.push({ index: 3, value: "Third todo", done: true });

class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      console.log("TodoList items: " + item);
      console.log("TodoList items: " + items);
      console.log("TodoList items: " + index);
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
    console.log("onClickClose index: " + index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
    console.log("onClickDone index: " + index);
  }
  render() {
    var todoClass = this.props.item.done ?
      "done" : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="false" color="red" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <Form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <br />
        <input type="text" ref="itemName" className="form-control" placeholder="What next ?" />
        <br />
        <Button  type="submit" className="btn btn-default">Add Todo</Button >
      </Form>
    );
  }
}

class TodoHeader extends React.Component {
  render() {
    return (
    <Navbar bg="light" expand="lg">
      <h1>Todo list</h1>
    </Navbar>
    );
  }
}

  class Communication extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = {}
    }

    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length + 1,
        value: todoItem.newItemValue,
        done: false
      });
      this.setState({ todoItems: todoItems });
      console.log("addItem todoItem: " + todoItem);
      console.log("addItem todoItems: " + todoItems);
    }
    removeItem(itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({ todoItems: todoItems });
      console.log("removeItem itemIndex: " + itemIndex);
    }
    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({ todoItems: todoItems });
      console.log("markTodoDone itemIndex: " + itemIndex);
    }

    render() {

        var background = { backgroundSize: 'auto' };
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <MainNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">Communication</h1>
                        <h3 className="display-6">Request from your Portfolio manager.</h3>
                        <Image
                            style={background} className="img-fluid"
                            src="https://image.freepik.com/free-vector/communication-information-website-graphic_53876-27044.jpg">
                        </Image>
                        <p>Lets Talk! </p>
                        <TodoHeader />
                        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
                        <TodoForm addItem={this.addItem} />
                        {/* <p>
                            <Button variant="primary" href="#/login">Login </Button>

                            <Button variant="primary" href="#/Signup">SignUp</Button>
                        </p> */}
                        <TodoEntry/>
                        </Container>
                        </Jumbotron>
            </div>
        );
    }
}

export default Communication;
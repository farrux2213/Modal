import { Component } from "react";
import { Button, Modal } from "antd";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
    };
  }

  render() {
    return (
      <div className="style_wrapper">
        <Modal
          onCancel={() => {
            this.setState({ modalShow: false });
          }}
          title="name modal"
          open={this.state.modalShow}
        >
          <h1>Modal</h1>
        </Modal>
        <Button
          onClick={() => {
            this.setState({ modalShow: true });
          }}
          type="primary"
        >
          {" "}
          Click to open Modal
        </Button>
      </div>
    );
  }
}

export default App;

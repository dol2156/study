import React, {Component} from "react";

class Form extends Component {
  constructor(props) {
    // constructor => 컴포넌트가 실행될때 render 함수 실행전에 초기화 해야 할 부분을 작성한다.
    super(props);
    
    const _app = this.props.parent;
    const _mode = _app.state.mode;
    const _nav_data = _app.state.nav_data;
    const _selected_nav_data_id = Number(_app.state.selected_nav_data_id);
    let _selected_data = _nav_data.find((item) => {
      if (item.id === _selected_nav_data_id) {
        return true;
      }
    });
    
    if (_mode === 'create') {
      this.state = {
        title : "",
        desc : "",
      }
    } else if (_mode === 'update') {
      this.state = {
        title : _selected_data.title,
        desc : _selected_data.desc,
      }
    }
    this.state.mode = _mode;
    
    this.changeValue = this.changeValue.bind(this);
  }
  
  changeValue(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {
    return (
      <article className="Form" data-cpnt="Form">
        <h2>Create or Update</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const _title = e.target.title.value;
            const _desc = e.target.desc.value;
            
            var _mode = this.state.mode;
            if (_mode === "create") {
              this.props.fnCreateSubmit(_title, _desc);
            } else if (_mode === "update") {
              this.props.fnUpdateSubmit(_title, _desc);
            }
            
          }}
        >
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.changeValue}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="desc"
              placeholder="desc"
              value={this.state.desc}
              onChange={this.changeValue}
            ></input>
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </article>
    )
  }
}

export default Form;

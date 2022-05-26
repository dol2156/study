import React, {Component} from "react";

class Toc extends Component {
  
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href="/"
            data-idx={i}
            onClick={(evt) => {
              evt.preventDefault();
              let idx = Number(evt.target.dataset.idx);
              this.props.onChangePage(idx);
            }}
          >{data[i].title}</a>
        </li>);
      i++;
    }
    
    return (
      <nav className="Toc" data-cpnt="Toc">
        <ul>
          {data.map((_obj, _idx) => (
            <li key={_idx}>
              <a
                href="/"
                data-idx={_idx}
                onClick={(evt) => {
                  evt.preventDefault();
                  let idx = Number(evt.target.dataset.idx);
                  this.props.onChangePage(idx);
                }}
              >{_obj.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Toc;

const arr = [1, 2];

function 네비({topics, onClick}) {
  
  return (
    <aside>
      <ul>
        {
          topics.map((obj, idx) => {
            let react_el;
            react_el =
              <li key={idx}>
                <a id={obj.id} href="#!" onClick={onClick}>{obj.title}</a>
              </li>;
            return react_el;
          })
        }
      </ul>
    </aside>
  );
}

export default 네비;
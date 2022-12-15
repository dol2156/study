function Home() {
  function onItemClick(e, idx) {
    const $target = e.target;
    console.log($target, idx);
  }

  return (
    <>
      <h2 onClick={onItemClick}>Home</h2>
      <ul>
        {new Array(20).fill(undefined).map((obj, idx) => {
          return (
            <li key={idx} onClick={(e) => onItemClick(e, idx)}>
              {idx}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Home;

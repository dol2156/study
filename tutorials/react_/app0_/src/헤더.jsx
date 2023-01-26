function 헤더({title, title2, onChangeMode}) {
  
  return (
    <header>
      <a href="/" onClick={onChangeMode}>{title} {title2}</a>
    </header>
  );
}

export default 헤더;
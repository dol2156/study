import Link from "next/link";
function PageMain({title}) {
  return (
    <div data-title={title} className={`PageMain`}>
      <h1>PageMain</h1>
      <ul>
        <li>
          <Link href={`PageSub`}>PageSub</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageMain;
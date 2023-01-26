import Link from "next/link";
function PageSub({title}) {
  return (
    <div data-title={title} className={`PageSub`}>
      <h1>/tutorials/nextjs_/src/pages/PageSub.jsx</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageSub;
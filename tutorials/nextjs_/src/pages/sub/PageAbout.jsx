import Link from "next/link";
function PageAbout({title}) {
  return (
    <div data-title={title} className={`PageAbout`}>
      <h1>/tutorials/nextjs_/src/pages/sub/PageAbout.jsx</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageAbout;
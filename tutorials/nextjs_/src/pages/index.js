import Link from "next/link";
function Home({title}) {
  return (
    <div data-title={title} className={`index`}>
      <h1>/tutorials/nextjs_/src/pages/index.js</h1>
      <ul>
        <li>
          <Link href="/PageSub">/PageSub</Link>
        </li>
        <li>
          <Link href="/sub/PageAbout">/sub/PageAbout</Link>
        </li>
        <li>
          <Link href="/1">/1</Link>
        </li>
        <li>
          <Link href="/2">/2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
import Link from "next/link";
import {useRouter} from "next/router";
function PageId({title}) {
  
  const router = useRouter();
  const id = router.query.id;
  
  return (
    <div data-title={title} className={`PageId`}>
      <h1>/tutorials/nextjs_/src/pages/[id].jsx</h1>
      <h2>Parameter id : {id}</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageId;
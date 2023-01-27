import Link from "next/link";
import LayoutEmpty from "@/layouts/LayoutEmpty";
function PageSub({title}) {
  return (
    <div data-title={title} className={`PageSub`}>
      <h1>PageSub</h1>
      <ul>
        <li>
          <Link href={`/`}>HOME</Link>
        </li>
      </ul>
    </div>
  );
}

PageSub.Layout = LayoutEmpty;
export default PageSub;
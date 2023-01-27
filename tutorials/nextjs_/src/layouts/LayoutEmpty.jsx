import Head from "next/head";
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
function LayoutEmpty({title,children}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta id="viewport" name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <link rel="icon" href="data:,"/>
        <title>LayoutEmpty</title>
      </Head>
      <div id="page">
        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default LayoutEmpty;
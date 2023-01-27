import '@/styles/globals.css'
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import Head from "next/head";
import {useRouter} from "next/router";
import LayoutBasic from "@/layouts/LayoutBasic";

export default function App({Component, pageProps}) {
  const router = useRouter();
  const asPath = router.asPath;
  console.log("asPath : ", asPath);
  
  const NestedLayout = Component.Layout || LayoutBasic;
  
  return (
    <>
      <NestedLayout>
        <Component {...pageProps} />
      </NestedLayout>
    </>
  )
}

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다.
 * 페이지 전환시 상태값을 유지할 수 있습니다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
 * 글로벌 CSS 를 이곳에 선언합니다.
 */

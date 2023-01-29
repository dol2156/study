import Link from "next/link";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import Image from "next/image";

function PageMain({title}) {
  
  const us_image_list = useState([]);
  const image_list = us_image_list[0];
  const setImageList = us_image_list[1];
  
  const [image_count, setImageCount] = useState(3);
  const [image_width, setImageWidth] = useState(560);
  const [image_height, setImageHeight] = useState(315);
  
  useEffect(() => {
    // mount
    console.log('PageMain');
  }, [])
  
  async function createImage() {
    console.log('createImage');
    
    const result = [];
    const count = image_count;
    const width = image_width;
    const height = image_height;
    console.log(count, width, height);
    setImageList(Array.from(Array(count)).fill(`https://gifpng.com/${width}x${height}/dddddd/333333/?border-width=0`));
    
    let i = 0;
    let len_i = count;
    while (i < len_i) {
      console.log(i);
      const seq = Date.now();
      const url = `https://source.unsplash.com/${width}x${height}/?nature,water&ver=${seq}`;
      let imageString = await loadImage(url, result);
      result.push(imageString);
      ++i;
    }
    setImageList(result);
  }
  
  function loadImage(url, result) {
    return new Promise((resolve, reject) => {
      // https://axios-http.com/kr/docs/req_config
      const api = url;
      const params = {};
      
      axios({
        url : api,
        method : 'get',
        params : params, // 'GET' 메소드에서 사용
        data : params, // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능합니다.
        responseType : 'arraybuffer',// 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
        timeout : 0, // 기본값은 `0` (타임아웃 없음)
        //headers : {'Content-Type' : 'multipart/form-data'},
      })
        .then(async (response) => {
          // console.log(response);
          const imageData = response.data;
          const buffer = Buffer.from(imageData, 'base64');
          const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
          const imgString = `data:image/png;base64,${base64String}`;
          
          const isOverlap = (result.indexOf(imgString) > -1);
          console.log("isOverlap : ", isOverlap);
          if (isOverlap) {
            console.log('중복 발생 재생성');
            let imageString = await loadImage(url, result);
            resolve(imageString);
          } else {
            resolve(imgString);
          }
          
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
        });
    });
    
  }
  
  return (
    <div data-title={title} className={`PageMain`}>
      <h1>PageMain</h1>
      <div>
        <input type="number" placeholder="이미지 개수" defaultValue={image_count} onInput={(evt) => {
          const val = parseInt(evt.target.value);
          setImageCount(val);
        }}/>
        <input type="number" placeholder="이미지 width" defaultValue={image_width} onInput={(evt) => {
          const val = parseInt(evt.target.value);
          setImageWidth(val);
        }}/>
        <input type="number" placeholder="이미지 height" defaultValue={image_height} onInput={(evt) => {
          const val = parseInt(evt.target.value);
          setImageHeight(val);
        }}/>
        <button onClick={(evt) => {
          // console.log(evt.target);
          createImage();
        }}>생성
        </button>
      </div>
      <div>
        {
          image_list.map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <a download="custom-filename.jpg" href={obj} title="ImageName">
                  <Image src={obj} width={image_width} height={image_height} priority alt=""/>
                </a>
              </Fragment>
            );
          })
        }
      </div>
    </div>
  );
}

export default PageMain;
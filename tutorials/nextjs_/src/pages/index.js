import Link from "next/link";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import Image from "next/image";
import JSZip from "jszip";
import {saveAs} from 'file-saver';

function PageMain({title}) {
  
  const us_image_list = useState([]);
  const image_list = us_image_list[0];
  const setImageList = us_image_list[1];
  
  const [image_base_64_list, setImageBase64List] = useState([]);
  
  const [image_count, setImageCount] = useState(2);
  const [image_width, setImageWidth] = useState(560);
  const [image_height, setImageHeight] = useState(315);
  
  function downloadImage() {
    console.log("image_base_64_list : ", image_base_64_list);
    
    const zip = new JSZip();
    
    image_base_64_list.forEach((obj, idx) => {
      console.log("idx : ", idx);
      const imgData = obj;
      zip.file(`img-${idx}.jpg`, imgData, {base64 : true});
    });
    
    zip.generateAsync({type:"blob"})
      .then(function(content) {
        // see FileSaver.js
        saveAs(content, "images.zip");
      });
  }
  
  useEffect(() => {
    // mount
    console.log('PageMain');
  }, [])
  
  async function createImage() {
    console.log('createImage');
    
    setImageBase64List([]);
    
    const result = [];
    const arr = [];
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
      let base64Str = await loadImage(url, result);
      setImageBase64List(ori => [...ori, base64Str]);
      let imgStr = "data:image/png;base64," + base64Str;
      result.push(imgStr);
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
            resolve(await loadImage(url, result));
          } else {
            resolve(base64String);
          }
          
        })
        .catch(async (error) => {
          console.log(error);
          resolve(await loadImage(url, result));
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
        <button onClick={(evt) => {
          // console.log(evt.target);
          downloadImage();
        }}>다운로드
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
const path = require("path");

module.exports = {
  // 선택한 모드를 통해 webpack이 알맞은 내장 최적화를 사용
  mode: "development", // "production" | "development" | "none"

  // ./src 를 기본으로 함
  // 애플리케이션이 여기에서 실행되며
  // webpack이 번들링을 시작
  entry: "./src/index.js", // string | object | array

  // webpack이 결과를 내보내는 방법과 관련된 옵션
  output: {
    // 모든 출력 파일의 대상 디렉터리는
    // 반드시 절대 경로 여야함 (Node.js의 path 모듈을 사용)
    path: path.resolve(__dirname, "public"), // string (기본값)

    // the filename template for entry chunks
    filename: "main.js", // string (기본값)
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

// HTMLから id="heading" の要素（h1タグ）を取得する
const heading = document.getElementById('heading');

// 現在の角度を保存しておく変数
let degree = 0;

// 見出しを回転させる関数
function rotateHeading() {
  degree = degree + 6;       // 角度を6度ずつ増やす
  degree = degree % 360;     // 360度になったら0度に戻す
  heading.style.transform = 'rotateX(' + degree + 'deg)';
}

// 20ミリ秒（0.02秒）ごとに rotateHeading 関数を繰り返し実行する
setInterval(rotateHeading, 20);
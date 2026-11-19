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
setInterval(rotateHeading, 40);

// --- 時間帯に合わせた挨拶を表示する機能 ---

/**
 * 時刻に応じた挨拶メッセージを返す
 * @param {number} hour 現在の「時」（0〜23）
 * @returns {string} 挨拶メッセージ
 */
function getGreetingMessage(hour) {
  if (hour >= 5 && hour < 11) {
    return 'おはようございます！ドリ研のポートフォリオへようこそ。' ;
  } else if (hour >= 11 && hour < 18) {
    return 'こんにちは！ドリ研のポートフォリオへようこそ。';
  } else {
    return 'こんばんは！ドリ研のポートフォリオへようこそ。';
  }
}

const greetingElement = document.getElementById('greeting');
const now = new Date();
const currentHour = now.getHours();

greetingElement.textContent = getGreetingMessage(currentHour);
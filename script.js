function nextPage() {
  document.querySelector(".page").innerHTML = `
    <h1>🎂 Happy Birthday! 🎉</h1>

    <p>
      Okay... I'm really sorry I'm late 😭❤️
    </p>

    <p>
      But I couldn't let your birthday pass without doing something special for you.
    </p>

    <button onclick="showLetter()">Read your letter 💌</button>
  `;
}

function showLetter() {
  document.querySelector(".page").innerHTML = `
    <h1>💌 A Little Letter For You</h1>

    <p>
      Heyyy! ❤️
    </p>

    <p>
      I know this surprise is a little late...
      but sometimes the best things take a little extra time. 🥹
    </p>

    <p>
      Thank you for all the memories, laughs, stupid conversations,
      and all the crazy moments we've shared. 😂❤️
    </p>

    <p>
      I hope we create many more memories together.
      Once again, Happy Birthday! 🎂🥳
    </p>

    <button onclick="showMemories()">Our Memories 📸</button>
  `;
}

function showMemories() {
  document.querySelector(".page").innerHTML = `
    <h1>📸 Our Memories ❤️</h1>

    <p>Some moments I'll always remember 🥹</p>

    <div class="memories">

      <div class="memory">
        <img src="IMG_20250822_101731_1.jpg">
        <p>One of my favorite memories with you ❤️</p>
      </div>

      <div class="memory">
        <img src="IMG_20250906_095816.jpg">
        <p>Look at us 😂❤️</p>
      </div>

      <div class="memory">
        <img src="IMG_20260510_081211.jpg">
        <p>Another beautiful memory 🥹❤️</p>
      </div>

      <div class="memory">
        <img src="IMG_20260729_215834_3.jpg">
        <p>More memories to come... 🫶</p>
      </div>

      <div class="memory">
        <img src="IMG-20260524-WA0015.jpg">
        <p>And this one too ❤️</p>
      </div>

    </div>

    <button onclick="showGift()">There's one last thing... 🎁</button>
  `;
}

function showGift() {
  document.querySelector(".page").innerHTML = `
    <div class="gift-page">

      <h1>🎁 One Last Surprise...</h1>

      <p>You've reached the end 👀</p>

      <p>
        I know I'm late... 😭❤️
      </p>

      <button onclick="revealGift()">Open Your Gift 🎁</button>

    </div>
  `;
}

function revealGift() {
  document.querySelector(".page").innerHTML = `
    <div class="gift-page">

      <h1>🎉 SURPRISE!!! 🎉</h1>

      <div class="gift">🎁</div>

      <h2>HAPPY BIRTHDAY! ❤️</h2>

      <p>
        Your birthday toy is finally waiting for you! 😭😂
      </p>

      <p>
        Sorry for the late surprise, but I hope this makes
        you smile. 🥹❤️
      </p>

      <h2>🎂🥳❤️</h2>

      <p>
        More memories, more laughs and more crazy moments
        together! 🫶
      </p>

    </div>
  `;
}

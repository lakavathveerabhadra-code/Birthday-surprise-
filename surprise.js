function nextPage() {
  document.querySelector(".page").innerHTML = `
    <h1>🎂 Happy Birthday, My Man ❤️</h1>

    <p>Okay... I'm really sorry I'm late 😭❤️</p>

    <p>
      But I couldn't let your birthday pass without doing
      something special for you.
    </p>

    <button onclick="showLetter()">Read your letter 💌</button>
  `;
}

function showLetter() {
  document.querySelector(".page").innerHTML = `
    <h1>💌 A Little Letter For You</h1>

    <p>Heyyy, my man ❤️</p>

    <p>
      I know this surprise is a little late... 😭
      but I really wanted to make something special for you.
    </p>

    <p>
      Honestly, I feel so comfortable whenever I'm with you.
      With you, I can be completely myself without pretending
      or thinking too much. 🥹❤️
    </p>

    <p>
      Thank you for all the laughs, stupid conversations,
      crazy moments and beautiful memories we've shared. 😂❤️
    </p>

    <p>
      You've become such an important person in my life,
      and I never want to lose the bond we have.
    </p>

    <p>
      I don't want to leave your side until my very last breath. ❤️
    </p>

    <p>
      No matter how life changes, I hope we always stay
      close and keep making memories together. 🫶
    </p>

    <p>
      This surprise may be late...
      but the feelings behind it aren't. 🥹❤️
    </p>

    <p>
      Once again...
      <br>
      <strong>Happy Birthday, My Man! 🎂🥳❤️</strong>
    </p>

    <button onclick="showMemories()">Our Memories 📸</button>
  `;
}


let currentPhoto = 0;

const photos = [
  "IMG-20260524-WA0015.jpg",
  "IMG_20250822_101731_140.jpg",
  "IMG_20250906_095816.jpg",
  "IMG_20260510_081211.jpg",
  "IMG_20260729_215834_354.jpg"
];

const captions = [
  "One of my favorite memories with you ❤️",
  "A moment I'll always remember 🥹❤️",
  "Look at us 😂❤️",
  "Another beautiful memory with my man 🫶",
  "A memory I'll keep forever ❤️"
];


function showMemories() {
  currentPhoto = 0;

  document.querySelector(".page").innerHTML = `
    <h1>📸 Our Memories ❤️</h1>

    <p>One memory at a time... 🥹</p>

    <div class="memory-frame">

      <img id="memoryPhoto" src="${photos[currentPhoto]}">

      <p id="memoryCaption">
        ${captions[currentPhoto]}
      </p>

    </div>

    <button onclick="nextMemory()">Next Memory ➡️</button>
  `;
}


function nextMemory() {
  currentPhoto++;

  if (currentPhoto < photos.length) {

    document.getElementById("memoryPhoto").src =
      photos[currentPhoto];

    document.getElementById("memoryCaption").innerHTML =
      captions[currentPhoto];

  } else {

    showGift();

  }
}


function showGift() {
  document.querySelector(".page").innerHTML = `
    <div class="gift-page">

      <h1>🎁 One Last Surprise...</h1>

      <p>
        You've reached the end of our little memory album 👀❤️
      </p>

      <p>
        But wait...
        I still have one more thing for you. 🥹
      </p>

      <button onclick="revealGift()">
        Open Your Gift 🎁
      </button>

    </div>
  `;
}


function revealGift() {
  document.querySelector(".page").innerHTML = `
    <div class="gift-page">

      <h1>🎉 SURPRISE!!! 🎉</h1>

      <div class="gift">🎁</div>

      <h2>HAPPY BIRTHDAY, MY MAN ❤️</h2>

      <p>
        Your birthday surprise is finally here! 😭😂❤️
      </p>

      <p>
        I know I'm late...
        but I hope this little surprise makes you smile. 🥹
      </p>

      <p>
        Keep this smile forever. ❤️
      </p>

      <h2>🎂🥳❤️</h2>

      <p>
        Here's to many more memories,
        laughs and crazy moments together. 🫶
      </p>

      <p>
        <strong>
          Happy Birthday once again, my man! ❤️
        </strong>
      </p>

    </div>
  `;
}

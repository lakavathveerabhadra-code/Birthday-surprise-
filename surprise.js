function nextPage() {
  document.querySelector(".page").innerHTML = `
    <h1>🎁 I Missed Giving You This On Your Birthday... 🥹</h1>

    <p>
      I know I'm a little late, and I'm really sorry. ❤️
    </p>

    <p>
      I missed giving this to you on your birthday,
      but I didn't want to let it go without giving you
      something special.
    </p>

    <p>
      So I'm presenting it to you now... ❤️🎁
    </p>

    <p>
      I hope this little surprise makes you smile. 🥹
    </p>

    <button onclick="showLetter()">
      Open Your Surprise 🎁
    </button>
  `;
}


function showLetter() {
  document.querySelector(".page").innerHTML = `
    <h1>💌 A Little Letter For You</h1>

    <p>
      Heyyy, my man ❤️
    </p>

    <p>
      I know this surprise is a little late...
      but I really wanted to make something special for you. 🥹
    </p>

    <p>
      Honestly, I feel so comfortable whenever I'm with you.
      With you, I can be completely myself without pretending
      or thinking too much. ❤️
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

    <button onclick="showMemories()">
      Our Memories 📸
    </button>
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
  "A memory that will always have a special place in my heart ❤️",
  "Just one of those moments that makes me smile whenever I see it 🥹❤️",
  "Look at us 😂❤️ Some memories are simply unforgettable.",
  "Another beautiful moment with my man 🫶❤️",
  "And this one... a memory I'll always keep close to my heart ❤️🥹"
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

    <button onclick="nextMemory()">
      Next Memory ➡️
    </button>
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
        You've reached the end of our little memory album. ❤️
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

      <button onclick="showFinalMessage()">
        One More Thing... ❤️
      </button>

    </div>
  `;
}


function showFinalMessage() {
  document.querySelector(".page").innerHTML = `
    <div class="final-page">

      <h1>❤️ For You, My Darling</h1>

      <img
        class="my-photo"
        src="Screenshot_20260625_094330.jpg"
        alt="A special photo"
      >

      <h2>Love you, darling ❤️</h2>

      <p>
        Miss you more than you know. 🥹❤️
      </p>

      <p>
        Thank you for being such a beautiful part
        of my life and for giving me so many memories
        to treasure.
      </p>

      <p>
        No matter how far or how much time passes,
        you'll always have a special place in my heart. ❤️
      </p>

      <h2>
        Happy Birthday, My Man! 🎂🥳❤️
      </h2>

      <p>
        With all my love... ❤️
      </p>

    </div>
  `;
}

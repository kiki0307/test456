/* ============================================================
   Exp 4 — FL Path Animator clips
   Edit the `videos` array below. To make a card play a real
   YouTube clip, just fill in its `id` with the 11-char video ID
   (e.g. "dQw4w9WgXcQ"). Cards with no id show as static thumbs.
   ============================================================ */

const videos = [
  { title: "Wan2.2 FL Path Stat…",  term: "static shot", id: "", tone: "#3a3f4d" },
  { title: "Wan2.2 FL Path Pan…",   term: "Pan Left",    id: "", tone: "#8a9b5a" },
  { title: "Wan2.2 FL Path Pan…",   term: "Pan Right",   id: "", tone: "#9aa362" },
  { title: "Wan2.2 FL Path Zoo…",   term: "zoom in",     id: "", tone: "#5a3f4a" },

  { title: "Wan2.2 FL Path Zoo…",   term: "zoom out",    id: "", tone: "#6b4a32" },
  { title: "02 Wan2.2 FL Path T…",  term: "Tilt Up",     id: "", tone: "#1d2a22" },
  { title: "Wan2.2 FL Path Tilt…",  term: "Tilt Down",   id: "", tone: "#2c2e3a" },
  { title: "Wan2.2 FL Path Han…",   term: "Handheld",    id: "", tone: "#42484e" },

  { title: "Wan2.2 FL Path Doll…",  term: "Dolly In",    id: "", tone: "#2a1f1a" },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Out",   id: "", tone: "#322620" },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Left",  id: "", tone: "#2e2622" },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Right", id: "", tone: "#382a22" },
];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const thumbBg = v.id
    ? `background-image:url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg);background-size:cover;background-position:center;`
    : `background:linear-gradient(160deg, ${v.tone}, #0e0e10);`;

  card.innerHTML = `
    <div class="vthumb" style="${thumbBg}" role="button" tabindex="0"
         aria-label="Play: Wan 2.2 ATI — ${v.term}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </div>
    <p class="vcap">
      Wan 2.2 with ATI (FL Path Animator)<br>
      <span class="redhint">(with camera movement term</span>
      "<span class="term">${v.term}</span>" in prompt )
    </p>
  `;

  const thumb = card.querySelector(".vthumb");

  function play() {
    if (!v.id) return;                       // no real clip wired yet
    if (thumb.classList.contains("is-playing")) return;
    thumb.classList.add("is-playing");
    thumb.innerHTML =
      `<iframe src="https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0"
        title="${v.title}" allow="autoplay; encrypted-media; fullscreen"
        allowfullscreen></iframe>`;
  }

  thumb.addEventListener("click", play);
  thumb.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
  });

  grid.appendChild(card);
});

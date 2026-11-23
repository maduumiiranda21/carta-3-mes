/* =========================================================
   CARTA DE HOGWARTS — 60 ENVELOPES
   Organização: dados, datas/estado, navegação e componentes.
   ========================================================= */
const LETTERS = [{"day": 1, "title": "Uma criatura rara", "reason": "Eu amo como você consegue transformar uma conversa simples em uma lembrança que quero guardar.", "song": "Sweet Creature", "artist": "Harry Styles", "date": "03"}, {"day": 2, "title": "O seu jeito de encantar", "reason": "Seu carinho tem uma forma só sua de chegar até mim, até nos detalhes que parecem pequenos.", "song": "Adore You", "artist": "Harry Styles", "date": "04"}, {"day": 3, "title": "Meu lugar favorito", "reason": "Eu gosto de imaginar os dias comuns ao seu lado: dividir planos, rir de bobagens e inventar tradições nossas.", "song": "Lover", "artist": "Taylor Swift", "date": "05"}, {"day": 4, "title": "Luz nos dias comuns", "reason": "Você me lembra que o amor também pode ser leve. Às vezes ele aparece só no jeito como você existe.", "song": "Daylight", "artist": "Taylor Swift", "date": "06"}, {"day": 5, "title": "Descobrir você", "reason": "Eu amo descobrir pequenas partes de você que talvez nem perceba que está mostrando.", "song": "You Are In Love", "artist": "Taylor Swift", "date": "07"}, {"day": 6, "title": "Nossos caminhos", "reason": "Entre tantos caminhos possíveis, sou feliz por aquele que fez nossos caminhos se encontrarem.", "song": "Invisible String", "artist": "Taylor Swift", "date": "08"}, {"day": 7, "title": "Beleza no cotidiano", "reason": "Sua presença faz até um dia sem grandes acontecimentos parecer especial.", "song": "Mania de Você", "artist": "Rita Lee", "date": "09"}, {"day": 8, "title": "Seu jeito único", "reason": "Você tem uma combinação de gestos, ideias e manias que não existe em mais ninguém.", "song": "Amor I Love You", "artist": "Marisa Monte", "date": "10"}, {"day": 9, "title": "Uma presença preciosa", "reason": "Seu lugar na minha vida foi crescendo naturalmente, como uma coisa bonita que encontrou espaço.", "song": "Sozinho", "artist": "Caetano Veloso", "date": "11"}, {"day": 10, "title": "Olhar o mundo com você", "reason": "Quero conhecer o mundo pelo seu olhar e ouvir sobre tudo o que faz seus olhos brilharem.", "song": "Partilhar", "artist": "Rubel e ANAVITÓRIA", "date": "12"}, {"day": 11, "title": "Uma janela para seu mundo", "reason": "Quando você divide um pedacinho do seu dia comigo, sinto que recebi algo precioso.", "song": "Fica", "artist": "ANAVITÓRIA e Matheus & Kauan", "date": "13"}, {"day": 12, "title": "Vontade de demonstrar", "reason": "Você me inspira a demonstrar melhor o que sinto e a procurar palavras mais bonitas.", "song": "Certas Coisas", "artist": "Lulu Santos", "date": "14"}, {"day": 13, "title": "Lembranças por vir", "reason": "Quero construir lembranças sem pressa: fotografias inesperadas, piadas só nossas e tardes especiais.", "song": "De Janeiro a Janeiro", "artist": "Roberta Campos e Nando Reis", "date": "15"}, {"day": 14, "title": "Seu olhar", "reason": "Existe beleza no seu jeito de olhar para as coisas. Você me ensina a reparar nos detalhes.", "song": "Pela Luz dos Olhos Teus", "artist": "Tom Jobim e Miúcha", "date": "16"}, {"day": 15, "title": "Torcer por você", "reason": "Suas conquistas me alegram, seus sonhos me importam e eu torço por cada passo seu.", "song": "A Via Láctea", "artist": "Legião Urbana", "date": "17"}, {"day": 16, "title": "Atravessar capítulos", "reason": "Com você, até os capítulos difíceis parecem poder ser atravessados com mais ternura.", "song": "As Long as You're Mine", "artist": "Wicked — Musical", "date": "18"}, {"day": 17, "title": "Um abraço que acalma", "reason": "O mundo é enorme, mas um abraço seu consegue fazer tudo parecer no lugar por alguns instantes.", "song": "Can You Feel the Love Tonight", "artist": "O Rei Leão — Musical", "date": "19"}, {"day": 18, "title": "Escolher o cuidado", "reason": "Você me faz querer escolher o cuidado todos os dias: escutar, respeitar seu tempo e estar presente.", "song": "Seasons of Love", "artist": "Rent — Musical", "date": "20"}, {"day": 19, "title": "Você por inteiro", "reason": "Não quero uma versão perfeita de você. Quero conhecer e admirar a pessoa real que você é.", "song": "Helpless", "artist": "Hamilton — Musical", "date": "21"}, {"day": 20, "title": "Carinho de verdade", "reason": "Quando penso em carinho, penso em segurar sua mão e fazer você se sentir querida.", "song": "All I Ask of You", "artist": "O Fantasma da Ópera — Musical", "date": "22"}, {"day": 21, "title": "Os próximos capítulos", "reason": "Há tantos capítulos que ainda gostaria de escrever ao seu lado.", "song": "Until I Found You", "artist": "Stephen Sanchez", "date": "23"}, {"day": 22, "title": "Dias dourados", "reason": "Seu sorriso merece todos os momentos dourados do mundo. Quero fazer parte de alguns deles.", "song": "Golden Hour", "artist": "JVKE", "date": "24"}, {"day": 23, "title": "Confiança e ternura", "reason": "Até o silêncio parece mais gentil quando existe confiança entre nós.", "song": "If the World Was Ending", "artist": "JP Saxe e Julia Michaels", "date": "25"}, {"day": 24, "title": "Um futuro de possibilidades", "reason": "Você faz o futuro parecer cheio de possibilidades boas e descobertas que ainda não vivemos.", "song": "Beyond", "artist": "Leon Bridges", "date": "26"}, {"day": 25, "title": "Todas as razões", "reason": "Eu amo esse conjunto inteiro de detalhes, gestos, sonhos e jeitos que faz você ser você.", "song": "All of Me", "artist": "John Legend", "date": "27"}, {"day": 26, "title": "Sua coragem", "reason": "Admiro a maneira como você enfrenta as coisas, mesmo quando ninguém percebe o esforço.", "song": "Sweet Creature", "artist": "Harry Styles", "date": "28"}, {"day": 27, "title": "Seu entusiasmo", "reason": "Seu entusiasmo por aquilo que gosta é uma das coisas que mais gosto de observar.", "song": "Adore You", "artist": "Harry Styles", "date": "29"}, {"day": 28, "title": "Seu sorriso", "reason": "Eu amo quando você ri de verdade; parece que o ambiente inteiro fica mais claro.", "song": "Lover", "artist": "Taylor Swift", "date": "30"}, {"day": 29, "title": "Guardar momentos", "reason": "Você me faz querer guardar momentos que antes eu deixaria passar sem perceber.", "song": "Daylight", "artist": "Taylor Swift", "date": ""}, {"day": 30, "title": "Ser espontânea", "reason": "Há conforto em saber que posso ser espontânea perto de você.", "song": "You Are In Love", "artist": "Taylor Swift", "date": ""}, {"day": 31, "title": "Uma mensagem sua", "reason": "Eu gosto de como uma mensagem sua consegue mudar o tom de um dia inteiro.", "song": "Invisible String", "artist": "Taylor Swift", "date": ""}, {"day": 32, "title": "Você merece cuidado", "reason": "Você merece receber o mesmo cuidado bonito que oferece ao mundo.", "song": "Mania de Você", "artist": "Rita Lee", "date": ""}, {"day": 33, "title": "Conhecer seus detalhes", "reason": "Eu amo aprender suas preferências, seus sonhos e até as pequenas coisas que te irritam.", "song": "Amor I Love You", "artist": "Marisa Monte", "date": ""}, {"day": 34, "title": "Suas histórias", "reason": "Seu jeito de contar histórias faz até os acontecimentos mais simples ganharem graça.", "song": "Sozinho", "artist": "Caetano Veloso", "date": ""}, {"day": 35, "title": "Ouvir você", "reason": "Eu escolheria ouvir suas ideias por horas, mesmo quando o assunto muda cinco vezes.", "song": "Partilhar", "artist": "Rubel e ANAVITÓRIA", "date": ""}, {"day": 36, "title": "Liberdade para ser boba", "reason": "Você me lembra que intimidade também é poder ser boba sem medo de julgamento.", "song": "Fica", "artist": "ANAVITÓRIA e Matheus & Kauan", "date": ""}, {"day": 37, "title": "Pequenas delicadezas", "reason": "Eu amo a delicadeza que existe em tantos gestos seus, mesmo nos que você nem nota.", "song": "Certas Coisas", "artist": "Lulu Santos", "date": ""}, {"day": 38, "title": "Estar ao seu lado", "reason": "Quero estar por perto para aplaudir suas vitórias e acolher você nos dias cansativos.", "song": "De Janeiro a Janeiro", "artist": "Roberta Campos e Nando Reis", "date": ""}, {"day": 39, "title": "Planos bonitos", "reason": "Você faz nascer em mim uma vontade bonita de planejar coisas boas.", "song": "Pela Luz dos Olhos Teus", "artist": "Tom Jobim e Miúcha", "date": ""}, {"day": 40, "title": "Descobertas juntas", "reason": "Eu gosto de como nossas diferenças também podem ser lugares de descoberta.", "song": "A Via Láctea", "artist": "Legião Urbana", "date": ""}, {"day": 41, "title": "Seu afeto", "reason": "Seu jeito de demonstrar afeto tem um valor que talvez você nem imagine.", "song": "As Long as You're Mine", "artist": "Wicked — Musical", "date": ""}, {"day": 42, "title": "Nosso idioma secreto", "reason": "Eu amo quando encontramos uma referência, uma música ou uma piada que só nós entendemos.", "song": "Can You Feel the Love Tonight", "artist": "O Rei Leão — Musical", "date": ""}, {"day": 43, "title": "Um amor com cuidado", "reason": "Você merece um amor que tenha paciência, presença, respeito e alegria — e quero oferecer isso.", "song": "Seasons of Love", "artist": "Rent — Musical", "date": ""}, {"day": 44, "title": "Pensar em você", "reason": "Às vezes penso em você no meio de uma tarefa qualquer e sorrio sem perceber.", "song": "Helpless", "artist": "Hamilton — Musical", "date": ""}, {"day": 45, "title": "Minha coincidência favorita", "reason": "Você é uma das minhas coincidências favoritas da vida.", "song": "All I Ask of You", "artist": "O Fantasma da Ópera — Musical", "date": ""}, {"day": 46, "title": "Pequenas aventuras", "reason": "Eu gosto de imaginar pequenas aventuras com você, mesmo que o destino seja pertinho.", "song": "Until I Found You", "artist": "Stephen Sanchez", "date": ""}, {"day": 47, "title": "Novas perspectivas", "reason": "Seu olhar sobre o mundo me faz enxergar possibilidades que eu não tinha considerado.", "song": "Golden Hour", "artist": "JVKE", "date": ""}, {"day": 48, "title": "Dividir novidades", "reason": "Eu amo a sensação de poder dividir novidades com você primeiro.", "song": "If the World Was Ending", "artist": "JP Saxe e Julia Michaels", "date": ""}, {"day": 49, "title": "Você já é especial", "reason": "Você não precisa fazer nada extraordinário para ser especial para mim.", "song": "Beyond", "artist": "Leon Bridges", "date": ""}, {"day": 50, "title": "Escolher você", "reason": "Quero continuar conhecendo suas fases, mudanças e versões, sem deixar de escolher você.", "song": "All of Me", "artist": "John Legend", "date": ""}, {"day": 51, "title": "Marcas boas", "reason": "Seu jeito de existir deixa marcas boas nos meus dias.", "song": "Sweet Creature", "artist": "Harry Styles", "date": ""}, {"day": 52, "title": "Seus sonhos", "reason": "Eu amo quando você se permite sonhar em voz alta e me deixa conhecer esses planos.", "song": "Adore You", "artist": "Harry Styles", "date": ""}, {"day": 53, "title": "Sentir saudade", "reason": "Você faz a palavra saudade ter endereço: os momentos em que queria estar pertinho.", "song": "Lover", "artist": "Taylor Swift", "date": ""}, {"day": 54, "title": "Dias que viram lembranças", "reason": "Eu quero celebrar as pequenas datas e também os dias sem nome que viram lembranças.", "song": "Daylight", "artist": "Taylor Swift", "date": ""}, {"day": 55, "title": "Um cuidado simples", "reason": "Você me ensina que carinho pode morar em uma pergunta simples: 'chegou bem?'", "song": "You Are In Love", "artist": "Taylor Swift", "date": ""}, {"day": 56, "title": "Sempre há mais", "reason": "Eu gosto de como sempre há algo novo para descobrir quando converso com você.", "song": "Invisible String", "artist": "Taylor Swift", "date": ""}, {"day": 57, "title": "Nossa coleção de instantes", "reason": "Se eu pudesse guardar uma coleção, escolheria os instantes em que fiz você sorrir.", "song": "Mania de Você", "artist": "Rita Lee", "date": ""}, {"day": 58, "title": "Você é importante", "reason": "Você merece ser lembrada todos os dias de que é importante, admirável e amada.", "song": "Amor I Love You", "artist": "Marisa Monte", "date": ""}, {"day": 59, "title": "Construir algo bonito", "reason": "Eu amo a possibilidade de construir algo bonito com verdade, conversa e cuidado.", "song": "Sozinho", "artist": "Caetano Veloso", "date": ""}, {"day": 60, "title": "Obrigada por ser você", "reason": "Obrigada por ser você. Entre tantas coisas que eu poderia escrever, essa continua sendo uma das minhas favoritas.", "song": "Partilhar", "artist": "Rubel e ANAVITÓRIA", "date": ""}];
const CONFIG = {
  firstDate: "2026-12-03",
  storageKey: "hogwarts-60-opened-v1"
};

/* ---------- Utilitários de data ---------- */
const $ = (selector) => document.querySelector(selector);
const parseISO = (iso) => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
};
const toISO = (date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, "0"),
  String(date.getDate()).padStart(2, "0")
].join("-");
const dateForLetter = (index) => {
  const date = parseISO(CONFIG.firstDate);
  date.setDate(date.getDate() + index);
  return date;
};
const todayISO = () => toISO(new Date());
const formatDate = (date, options = { day: "2-digit", month: "long", year: "numeric" }) =>
  date.toLocaleDateString("pt-BR", options);

/* ---------- Persistência dos envelopes ---------- */
function loadOpened() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
    return new Set(saved.filter(n => Number.isInteger(n) && n >= 0 && n < LETTERS.length));
  } catch {
    return new Set();
  }
}
const openedLetters = loadOpened();
function saveOpened() {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify([...openedLetters]));
}
function isAvailable(index) {
  return todayISO() >= toISO(dateForLetter(index));
}

/* ---------- Navegação entre páginas ---------- */
let currentPage = 0;
let currentLetter = 0;
function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", Number(page.dataset.page) === pageNumber);
  });
  currentPage = pageNumber;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-next]").forEach(button =>
  button.addEventListener("click", () => showPage(Number(button.dataset.next)))
);
document.querySelectorAll("[data-prev]").forEach(button =>
  button.addEventListener("click", () => showPage(Number(button.dataset.prev)))
);

/* ---------- Calendário: sempre na última página ---------- */
function renderCalendar() {
  const calendar = $("#calendar");
  calendar.innerHTML = "";
  LETTERS.forEach((letter, index) => {
    const opened = openedLetters.has(index);
    const available = isAvailable(index);
    const button = document.createElement("button");
    button.className = "day" + (opened ? " opened" : "");
    button.disabled = !available;
    button.innerHTML = `
      <span class="num">${String(index + 1).padStart(2, "0")}</span>
      <span class="state">${opened ? "✦ ABERTO" : available ? "◇ DISPONÍVEL" : "🔒 AGUARDE"}</span>`;
    button.setAttribute("aria-label", `Carta ${index + 1} — ${formatDate(dateForLetter(index))}`);
    if (available) button.addEventListener("click", () => openLetter(index));
    calendar.appendChild(button);
  });
  $("#progressBar").style.width = `${openedLetters.size / LETTERS.length * 100}%`;
  $("#progressText").textContent = `${openedLetters.size} de 60 cartas descobertas`;
}

/* ---------- Leitura de uma carta ---------- */
function openLetter(index) {
  if (!isAvailable(index)) return;
  currentLetter = index;
  openedLetters.add(index);
  saveOpened();
  renderCalendar();

  const letter = LETTERS[index];
  $("#letterNumber").textContent = `ENVELOPE Nº ${String(index + 1).padStart(2, "0")}`;
  $("#letterDate").textContent = formatDate(dateForLetter(index)).toUpperCase();
  $("#letterTitle").textContent = letter.title;
  $("#letterReason").textContent = letter.reason;
  $("#songTitle").textContent = letter.song;
  $("#songArtist").textContent = letter.artist;
  $("#songLink").href = "https://open.spotify.com/search/" +
    encodeURIComponent(`${letter.song} ${letter.artist}`);
  $("#previousLetter").disabled = index === 0 || !isAvailable(index - 1);
  $("#nextLetter").disabled = index === LETTERS.length - 1 || !isAvailable(index + 1);
  showPage(8);
}
$("#backCalendar").addEventListener("click", () => showPage(7));
$("#previousLetter").addEventListener("click", () => {
  if (currentLetter > 0 && isAvailable(currentLetter - 1)) openLetter(currentLetter - 1);
});
$("#nextLetter").addEventListener("click", () => {
  if (currentLetter < LETTERS.length - 1 && isAvailable(currentLetter + 1)) openLetter(currentLetter + 1);
});
$("#todayButton").addEventListener("click", () => {
  const next = LETTERS.findIndex((_, index) => isAvailable(index) && !openedLetters.has(index));
  const firstAvailable = LETTERS.findIndex((_, index) => isAvailable(index));
  const target = next >= 0 ? next : firstAvailable;
  if (target >= 0) openLetter(target);
});

/* ---------- Interações extras ---------- */
const modalMessages = {
  torre: "Se eu pudesse escolher um lugar para olhar as estrelas com você, escolheria qualquer lugar em que pudéssemos conversar sem pressa. O céu seria só um detalhe bonito.",
  sala: "Que você sempre encontre aqui um cantinho imaginário para descansar. Não precisa estar tudo perfeito para merecer carinho.",
  pocao: "Ingredientes: uma dose de paciência, duas de risadas, uma pitada de coragem para conversar e carinho a gosto. Misture todos os dias.",
  patrono: "Pense em uma lembrança que faz você sorrir. Guarde essa sensação como um pequeno Patrono para os dias nublados."
};
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    $("#modalText").textContent = modalMessages[button.dataset.modal];
    $("#modal").hidden = false;
  });
});
function closeModal() { $("#modal").hidden = true; }
$("#closeModal").addEventListener("click", closeModal);
$("#modal").addEventListener("click", event => {
  if (event.target.id === "modal") closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});
document.querySelectorAll("[data-relic]").forEach(button => {
  button.addEventListener("click", () => {
    $("#relicMessage").textContent = button.dataset.relic;
  });
});

/* ---------- Música de fundo ---------- */
const backgroundMusic = $("#backgroundMusic");
const musicPrompt = $("#musicPrompt");
const soundToggle = $("#soundToggle");

function updateMusicButton() {
  soundToggle.textContent = backgroundMusic.paused ? "♫" : "Ⅱ";
  soundToggle.setAttribute("aria-label", backgroundMusic.paused ? "Tocar música" : "Pausar música");
}

async function startBackgroundMusic() {
  try {
    await backgroundMusic.play();
    musicPrompt.hidden = true;
    updateMusicButton();
  } catch {
    // Navegadores podem bloquear autoplay com som até a primeira interação.
    musicPrompt.hidden = false;
    updateMusicButton();
  }
}

$("#startMusic").addEventListener("click", startBackgroundMusic);
soundToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    await startBackgroundMusic();
  } else {
    backgroundMusic.pause();
    updateMusicButton();
  }
});
backgroundMusic.addEventListener("play", updateMusicButton);
backgroundMusic.addEventListener("pause", updateMusicButton);

/* ---------- Inicialização ---------- */
renderCalendar();
startBackgroundMusic();

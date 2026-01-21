const SURAH_DATA = [
  { number: 1, name: "Al-Fatiha", meaning: "The Opening", ayahs: 7, revelation: "Meccan" },
  { number: 2, name: "Al-Baqarah", meaning: "The Cow", ayahs: 286, revelation: "Medinan" },
  { number: 3, name: "Al Imran", meaning: "The Family of Imran", ayahs: 200, revelation: "Medinan" },
  { number: 4, name: "An-Nisa", meaning: "The Women", ayahs: 176, revelation: "Medinan" },
  { number: 5, name: "Al-Ma'idah", meaning: "The Table Spread", ayahs: 120, revelation: "Medinan" },
  { number: 6, name: "Al-An'am", meaning: "The Cattle", ayahs: 165, revelation: "Meccan" },
  { number: 7, name: "Al-A'raf", meaning: "The Heights", ayahs: 206, revelation: "Meccan" },
  { number: 8, name: "Al-Anfal", meaning: "The Spoils of War", ayahs: 75, revelation: "Medinan" },
  { number: 9, name: "At-Tawbah", meaning: "The Repentance", ayahs: 129, revelation: "Medinan" },
  { number: 10, name: "Yunus", meaning: "Jonah", ayahs: 109, revelation: "Meccan" },
  { number: 11, name: "Hud", meaning: "Hud", ayahs: 123, revelation: "Meccan" },
  { number: 12, name: "Yusuf", meaning: "Joseph", ayahs: 111, revelation: "Meccan" },
  { number: 13, name: "Ar-Ra'd", meaning: "The Thunder", ayahs: 43, revelation: "Medinan" },
  { number: 14, name: "Ibrahim", meaning: "Abraham", ayahs: 52, revelation: "Meccan" },
  { number: 15, name: "Al-Hijr", meaning: "The Rocky Tract", ayahs: 99, revelation: "Meccan" },
  { number: 16, name: "An-Nahl", meaning: "The Bee", ayahs: 128, revelation: "Meccan" },
  { number: 17, name: "Al-Isra", meaning: "The Night Journey", ayahs: 111, revelation: "Meccan" },
  { number: 18, name: "Al-Kahf", meaning: "The Cave", ayahs: 110, revelation: "Meccan" },
  { number: 19, name: "Maryam", meaning: "Mary", ayahs: 98, revelation: "Meccan" },
  { number: 20, name: "Ta-Ha", meaning: "Ta-Ha", ayahs: 135, revelation: "Meccan" },
  { number: 21, name: "Al-Anbiya", meaning: "The Prophets", ayahs: 112, revelation: "Meccan" },
  { number: 22, name: "Al-Hajj", meaning: "The Pilgrimage", ayahs: 78, revelation: "Medinan" },
  { number: 23, name: "Al-Mu'minun", meaning: "The Believers", ayahs: 118, revelation: "Meccan" },
  { number: 24, name: "An-Nur", meaning: "The Light", ayahs: 64, revelation: "Medinan" },
  { number: 25, name: "Al-Furqan", meaning: "The Criterion", ayahs: 77, revelation: "Meccan" },
  { number: 26, name: "Ash-Shu'ara", meaning: "The Poets", ayahs: 227, revelation: "Meccan" },
  { number: 27, name: "An-Naml", meaning: "The Ant", ayahs: 93, revelation: "Meccan" },
  { number: 28, name: "Al-Qasas", meaning: "The Stories", ayahs: 88, revelation: "Meccan" },
  { number: 29, name: "Al-Ankabut", meaning: "The Spider", ayahs: 69, revelation: "Meccan" },
  { number: 30, name: "Ar-Rum", meaning: "The Romans", ayahs: 60, revelation: "Meccan" },
  { number: 31, name: "Luqman", meaning: "Luqman", ayahs: 34, revelation: "Meccan" },
  { number: 32, name: "As-Sajdah", meaning: "The Prostration", ayahs: 30, revelation: "Meccan" },
  { number: 33, name: "Al-Ahzab", meaning: "The Confederates", ayahs: 73, revelation: "Medinan" },
  { number: 34, name: "Saba", meaning: "Sheba", ayahs: 54, revelation: "Meccan" },
  { number: 35, name: "Fatir", meaning: "The Originator", ayahs: 45, revelation: "Meccan" },
  { number: 36, name: "Ya-Sin", meaning: "Ya Sin", ayahs: 83, revelation: "Meccan" },
  { number: 37, name: "As-Saffat", meaning: "Those Who Set the Ranks", ayahs: 182, revelation: "Meccan" },
  { number: 38, name: "Sad", meaning: "Sad", ayahs: 88, revelation: "Meccan" },
  { number: 39, name: "Az-Zumar", meaning: "The Groups", ayahs: 75, revelation: "Meccan" },
  { number: 40, name: "Ghafir", meaning: "The Forgiver", ayahs: 85, revelation: "Meccan" },
  { number: 41, name: "Fussilat", meaning: "Explained in Detail", ayahs: 54, revelation: "Meccan" },
  { number: 42, name: "Ash-Shura", meaning: "Consultation", ayahs: 53, revelation: "Meccan" },
  { number: 43, name: "Az-Zukhruf", meaning: "The Ornaments of Gold", ayahs: 89, revelation: "Meccan" },
  { number: 44, name: "Ad-Dukhan", meaning: "The Smoke", ayahs: 59, revelation: "Meccan" },
  { number: 45, name: "Al-Jathiyah", meaning: "The Kneeling", ayahs: 37, revelation: "Meccan" },
  { number: 46, name: "Al-Ahqaf", meaning: "The Dunes", ayahs: 35, revelation: "Meccan" },
  { number: 47, name: "Muhammad", meaning: "Muhammad", ayahs: 38, revelation: "Medinan" },
  { number: 48, name: "Al-Fath", meaning: "The Victory", ayahs: 29, revelation: "Medinan" },
  { number: 49, name: "Al-Hujurat", meaning: "The Rooms", ayahs: 18, revelation: "Medinan" },
  { number: 50, name: "Qaf", meaning: "Qaf", ayahs: 45, revelation: "Meccan" },
  { number: 51, name: "Adh-Dhariyat", meaning: "The Winnowing Winds", ayahs: 60, revelation: "Meccan" },
  { number: 52, name: "At-Tur", meaning: "The Mount", ayahs: 49, revelation: "Meccan" },
  { number: 53, name: "An-Najm", meaning: "The Star", ayahs: 62, revelation: "Meccan" },
  { number: 54, name: "Al-Qamar", meaning: "The Moon", ayahs: 55, revelation: "Meccan" },
  { number: 55, name: "Ar-Rahman", meaning: "The Most Merciful", ayahs: 78, revelation: "Medinan" },
  { number: 56, name: "Al-Waqi'ah", meaning: "The Event", ayahs: 96, revelation: "Meccan" },
  { number: 57, name: "Al-Hadid", meaning: "The Iron", ayahs: 29, revelation: "Medinan" },
  { number: 58, name: "Al-Mujadila", meaning: "The Pleading Woman", ayahs: 22, revelation: "Medinan" },
  { number: 59, name: "Al-Hashr", meaning: "The Exile", ayahs: 24, revelation: "Medinan" },
  { number: 60, name: "Al-Mumtahanah", meaning: "She Who Is Examined", ayahs: 13, revelation: "Medinan" },
  { number: 61, name: "As-Saff", meaning: "The Ranks", ayahs: 14, revelation: "Medinan" },
  { number: 62, name: "Al-Jumu'ah", meaning: "Friday", ayahs: 11, revelation: "Medinan" },
  { number: 63, name: "Al-Munafiqun", meaning: "The Hypocrites", ayahs: 11, revelation: "Medinan" },
  { number: 64, name: "At-Taghabun", meaning: "The Mutual Loss", ayahs: 18, revelation: "Medinan" },
  { number: 65, name: "At-Talaq", meaning: "Divorce", ayahs: 12, revelation: "Medinan" },
  { number: 66, name: "At-Tahrim", meaning: "The Prohibition", ayahs: 12, revelation: "Medinan" },
  { number: 67, name: "Al-Mulk", meaning: "The Sovereignty", ayahs: 30, revelation: "Meccan" },
  { number: 68, name: "Al-Qalam", meaning: "The Pen", ayahs: 52, revelation: "Meccan" },
  { number: 69, name: "Al-Haqqah", meaning: "The Reality", ayahs: 52, revelation: "Meccan" },
  { number: 70, name: "Al-Ma'arij", meaning: "The Ascending Stairways", ayahs: 44, revelation: "Meccan" },
  { number: 71, name: "Nuh", meaning: "Noah", ayahs: 28, revelation: "Meccan" },
  { number: 72, name: "Al-Jinn", meaning: "The Jinn", ayahs: 28, revelation: "Meccan" },
  { number: 73, name: "Al-Muzzammil", meaning: "The Enshrouded One", ayahs: 20, revelation: "Meccan" },
  { number: 74, name: "Al-Muddaththir", meaning: "The Cloaked One", ayahs: 56, revelation: "Meccan" },
  { number: 75, name: "Al-Qiyamah", meaning: "The Resurrection", ayahs: 40, revelation: "Meccan" },
  { number: 76, name: "Al-Insan", meaning: "Man", ayahs: 31, revelation: "Medinan" },
  { number: 77, name: "Al-Mursalat", meaning: "The Emissaries", ayahs: 50, revelation: "Meccan" },
  { number: 78, name: "An-Naba", meaning: "The Tidings", ayahs: 40, revelation: "Meccan" },
  { number: 79, name: "An-Nazi'at", meaning: "Those Who Drag Forth", ayahs: 46, revelation: "Meccan" },
  { number: 80, name: "Abasa", meaning: "He Frowned", ayahs: 42, revelation: "Meccan" },
  { number: 81, name: "At-Takwir", meaning: "The Overthrowing", ayahs: 29, revelation: "Meccan" },
  { number: 82, name: "Al-Infitar", meaning: "The Cleaving", ayahs: 19, revelation: "Meccan" },
  { number: 83, name: "Al-Mutaffifin", meaning: "Defrauding", ayahs: 36, revelation: "Meccan" },
  { number: 84, name: "Al-Inshiqaq", meaning: "The Splitting Open", ayahs: 25, revelation: "Meccan" },
  { number: 85, name: "Al-Buruj", meaning: "The Mansions of the Stars", ayahs: 22, revelation: "Meccan" },
  { number: 86, name: "At-Tariq", meaning: "The Nightcomer", ayahs: 17, revelation: "Meccan" },
  { number: 87, name: "Al-A'la", meaning: "The Most High", ayahs: 19, revelation: "Meccan" },
  { number: 88, name: "Al-Ghashiyah", meaning: "The Overwhelming", ayahs: 26, revelation: "Meccan" },
  { number: 89, name: "Al-Fajr", meaning: "The Dawn", ayahs: 30, revelation: "Meccan" },
  { number: 90, name: "Al-Balad", meaning: "The City", ayahs: 20, revelation: "Meccan" },
  { number: 91, name: "Ash-Shams", meaning: "The Sun", ayahs: 15, revelation: "Meccan" },
  { number: 92, name: "Al-Layl", meaning: "The Night", ayahs: 21, revelation: "Meccan" },
  { number: 93, name: "Ad-Duha", meaning: "The Morning Brightness", ayahs: 11, revelation: "Meccan" },
  { number: 94, name: "Ash-Sharh", meaning: "The Relief", ayahs: 8, revelation: "Meccan" },
  { number: 95, name: "At-Tin", meaning: "The Fig", ayahs: 8, revelation: "Meccan" },
  { number: 96, name: "Al-'Alaq", meaning: "The Clot", ayahs: 19, revelation: "Meccan" },
  { number: 97, name: "Al-Qadr", meaning: "The Power", ayahs: 5, revelation: "Meccan" },
  { number: 98, name: "Al-Bayyinah", meaning: "The Clear Proof", ayahs: 8, revelation: "Medinan" },
  { number: 99, name: "Az-Zalzalah", meaning: "The Earthquake", ayahs: 8, revelation: "Medinan" },
  { number: 100, name: "Al-'Adiyat", meaning: "The Chargers", ayahs: 11, revelation: "Meccan" },
  { number: 101, name: "Al-Qari'ah", meaning: "The Calamity", ayahs: 11, revelation: "Meccan" },
  { number: 102, name: "At-Takathur", meaning: "Rivalry in Worldly Increase", ayahs: 8, revelation: "Meccan" },
  { number: 103, name: "Al-'Asr", meaning: "The Declining Day", ayahs: 3, revelation: "Meccan" },
  { number: 104, name: "Al-Humazah", meaning: "The Slanderer", ayahs: 9, revelation: "Meccan" },
  { number: 105, name: "Al-Fil", meaning: "The Elephant", ayahs: 5, revelation: "Meccan" },
  { number: 106, name: "Quraysh", meaning: "Quraysh", ayahs: 4, revelation: "Meccan" },
  { number: 107, name: "Al-Ma'un", meaning: "Small Kindnesses", ayahs: 7, revelation: "Meccan" },
  { number: 108, name: "Al-Kawthar", meaning: "Abundance", ayahs: 3, revelation: "Meccan" },
  { number: 109, name: "Al-Kafirun", meaning: "The Disbelievers", ayahs: 6, revelation: "Meccan" },
  { number: 110, name: "An-Nasr", meaning: "The Help", ayahs: 3, revelation: "Medinan" },
  { number: 111, name: "Al-Masad", meaning: "The Palm Fiber", ayahs: 5, revelation: "Meccan" },
  { number: 112, name: "Al-Ikhlas", meaning: "The Sincerity", ayahs: 4, revelation: "Meccan" },
  { number: 113, name: "Al-Falaq", meaning: "The Daybreak", ayahs: 5, revelation: "Meccan" },
  { number: 114, name: "An-Nas", meaning: "Mankind", ayahs: 6, revelation: "Meccan" }
];

const SURAH_HIGHLIGHTS = {
  1: "A concise opening prayer centered on guidance and mercy.",
  2: "A foundation for faith, law, and community life.",
  18: "Stories of faith, patience, and divine protection.",
  36: "A reminder of the message, resurrection, and mercy.",
  55: "Rhythmic reminders of blessings and gratitude.",
  67: "Reflection on sovereignty, creation, and accountability.",
  112: "Pure monotheism in four short verses."
};

const verseSamples = [
  {
    ar: "",
    en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    ur: "Allah ke naam se jo bara meharbaan aur nihayat reham wala hai.",
    ref: "Al-Fatiha 1:1",
    ayah: "1:1"
  },
  {
    ar: "",
    en: "Say, He is Allah, the One.",
    ur: "Kaho, woh Allah ek hai.",
    ref: "Al-Ikhlas 112:1",
    ayah: "112:1"
  },
  {
    ar: "",
    en: "Indeed, We have granted you al-Kawthar.",
    ur: "Be-shak hum ne tumhein al-Kawthar ata kiya.",
    ref: "Al-Kawthar 108:1",
    ayah: "108:1"
  }
];

const surahGrid = document.getElementById("surahGrid");
const searchInput = document.getElementById("surahSearch");
const surahCount = document.getElementById("surahCount");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const sortSelect = document.getElementById("surahSort");
const noResults = document.getElementById("noResults");
const showAllButton = document.getElementById("seeAllSurahs");
const surahActions = document.getElementById("surahActions");

const detailOverlay = document.getElementById("surahDetail");
const detailClose = document.getElementById("detailClose");
const detailNumber = document.getElementById("detailNumber");
const detailTitle = document.getElementById("detailTitle");
const detailMeaning = document.getElementById("detailMeaning");
const detailAyahs = document.getElementById("detailAyahs");
const detailType = document.getElementById("detailType");
const detailSummary = document.getElementById("detailSummary");
const detailRead = document.getElementById("detailRead");
const detailQueue = document.getElementById("detailQueue");
const queueList = document.getElementById("queueList");
const checklistItems = Array.from(document.querySelectorAll("[data-plan-task]"));
const progressValue = document.getElementById("progressValue");
const progressBar = document.getElementById("progressBar");
const resetPlan = document.getElementById("resetPlan");
const queueForm = document.getElementById("queueForm");
const queueInput = document.getElementById("queueInput");
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteGrid = document.getElementById("noteGrid");

const verseAr = document.getElementById("verseAr");
const verseEn = document.getElementById("verseEn");
const verseUr = document.getElementById("verseUr");
const verseRef = document.getElementById("verseRef");
const versePlay = document.getElementById("versePlay");
const wave = document.querySelector(".wave");
const timeEl = document.querySelector(".time");
const listenToday = document.getElementById("listenToday");

const startReading = document.getElementById("startReading");
const exploreSurahs = document.getElementById("exploreSurahs");
const surahSection = document.getElementById("surahs");
const heroCard = document.querySelector(".hero-card");

const state = {
  term: "",
  filter: "all",
  sort: "number",
  showAll: false
};

const STORAGE_KEYS = {
  plan: "aq_plan_state",
  queue: "aq_queue",
  notes: "aq_notes",
  verse: "aq_verse_of_day"
};

const storageAvailable = (() => {
  try {
    const testKey = "__aq_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
})();

const getStored = (key, fallback) => {
  if (!storageAvailable) return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
};

const setStored = (key, value) => {
  if (!storageAvailable) return;
  localStorage.setItem(key, JSON.stringify(value));
};

const URDU_ROMAN_MAP = {
  "\u0621": "'",
  "\u0622": "aa",
  "\u0623": "a",
  "\u0624": "o",
  "\u0625": "i",
  "\u0626": "y",
  "\u0627": "a",
  "\u0628": "b",
  "\u067E": "p",
  "\u062A": "t",
  "\u0679": "t",
  "\u062B": "s",
  "\u062C": "j",
  "\u0686": "ch",
  "\u062D": "h",
  "\u062E": "kh",
  "\u062F": "d",
  "\u0688": "d",
  "\u0630": "z",
  "\u0631": "r",
  "\u0691": "r",
  "\u0632": "z",
  "\u0698": "zh",
  "\u0633": "s",
  "\u0634": "sh",
  "\u0635": "s",
  "\u0636": "z",
  "\u0637": "t",
  "\u0638": "z",
  "\u0639": "'",
  "\u063A": "gh",
  "\u0641": "f",
  "\u0642": "q",
  "\u0643": "k",
  "\u06A9": "k",
  "\u06AF": "g",
  "\u0644": "l",
  "\u0645": "m",
  "\u0646": "n",
  "\u06BA": "n",
  "\u0647": "h",
  "\u06C1": "h",
  "\u06BE": "h",
  "\u0629": "h",
  "\u0648": "w",
  "\u0649": "i",
  "\u064A": "y",
  "\u06CC": "y",
  "\u06D2": "e"
};

const romanizeUrduText = (text) => {
  if (!text) return "";
  const cleaned = text
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
    .replace(/\u0640/g, "");
  let result = "";
  for (const char of cleaned) {
    result += URDU_ROMAN_MAP[char] || char;
  }
  return result.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
};

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const getLocalDateKey = () => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
};

const getDayOfYear = (date) => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
};

const getPlanState = () => {
  if (!checklistItems.length) return {};
  const stateMap = {};
  checklistItems.forEach((item) => {
    const key = item.dataset.planTask;
    if (key) stateMap[key] = item.checked;
  });
  return stateMap;
};

const applyPlanState = (savedState) => {
  if (!savedState || !checklistItems.length) return;
  checklistItems.forEach((item) => {
    const key = item.dataset.planTask;
    if (!key) return;
    item.checked = Boolean(savedState[key]);
  });
};

const updatePlanProgress = () => {
  if (!checklistItems.length) return;
  const total = checklistItems.length;
  const completed = checklistItems.filter((item) => item.checked).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  if (progressValue) {
    progressValue.textContent = `${percent}%`;
  }
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
};

const savePlanProgress = () => {
  setStored(STORAGE_KEYS.plan, getPlanState());
};

let queueItems = [];

const normalizeText = (value) => value.trim().toLowerCase();

const seedQueueFromDom = () => {
  if (!queueList) return [];
  return Array.from(queueList.querySelectorAll("li"))
    .map((item) => ({
      name: item.textContent.trim(),
      number: item.dataset.number ? Number(item.dataset.number) : null
    }))
    .filter((item) => item.name.length > 0);
};

const buildQueueItem = (item) => {
  const li = document.createElement("li");
  if (item.number) {
    li.dataset.number = item.number;
  }
  const text = document.createElement("span");
  text.className = "queue-item-text";
  text.textContent = item.name;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "queue-remove";
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
    queueItems = queueItems.filter(
      (entry) =>
        entry.name.toLowerCase() !== item.name.toLowerCase() ||
        (item.number && entry.number !== item.number)
    );
    renderQueue();
    setStored(STORAGE_KEYS.queue, queueItems);
  });
  li.append(text, remove);
  return li;
};

const pulseQueueByName = (name) => {
  if (!queueList) return;
  const target = Array.from(queueList.querySelectorAll(".queue-item-text")).find(
    (node) => normalizeText(node.textContent) === normalizeText(name)
  );
  if (!target || !target.parentElement) return;
  target.parentElement.classList.remove("is-pulse");
  void target.parentElement.offsetWidth;
  target.parentElement.classList.add("is-pulse");
};

const renderQueue = () => {
  if (!queueList) return;
  queueList.innerHTML = "";
  queueItems.forEach((item) => {
    queueList.appendChild(buildQueueItem(item));
  });
};

let noteItems = [];

const seedNotesFromDom = () => {
  if (!noteGrid) return [];
  return Array.from(noteGrid.querySelectorAll(".note-tag"))
    .map((item) => item.textContent.trim())
    .filter((value) => value.length > 0);
};

const renderNotes = () => {
  if (!noteGrid) return;
  noteGrid.innerHTML = "";
  noteItems.forEach((note) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "note-tag";
    button.textContent = note;
    button.addEventListener("click", () => {
      const target = normalizeText(note);
      noteItems = noteItems.filter((item) => normalizeText(item) !== target);
      renderNotes();
      setStored(STORAGE_KEYS.notes, noteItems);
    });
    noteGrid.appendChild(button);
  });
};

const updateCount = (visible) => {
  if (!surahCount) return;
  surahCount.textContent = `Showing ${visible} of ${SURAH_DATA.length}`;
};

const matchesTerm = (surah, term) => {
  if (!term) return true;
  const haystack = [
    surah.number,
    surah.number.toString().padStart(3, "0"),
    surah.name,
    surah.meaning,
    surah.revelation,
    `${surah.ayahs} ayat`
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(term);
};

const sortSurahs = (list) => {
  const sorted = [...list];
  if (state.sort === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sort === "length") {
    sorted.sort((a, b) => b.ayahs - a.ayahs);
  } else {
    sorted.sort((a, b) => a.number - b.number);
  }
  return sorted;
};

const getVisibleSurahs = () => {
  const term = state.term.toLowerCase();
  const filtered = SURAH_DATA.filter((surah) => {
    const matchesFilter =
      state.filter === "all" || surah.revelation.toLowerCase() === state.filter;
    return matchesFilter && matchesTerm(surah, term);
  });
  return sortSurahs(filtered);
};

const shouldLimitSurahs = (visibleCount) =>
  state.term.length === 0 &&
  state.filter === "all" &&
  state.sort === "number" &&
  visibleCount > 4;

const buildSurahWindowHtml = (surah) => {
  const summary =
    SURAH_HIGHLIGHTS[surah.number] ||
    "A complete reading with Arabic text and English translation.";
  const payload = JSON.stringify({ ...surah, summary });
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${surah.name} | Al Quran Reader</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Manrope:wght@300;400;600&display=swap"
    />
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: "Manrope", "Segoe UI", sans-serif;
        color: #1b1f1e;
        background: radial-gradient(circle at top, #fff6e5 0%, #efe2c9 45%, #e2d1b8 100%);
        min-height: 100vh;
      }
      .ambient {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: -1;
      }
      .ambient span {
        position: absolute;
        border-radius: 999px;
        opacity: 0.5;
      }
      .ambient .one {
        width: 360px;
        height: 360px;
        background: radial-gradient(circle, rgba(31, 111, 106, 0.35), transparent 70%);
        top: -120px;
        left: -80px;
      }
      .ambient .two {
        width: 460px;
        height: 460px;
        background: radial-gradient(circle, rgba(214, 161, 78, 0.35), transparent 70%);
        right: -160px;
        top: 10%;
      }
      .topbar {
        position: sticky;
        top: 0;
        padding: 18px 24px;
        backdrop-filter: blur(12px);
        background: rgba(255, 250, 241, 0.85);
        border-bottom: 1px solid rgba(18, 32, 31, 0.1);
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        z-index: 5;
      }
      .brand {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .brand-mark {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        background: linear-gradient(140deg, #1f6f6a, #37a295);
        color: #fff;
        display: grid;
        place-items: center;
        font-family: "Cormorant Garamond", "Times New Roman", serif;
        font-weight: 700;
      }
      .brand-title {
        font-family: "Cormorant Garamond", "Times New Roman", serif;
        font-size: 20px;
        font-weight: 700;
      }
      .ornate-strip {
        height: 18px;
        background:
          repeating-linear-gradient(
            90deg,
            #b7894f 0 18px,
            #dfbf85 18px 36px,
            #b7894f 36px 54px
          );
        border-top: 2px solid #93663a;
        border-bottom: 2px solid #93663a;
      }
      .column-head {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 11px;
        color: rgba(27, 31, 30, 0.7);
        background: linear-gradient(90deg, #ead8b6, #f3e6cf, #ead8b6);
        border-top: 1px solid rgba(18, 32, 31, 0.18);
        border-bottom: 1px solid rgba(18, 32, 31, 0.18);
      }
      .column-head span {
        padding: 10px 12px;
        text-align: center;
        border-right: 1px solid rgba(18, 32, 31, 0.14);
      }
      .column-head span:last-child {
        border-right: none;
      }
      .close-btn {
        border: 1px solid rgba(18, 32, 31, 0.2);
        border-radius: 999px;
        padding: 6px 14px;
        background: transparent;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
      }
      main {
        max-width: 1100px;
        margin: 24px auto 60px;
        padding: 0 24px 32px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        background: rgba(255, 250, 241, 0.92);
        border: 2px solid #b7894f;
        border-radius: 28px;
        box-shadow: 0 24px 60px rgba(18, 32, 31, 0.18);
        overflow: hidden;
      }
      .hero {
        background: rgba(255, 250, 241, 0.9);
        border-radius: 24px;
        padding: 24px 28px;
        border: 1px solid rgba(18, 32, 31, 0.08);
        box-shadow: 0 20px 60px rgba(18, 32, 31, 0.15);
        display: grid;
        gap: 12px;
      }
      .label {
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 12px;
        color: rgba(27, 31, 30, 0.6);
      }
      h1 {
        font-family: "Cormorant Garamond", "Times New Roman", serif;
        font-size: clamp(2.2rem, 4vw, 3rem);
      }
      .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(27, 31, 30, 0.6);
      }
      .summary {
        font-size: 15px;
        line-height: 1.6;
        color: rgba(27, 31, 30, 0.75);
      }
      .status {
        font-size: 14px;
        padding: 12px 16px;
        border-radius: 14px;
        background: rgba(31, 111, 106, 0.08);
        border: 1px dashed rgba(31, 111, 106, 0.3);
        color: rgba(27, 31, 30, 0.7);
      }
      .status.is-hidden {
        display: none;
      }
      .status.is-error {
        border-color: rgba(176, 105, 66, 0.5);
        background: rgba(176, 105, 66, 0.1);
        color: rgba(120, 60, 40, 0.9);
      }
      .ayah-list {
        display: grid;
      }
      .ayah {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid rgba(18, 32, 31, 0.12);
      }
      .ayah:last-child {
        border-bottom: none;
      }
      .ayah-cell {
        padding: 16px 18px;
        display: grid;
        gap: 10px;
      }
      .ayah-cell + .ayah-cell {
        border-left: 1px solid rgba(18, 32, 31, 0.12);
      }
      .ayah-cell.english {
        background: rgba(255, 251, 244, 0.85);
      }
      .ayah-cell.roman {
        background: rgba(250, 242, 227, 0.9);
      }
      .ayah-cell.arabic {
        background: rgba(246, 238, 224, 0.95);
        text-align: right;
      }
      .ayah-num {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(27, 31, 30, 0.5);
      }
      .ayah-ar {
        font-family: "Amiri", "Times New Roman", serif;
        font-size: 26px;
        line-height: 1.9;
        direction: rtl;
        text-align: right;
        color: #12201f;
      }
      .ayah-en {
        font-size: 14px;
        line-height: 1.7;
        color: rgba(27, 31, 30, 0.72);
      }
      .ayah-ur {
        font-size: 14px;
        line-height: 1.7;
        color: rgba(27, 31, 30, 0.72);
        font-style: italic;
      }
      @media (max-width: 640px) {
        .topbar { justify-content: center; }
        .hero { padding: 20px; }
        .column-head { display: none; }
        .ayah { grid-template-columns: 1fr; }
        .ayah-cell + .ayah-cell {
          border-left: none;
          border-top: 1px solid rgba(18, 32, 31, 0.12);
        }
        .ayah-cell { padding: 14px 16px; }
      }
    </style>
  </head>
  <body>
    <div class="ambient">
      <span class="one"></span>
      <span class="two"></span>
    </div>
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">AQ</span>
        <div>
          <div class="brand-title">Al Quran Reader</div>
          <div class="label">Arabic + English + Indian Urdu (Roman)</div>
        </div>
      </div>
      <button class="close-btn" id="closeBtn" type="button">Close</button>
    </header>
    <main>
      <div class="ornate-strip" aria-hidden="true"></div>
      <section class="hero">
        <div class="label" id="surahLabel">Surah</div>
        <h1 id="surahName">Surah</h1>
        <div class="meta" id="surahMeta">Meta</div>
        <p class="summary" id="surahSummary">Summary</p>
      </section>
      <div class="status" id="status">Loading the surah text...</div>
      <div class="column-head" aria-hidden="true">
        <span>English</span>
        <span>Indian Urdu (Roman)</span>
        <span>Arabic</span>
      </div>
      <section class="ayah-list" id="ayahList"></section>
      <div class="ornate-strip" aria-hidden="true"></div>
    </main>
    <script>
      const SURAH = ${payload};
      const statusEl = document.getElementById("status");
      const ayahList = document.getElementById("ayahList");
      const labelEl = document.getElementById("surahLabel");
      const nameEl = document.getElementById("surahName");
      const metaEl = document.getElementById("surahMeta");
      const summaryEl = document.getElementById("surahSummary");
      const closeBtn = document.getElementById("closeBtn");

      const setStatus = (message, isError = false) => {
        statusEl.textContent = message;
        statusEl.classList.toggle("is-error", isError);
        statusEl.classList.toggle("is-hidden", message.length === 0);
      };


      const URDU_MAP = {
        "\\u0621": "'",
        "\\u0622": "aa",
        "\\u0623": "a",
        "\\u0624": "o",
        "\\u0625": "i",
        "\\u0626": "y",
        "\\u0627": "a",
        "\\u0628": "b",
        "\\u067E": "p",
        "\\u062A": "t",
        "\\u0679": "t",
        "\\u062B": "s",
        "\\u062C": "j",
        "\\u0686": "ch",
        "\\u062D": "h",
        "\\u062E": "kh",
        "\\u062F": "d",
        "\\u0688": "d",
        "\\u0630": "z",
        "\\u0631": "r",
        "\\u0691": "r",
        "\\u0632": "z",
        "\\u0698": "zh",
        "\\u0633": "s",
        "\\u0634": "sh",
        "\\u0635": "s",
        "\\u0636": "z",
        "\\u0637": "t",
        "\\u0638": "z",
        "\\u0639": "'",
        "\\u063A": "gh",
        "\\u0641": "f",
        "\\u0642": "q",
        "\\u0643": "k",
        "\\u06A9": "k",
        "\\u06AF": "g",
        "\\u0644": "l",
        "\\u0645": "m",
        "\\u0646": "n",
        "\\u06BA": "n",
        "\\u0647": "h",
        "\\u06C1": "h",
        "\\u06BE": "h",
        "\\u0629": "h",
        "\\u0648": "w",
        "\\u0649": "i",
        "\\u064A": "y",
        "\\u06CC": "y",
        "\\u06D2": "e"
      };

      const romanizeUrdu = (text) => {
        if (!text) return "";
        const cleaned = text
          .replace(/[\\u064B-\\u065F\\u0670\\u06D6-\\u06ED]/g, "")
          .replace(/\\u0640/g, "");
        let result = "";
        for (const char of cleaned) {
          result += URDU_MAP[char] || char;
        }
        return result.replace(/\\s+/g, " ").replace(/\\s+([,.!?;:])/g, "$1").trim();
      };


      const renderAyahs = (ayahs) => {
        ayahList.innerHTML = "";
        ayahs.forEach((ayah) => {
          const row = document.createElement("article");
          row.className = "ayah";

          const englishCell = document.createElement("div");
          englishCell.className = "ayah-cell english";
          const englishNumber = document.createElement("span");
          englishNumber.className = "ayah-num";
          englishNumber.textContent = "Ayah " + ayah.number;
          const english = document.createElement("p");
          english.className = "ayah-en";
          english.textContent = ayah.en;
          englishCell.append(englishNumber, english);

          const romanCell = document.createElement("div");
          romanCell.className = "ayah-cell roman";
          const romanNumber = document.createElement("span");
          romanNumber.className = "ayah-num";
          romanNumber.textContent = "Ayah " + ayah.number;
          const romanUrdu = document.createElement("p");
          romanUrdu.className = "ayah-ur";
          romanUrdu.textContent = ayah.ur;
          romanCell.append(romanNumber, romanUrdu);

          const arabicCell = document.createElement("div");
          arabicCell.className = "ayah-cell arabic";
          const arabicNumber = document.createElement("span");
          arabicNumber.className = "ayah-num";
          arabicNumber.textContent = "Ayah " + ayah.number;
          const arabic = document.createElement("p");
          arabic.className = "ayah-ar";
          arabic.textContent = ayah.ar;
          arabicCell.append(arabicNumber, arabic);

          row.append(englishCell, romanCell, arabicCell);
          ayahList.appendChild(row);
        });
      };

      const loadSurah = async () => {
        setStatus("Loading the surah text...");
        const response = await fetch(
          "https://api.alquran.cloud/v1/surah/" +
            SURAH.number +
            "/editions/quran-uthmani,en.sahih,ur.junagarhi"
        );
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const payload = await response.json();
        const editions = Array.isArray(payload.data) ? payload.data : [];
        const arabicEdition =
          editions.find((edition) => edition.language === "ar") || editions[0];
        const englishEdition =
          editions.find((edition) => edition.language === "en") || editions[1];
        const urduEdition =
          editions.find((edition) => edition.language === "ur") || editions[2];
        if (!arabicEdition || !Array.isArray(arabicEdition.ayahs)) {
          throw new Error("Missing text");
        }
        const ayahs = arabicEdition.ayahs.map((ayah, index) => ({
          number: ayah.numberInSurah,
          ar: ayah.text,
          en: englishEdition && englishEdition.ayahs[index]
            ? englishEdition.ayahs[index].text
            : "",
          ur: romanizeUrdu(
            urduEdition && urduEdition.ayahs[index] ? urduEdition.ayahs[index].text : ""
          )
        }));
        renderAyahs(ayahs);
        setStatus("");
      };

      labelEl.textContent = "Surah " + String(SURAH.number).padStart(2, "0");
      nameEl.textContent = SURAH.name;
      metaEl.textContent =
        SURAH.meaning +
        " \u2022 " +
        SURAH.ayahs +
        " Ayat \u2022 " +
        SURAH.revelation;
      summaryEl.textContent = SURAH.summary;

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          window.close();
        });
      }
      loadSurah().catch(() => {
        setStatus("Unable to load surah text. Please check your connection.", true);
      });
    </script>
  </body>
</html>`;
};

const openSurahWindow = (surah) => {
  const win = window.open("", "_blank");
  if (!win) {
    alert("Please allow pop-ups to open the surah window.");
    return;
  }
  win.document.open();
  win.document.write(buildSurahWindowHtml(surah));
  win.document.close();
};

let revealObserver;

const setupReveal = () => {
  if (revealObserver) {
    revealObserver.disconnect();
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  elements.forEach((element, index) => {
    const delay = element.dataset.delay || `${Math.min(index * 0.05, 0.3)}s`;
    element.style.transitionDelay = delay;
    revealObserver.observe(element);
  });
};

const buildSurahCard = (surah) => {
  const card = document.createElement("article");
  card.className = "surah-card reveal";
  card.dataset.number = surah.number;
  card.tabIndex = 0;
  const numberText = surah.number.toString().padStart(2, "0");
  card.innerHTML = `
    <div class="surah-meta">
      <span class="surah-number">${numberText}</span>
      <span class="surah-length">${surah.ayahs} Ayat</span>
    </div>
    <h3>${surah.name}</h3>
    <p>${surah.meaning}</p>
    <div class="surah-tags">
      <span class="tag">${surah.revelation}</span>
    </div>
    <button class="btn btn-ghost" type="button" data-action="open">Open</button>
  `;
  return card;
};

const renderSurahs = () => {
  if (!surahGrid) return;
  const visible = getVisibleSurahs();
  const canToggle = shouldLimitSurahs(visible.length);
  const limitActive = canToggle && !state.showAll;
  const displaySurahs = limitActive ? visible.slice(0, 4) : visible;
  surahGrid.innerHTML = "";
  displaySurahs.forEach((surah) => {
    surahGrid.appendChild(buildSurahCard(surah));
  });
  updateCount(displaySurahs.length);
  if (noResults) {
    noResults.hidden = visible.length > 0;
  }
  if (showAllButton) {
    showAllButton.textContent = state.showAll ? "See less surahs" : "See all surahs";
    showAllButton.setAttribute("aria-expanded", state.showAll ? "true" : "false");
  }
  if (surahActions) {
    surahActions.hidden = !canToggle;
  }
  setupReveal();
};

const findSurah = (number) => SURAH_DATA.find((item) => item.number === number);

let activeSurah = null;

const openDetail = (surah) => {
  if (!detailOverlay) return;
  activeSurah = surah;
  if (detailNumber) {
    detailNumber.textContent = `Surah ${surah.number.toString().padStart(2, "0")}`;
  }
  if (detailTitle) detailTitle.textContent = surah.name;
  if (detailMeaning) detailMeaning.textContent = surah.meaning;
  if (detailAyahs) detailAyahs.textContent = `${surah.ayahs} Ayat`;
  if (detailType) detailType.textContent = surah.revelation;
  if (detailSummary) {
    detailSummary.textContent =
      SURAH_HIGHLIGHTS[surah.number] ||
      "Summary coming soon. Add this surah to your plan to track notes and reflections.";
  }
  detailOverlay.classList.add("is-open");
  detailOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeDetail = () => {
  if (!detailOverlay) return;
  detailOverlay.classList.remove("is-open");
  detailOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const addToQueue = (surah) => {
  if (!queueList) return;
  const existing = queueItems.find(
    (item) =>
      item.number === surah.number ||
      normalizeText(item.name) === normalizeText(surah.name)
  );
  if (existing) {
    pulseQueueByName(existing.name);
    return;
  }
  queueItems.push({ name: surah.name, number: surah.number });
  renderQueue();
  setStored(STORAGE_KEYS.queue, queueItems);
  const newNode = queueList.querySelector(`[data-number="${surah.number}"]`);
  if (newNode) {
    newNode.classList.add("is-pulse");
  }
};

if (surahGrid) {
  surahGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".surah-card");
    if (!card) return;
    const number = Number(card.dataset.number);
    const surah = findSurah(number);
    if (!surah) return;
    const isOpenAction = event.target.closest("[data-action=\"open\"]");
    if (isOpenAction) {
      openSurahWindow(surah);
      return;
    }
    openDetail(surah);
  });

  surahGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".surah-card");
    if (!card) return;
    event.preventDefault();
    const number = Number(card.dataset.number);
    const surah = findSurah(number);
    if (surah) openDetail(surah);
  });
}

if (detailClose) {
  detailClose.addEventListener("click", closeDetail);
}

if (detailOverlay) {
  detailOverlay.addEventListener("click", (event) => {
    if (event.target === detailOverlay) closeDetail();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetail();
});

if (detailRead) {
  detailRead.addEventListener("click", () => {
    if (!activeSurah) return;
    closeDetail();
    openSurahWindow(activeSurah);
  });
}

if (detailQueue) {
  detailQueue.addEventListener("click", () => {
    if (!activeSurah) return;
    addToQueue(activeSurah);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.term = event.target.value.trim().toLowerCase();
    renderSurahs();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    state.filter = button.dataset.filter || "all";
    renderSurahs();
  });
});

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderSurahs();
  });
}
if (showAllButton) {
  showAllButton.addEventListener("click", () => {
    state.showAll = !state.showAll;
    renderSurahs();
  });
}

if (checklistItems.length) {
  const savedPlan = getStored(STORAGE_KEYS.plan, null);
  if (savedPlan) {
    applyPlanState(savedPlan);
  }
  updatePlanProgress();
  checklistItems.forEach((item) => {
    item.addEventListener("change", () => {
      updatePlanProgress();
      savePlanProgress();
    });
  });
  if (resetPlan) {
    resetPlan.addEventListener("click", () => {
      checklistItems.forEach((item) => {
        item.checked = false;
      });
      updatePlanProgress();
      savePlanProgress();
    });
  }
}

if (queueList) {
  queueItems = getStored(STORAGE_KEYS.queue, seedQueueFromDom());
  renderQueue();
}

if (queueForm) {
  queueForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!queueInput) return;
    const value = queueInput.value.trim();
    if (!value) return;
    const exists = queueItems.find(
      (item) => normalizeText(item.name) === normalizeText(value)
    );
    if (exists) {
      pulseQueueByName(exists.name);
      queueInput.value = "";
      return;
    }
    queueItems.push({ name: value, number: null });
    renderQueue();
    setStored(STORAGE_KEYS.queue, queueItems);
    queueInput.value = "";
  });
}

if (noteGrid) {
  noteItems = getStored(STORAGE_KEYS.notes, seedNotesFromDom());
  renderNotes();
}

if (noteForm) {
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!noteInput) return;
    const value = noteInput.value.trim();
    if (!value) return;
    if (noteItems.some((item) => normalizeText(item) === normalizeText(value))) {
      noteInput.value = "";
      return;
    }
    noteItems.push(value);
    renderNotes();
    setStored(STORAGE_KEYS.notes, noteItems);
    noteInput.value = "";
  });
}

const scrollToSurahs = () => {
  if (surahSection) {
    surahSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

if (startReading) {
  startReading.addEventListener("click", () => {
    openSurahWindow(SURAH_DATA[0]);
  });
}

if (exploreSurahs) {
  exploreSurahs.addEventListener("click", scrollToSurahs);
}

const applyVerseToUi = (data) => {
  if (!data) return;
  if (verseAr) verseAr.textContent = data.ar || "";
  if (verseEn) verseEn.textContent = data.en || "";
  if (verseUr) verseUr.textContent = data.ur || "";
  if (verseRef) verseRef.textContent = data.ref || "";
};

let verseOfDay = null;

const fetchVerseOfDay = async (ayahNumber) => {
  const response = await fetch(
    `https://api.alquran.cloud/v1/ayah/${ayahNumber}/editions/quran-uthmani,en.sahih,ur.junagarhi`
  );
  if (!response.ok) {
    throw new Error("Verse request failed.");
  }
  const payload = await response.json();
  const editions = Array.isArray(payload.data) ? payload.data : [];
  if (!editions.length) {
    throw new Error("No verse data returned.");
  }
  const arabicEdition = editions.find((edition) => edition.language === "ar") || editions[0];
  const englishEdition = editions.find((edition) => edition.language === "en") || editions[1];
  const urduEdition = editions.find((edition) => edition.language === "ur") || editions[2];
  const surahInfo = arabicEdition && arabicEdition.surah ? arabicEdition.surah : null;
  const surahName = surahInfo && surahInfo.englishName ? surahInfo.englishName : "Surah";
  const surahNumber = surahInfo && surahInfo.number ? surahInfo.number : "";
  const ayahNumberInSurah = arabicEdition && arabicEdition.numberInSurah
    ? arabicEdition.numberInSurah
    : "";
  return {
    ayah: arabicEdition && arabicEdition.number ? arabicEdition.number : ayahNumber,
    ar: arabicEdition ? arabicEdition.text : "",
    en: englishEdition ? englishEdition.text : "",
    ur: romanizeUrduText(urduEdition ? urduEdition.text : ""),
    ref: `${surahName} ${surahNumber}:${ayahNumberInSurah}`
  };
};

const loadVerseOfDay = async () => {
  const todayKey = getLocalDateKey();
  const cached = getStored(STORAGE_KEYS.verse, null);
  if (cached && cached.date === todayKey) {
    verseOfDay = cached;
    applyVerseToUi(cached);
    prepareVerseAudio(cached.ayah);
    return;
  }

  const dayIndex = getDayOfYear(new Date());
  const ayahNumber = ((dayIndex - 1) % 6236) + 1;

  try {
    const verseData = await fetchVerseOfDay(ayahNumber);
    verseOfDay = { ...verseData, date: todayKey };
    setStored(STORAGE_KEYS.verse, verseOfDay);
    applyVerseToUi(verseOfDay);
    prepareVerseAudio(verseOfDay.ayah);
  } catch (error) {
    const fallback =
      verseSamples[Math.floor(Math.random() * verseSamples.length)] || verseSamples[0];
    verseOfDay = { ...fallback, date: todayKey };
    applyVerseToUi(verseOfDay);
    prepareVerseAudio(verseOfDay.ayah);
  }
};

const verseAudio = new Audio();
verseAudio.preload = "metadata";
let versePlaying = false;
let verseAutoPlay = false;
let verseLoadId = 0;

const updateVerseTime = () => {
  if (!timeEl) return;
  const current = verseAudio.currentTime || 0;
  const duration = Number.isFinite(verseAudio.duration) ? verseAudio.duration : 0;
  timeEl.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
};

const setVerseState = (isPlaying) => {
  versePlaying = isPlaying;
  if (versePlay) {
    versePlay.textContent = isPlaying ? "||" : ">";
    versePlay.setAttribute("aria-pressed", isPlaying ? "true" : "false");
  }
  if (wave) {
    wave.classList.toggle("is-playing", isPlaying);
  }
};

const fetchVerseAudioUrl = async (ayah) => {
  const response = await fetch(`https://api.alquran.cloud/v1/ayah/${ayah}/ar.alafasy`);
  if (!response.ok) {
    throw new Error("Audio request failed.");
  }
  const payload = await response.json();
  if (!payload || !payload.data || !payload.data.audio) {
    throw new Error("No audio URL returned.");
  }
  return payload.data.audio;
};

const prepareVerseAudio = async (ayahKey) => {
  if (!ayahKey) return;
  const requestId = (verseLoadId += 1);
  if (timeEl) {
    timeEl.textContent = "Loading...";
  }
  try {
    const url = await fetchVerseAudioUrl(ayahKey);
    if (requestId !== verseLoadId) return;
    verseAudio.src = url;
    verseAudio.load();
  } catch (error) {
    if (requestId !== verseLoadId) return;
    if (timeEl) {
      timeEl.textContent = "Audio unavailable";
    }
    setVerseState(false);
  }
};

const playVerse = () => {
  if (versePlaying) return;
  if (!verseAudio.src) {
    verseAutoPlay = true;
    prepareVerseAudio(verseOfDay ? verseOfDay.ayah : null);
    return;
  }
  verseAudio
    .play()
    .then(() => setVerseState(true))
    .catch(() => setVerseState(false));
};

const pauseVerse = () => {
  verseAudio.pause();
  setVerseState(false);
};

const toggleVerse = () => {
  if (versePlaying) {
    pauseVerse();
  } else {
    playVerse();
  }
};

verseAudio.addEventListener("loadedmetadata", updateVerseTime);
verseAudio.addEventListener("timeupdate", updateVerseTime);
verseAudio.addEventListener("ended", () => {
  verseAudio.currentTime = 0;
  setVerseState(false);
  updateVerseTime();
});
verseAudio.addEventListener("pause", () => setVerseState(false));
verseAudio.addEventListener("play", () => setVerseState(true));
verseAudio.addEventListener("error", () => {
  if (timeEl) {
    timeEl.textContent = "Audio unavailable";
  }
  setVerseState(false);
});
verseAudio.addEventListener("canplay", () => {
  if (verseAutoPlay) {
    verseAutoPlay = false;
    playVerse();
  }
});

if (versePlay) {
  versePlay.addEventListener("click", toggleVerse);
}

if (listenToday) {
  listenToday.addEventListener("click", () => {
    playVerse();
    if (heroCard) {
      heroCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

setVerseState(false);
updateVerseTime();
loadVerseOfDay();
renderSurahs();

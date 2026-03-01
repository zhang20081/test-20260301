const images = [
  { id: 1, title: "城市夜景", url: "https://picsum.photos/seed/city-night/600/400" },
  { id: 2, title: "高山湖泊", url: "https://picsum.photos/seed/mountain-lake/600/400" },
  { id: 3, title: "森林小径", url: "https://picsum.photos/seed/forest-road/600/400" },
  { id: 4, title: "海边日落", url: "https://picsum.photos/seed/beach-sunset/600/400" },
  { id: 5, title: "沙漠纹理", url: "https://picsum.photos/seed/desert-wave/600/400" },
  { id: 6, title: "云端雪山", url: "https://picsum.photos/seed/snow-peak/600/400" },
  { id: 7, title: "秋日田野", url: "https://picsum.photos/seed/autumn-field/600/400" },
  { id: 8, title: "河流晨雾", url: "https://picsum.photos/seed/river-mist/600/400" },
  { id: 9, title: "城市街角", url: "https://picsum.photos/seed/street-corner/600/400" },
  { id: 10, title: "夜空星轨", url: "https://picsum.photos/seed/star-trails/600/400" },
  { id: 11, title: "海岛航拍", url: "https://picsum.photos/seed/island-view/600/400" },
  { id: 12, title: "草原小屋", url: "https://picsum.photos/seed/grass-house/600/400" }
];

const countInput = document.getElementById("count");
const pickBtn = document.getElementById("pickBtn");
const statusText = document.getElementById("status");
const gallery = document.getElementById("gallery");

function getRandomSelection(list, count) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function render(list) {
  gallery.innerHTML = "";
  list.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.url}" alt="${item.title}" loading="lazy" />
      <p>${item.title}</p>
    `;
    gallery.appendChild(card);
  });
}

function handlePick() {
  const requested = Number.parseInt(countInput.value, 10);
  const safeCount = Number.isNaN(requested) ? 1 : Math.min(Math.max(requested, 1), images.length);
  countInput.value = safeCount;

  const selected = getRandomSelection(images, safeCount);
  render(selected);
  statusText.textContent = `已随机筛选 ${safeCount} 张图片（候选总数 ${images.length}）。`;
}

pickBtn.addEventListener("click", handlePick);

handlePick();

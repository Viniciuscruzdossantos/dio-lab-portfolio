// Projetos: para adicionar um novo, copie um objeto abaixo. cat = js | css | auto
const GH = 'https://github.com/Viniciuscruzdossantos';
const projects = [
  { t: 'Detona Ralph', d: 'Jogo de reflexo: acerte o Ralph antes que o tempo acabe. Lógica de tempo, pontuação e vidas.', tags: ['HTML', 'CSS', 'JavaScript'], cat: 'js', link: GH + '/jsgame-detona-ralph' },
  { t: 'Pokédex', d: 'Lista de Pokémon consumindo a PokéAPI, com cards dinâmicos montados via JavaScript.', tags: ['JavaScript', 'API REST'], cat: 'js', link: GH },
  { t: 'Jogo da Memória', d: 'Jogo de memória com emojis, cartas que viram e contagem de acertos.', tags: ['HTML', 'CSS', 'JavaScript'], cat: 'js', link: GH },
  { t: 'Yu-Gi-Oh! Jo-ken-po', d: 'Pedra, papel e tesoura com cartas de Yu-Gi-Oh!, regras e placar.', tags: ['JavaScript', 'DOM'], cat: 'js', link: GH },
  { t: 'Classificador de Herói', d: 'Lógica de programação: variáveis, operadores, laços e decisões para definir o nível de um herói.', tags: ['JavaScript', 'Lógica'], cat: 'js', link: GH },
  { t: 'Multiverso Spider-Man', d: 'Site com carrossel 3D, páginas por filme, galerias em tela cheia e layout responsivo.', tags: ['HTML', 'CSS', 'JavaScript'], cat: 'css', link: GH },
  { t: 'Landing Page (Trilha de CSS)', d: 'Desafio 01 da trilha de CSS da DIO: página de destino com foco em layout e estilo.', tags: ['HTML', 'CSS'], cat: 'css', link: GH },
  { t: 'Cotação do Dólar no n8n', d: 'Workflow que busca a cotação USD/BRL e entrega o valor atualizado automaticamente.', tags: ['n8n', 'API', 'Automação'], cat: 'auto', link: GH },
  { t: 'n8n + MySQL + LinkedIn', d: 'Workflow de nível intermediário: dados no MySQL alimentando publicações no LinkedIn.', tags: ['n8n', 'MySQL'], cat: 'auto', link: GH },
  { t: 'Assistente de Investimentos', d: 'Desafio DIO com RPA e IA generativa: Python e BeautifulSoup coletam dados e o n8n orquestra o fluxo.', tags: ['Python', 'n8n', 'IA'], cat: 'auto', link: GH }
];

const $ = (s, el = document) => el.querySelector(s);
const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Tema claro/escuro (lembra a escolha)
try { root.dataset.theme = localStorage.getItem('tema') || 'dark'; } catch { root.dataset.theme = 'dark'; }
$('.theme-btn').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('tema', root.dataset.theme); } catch {}
});

// Menu no celular
const menuBtn = $('.menu-btn'), nav = $('#nav');
menuBtn.addEventListener('click', () => menuBtn.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); });

// Projetos + filtro
const grid = $('#grid');
function render(filter) {
  grid.innerHTML = '';
  projects.filter(p => filter === 'all' || p.cat === filter).forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3></h3><p></p><div class="tags"></div><a target="_blank" rel="noopener">Ver no GitHub ›</a>`;
    $('h3', card).textContent = p.t;
    $('p', card).textContent = p.d;
    $('a', card).href = p.link;
    p.tags.forEach(x => { const s = document.createElement('span'); s.textContent = x; $('.tags', card).append(s); });
    grid.append(card);
  });
}
document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  render(b.dataset.f);
}));
render('all');

// Benchmark: conta quantos projetos usam cada tecnologia (dados reais do array)
const techs = [['JavaScript', t => t === 'JavaScript'], ['HTML', t => t === 'HTML'], ['CSS', t => t === 'CSS'], ['n8n', t => t === 'n8n'], ['API', t => t.startsWith('API')], ['Python', t => t === 'Python'], ['MySQL', t => t === 'MySQL']];
const counts = techs.map(([n, f]) => [n, projects.filter(p => p.tags.some(f)).length]);
const max = Math.max(...counts.map(c => c[1]));
$('#bars').innerHTML = counts.map(([n, c]) => `<div class="bar-row"><p>${n}<span>${c} ${c === 1 ? 'projeto' : 'projetos'}</span></p><div class="track"><i data-w="${Math.round(c / max * 100)}"></i></div></div>`).join('');

// Efeito de digitação
const words = ['ideias em interfaces', 'tarefas em automações', 'desafios em projetos', 'curiosidade em código'];
const out = $('#typing');
if (reduce) { out.textContent = words[0]; }
else {
  let w = 0, c = 0, del = false;
  (function tick() {
    const word = words[w];
    out.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
}

// Chip inclina com o mouse (estilo keynote)
const chip = $('#chip svg');
if (!reduce) {
  addEventListener('mousemove', e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    chip.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
  });
}

// Revela ao rolar, anima barras e contadores, link ativo no menu
function countUp(el) {
  const n = +el.dataset.n; if (reduce) return el.textContent = n;
  let i = 0; const id = setInterval(() => { el.textContent = ++i; if (i >= n) clearInterval(id); }, 900 / n);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting || e.target.classList.contains('in')) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('[data-n]').forEach(countUp);
  e.target.querySelectorAll('.track i').forEach(i => i.style.width = i.dataset.w + '%');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const links = [...nav.querySelectorAll('a')];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

$('#year').textContent = new Date().getFullYear();

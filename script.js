initCursor();
initTheme();

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Configuração Tema Escuro / Claro

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeButtonUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeButtonUI(newTheme);
}

function updateThemeButtonUI(theme) {
    const icon = document.getElementById("theme-icon");
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Configuração Cursor Glow

function initCursor() {
    const savedCursor = localStorage.getItem("cursorglow") || "enabled";
    document.documentElement.setAttribute("cursorglow-theme", savedCursor);
    updateCursorGlowButtonUI(savedCursor);
}

function toggleCursorGlow() {
    const currentCursorGlow = document.documentElement.getAttribute("cursorglow-theme");
    const newCursorGlow = currentCursorGlow === "enabled" ? "disabled" : "enabled";
    document.documentElement.setAttribute("cursorglow-theme", newCursorGlow);
    localStorage.setItem("cursorglow", newCursorGlow);
    updateCursorGlowButtonUI(newCursorGlow);
}

function updateCursorGlowButtonUI(cursorglow) {
    const icon = document.getElementById("cursorglow-icon");
    icon.textContent = cursorglow === "enabled" ? "✔️" : "❌";
}


const radicals = [
    // 1 Traço
    { id: 1, char: "一", vars: "", strokes: 1, meaning: "Um (yī)" },
    { id: 2, char: "丨", vars: "", strokes: 1, meaning: "Linha vertical" },
    { id: 3, char: "丶", vars: "", strokes: 1, meaning: "Ponto" },
    { id: 4, char: "丿", vars: "乀 乁", strokes: 1, meaning: "Traço esquerdo (curva)" },
    { id: 5, char: "乙", vars: "乚 乛 ⺄", strokes: 1, meaning: "Segundo / Borda (yǐ)" },
    { id: 6, char: "亅", vars: "", strokes: 1, meaning: "Gancho" },
    // 2 Traços
    { id: 7, char: "二", vars: "", strokes: 2, meaning: "Dois (èr)" },
    { id: 8, char: "亠", vars: "", strokes: 2, meaning: "Tampa alta" },
    { id: 9, char: "人", vars: "亻 𠆢", strokes: 2, meaning: "Pessoa (rén)" },
    { id: 10, char: "儿", vars: "", strokes: 2, meaning: "Filho / Pernas (ér)" },
    { id: 11, char: "入", vars: "", strokes: 2, meaning: "Entrar (rù) - [Substituído por 人 no simplificado]" },
    { id: 12, char: "八", vars: "丷", strokes: 2, meaning: "Oito, dividir (bā)" },
    { id: 13, char: "冂", vars: "", strokes: 2, meaning: "Caixa aberta por baixo" },
    { id: 14, char: "冖", vars: "", strokes: 2, meaning: "Cobertura / Tampa caída" },
    { id: 15, char: "冫", vars: "", strokes: 2, meaning: "Gelo (Duas gotas)" },
    { id: 16, char: "几", vars: "", strokes: 2, meaning: "Mesa pequena (jǐ)" },
    { id: 17, char: "凵", vars: "", strokes: 2, meaning: "Recipiente / Caixa aberta por cima" },
    { id: 18, char: "刀", vars: "刂 ⺈", strokes: 2, meaning: "Faca, lâmina (dāo)" },
    { id: 19, char: "力", vars: "", strokes: 2, meaning: "Força (lì)" },
    { id: 20, char: "勹", vars: "", strokes: 2, meaning: "Abraço / Embrulho" },
    { id: 21, char: "匕", vars: "", strokes: 2, meaning: "Colher / Adaga (bǐ)" },
    { id: 22, char: "匚", vars: "", strokes: 2, meaning: "Caixa aberta pela direita" },
    { id: 23, char: "匸", vars: "", strokes: 2, meaning: "Esconderijo [Fundiu-se com o 匚 no simplificado]" },
    { id: 24, char: "十", vars: "", strokes: 2, meaning: "Dez (shí)" },
    { id: 25, char: "卜", vars: "", strokes: 2, meaning: "Adivinhação (bǔ)" },
    { id: 26, char: "卩", vars: "⺋", strokes: 2, meaning: "Selo / Pessoa ajoelhada" },
    { id: 27, char: "厂", vars: "", strokes: 2, meaning: "Penhasco / Fábrica (chǎng)" },
    { id: 28, char: "厶", vars: "", strokes: 2, meaning: "Privado / Egoísta" },
    { id: 29, char: "又", vars: "", strokes: 2, meaning: "Novamente / Mão direita (yòu)" },
    // 3 Traços
    { id: 30, char: "口", vars: "", strokes: 3, meaning: "Boca (kǒu)" },
    { id: 31, char: "囗", vars: "", strokes: 3, meaning: "Cerca / Envoltório completo" },
    { id: 32, char: "土", vars: "", strokes: 3, meaning: "Terra (tǔ)" },
    { id: 33, char: "士", vars: "", strokes: 3, meaning: "Erudito / Guerreiro (shì)" },
    { id: 34, char: "夂", vars: "", strokes: 3, meaning: "Seguir / Ir atrás" },
    { id: 35, char: "夊", vars: "", strokes: 3, meaning: "Caminhar lentamente [Fundiu-se visualmente com 夂]" },
    { id: 36, char: "夕", vars: "", strokes: 3, meaning: "Noite / Entardecer (xī)" },
    { id: 37, char: "大", vars: "", strokes: 3, meaning: "Grande (dà)" },
    { id: 38, char: "女", vars: "", strokes: 3, meaning: "Mulher (nǚ)" },
    { id: 39, char: "子", vars: "", strokes: 3, meaning: "Filho / Criança (zǐ)" },
    { id: 40, char: "宀", vars: "", strokes: 3, meaning: "Teto / Casa" },
    { id: 41, char: "寸", vars: "", strokes: 3, meaning: "Polegada (cùn)" },
    { id: 42, char: "小", vars: "⺌ ⺍", strokes: 3, meaning: "Pequeno (xiǎo)" },
    { id: 43, char: "尢", vars: "玩", strokes: 3, meaning: "Coxo" },
    { id: 44, char: "尸", vars: "", strokes: 3, meaning: "Cadáver / Corpo (shī)" },
    { id: 45, char: "屮", vars: "", strokes: 3, meaning: "Broto" },
    { id: 46, char: "山", vars: "", strokes: 3, meaning: "Montanha (shān)" },
    { id: 47, char: "巛", vars: "川", strokes: 3, meaning: "Rio que flui" },
    { id: 48, char: "工", vars: "", strokes: 3, meaning: "Trabalho / Engenharia (gōng)" },
    { id: 49, char: "己", vars: "", strokes: 3, meaning: "Próprio / Si mesmo (jǐ)" },
    { id: 50, char: "巾", vars: "", strokes: 3, meaning: "Lenço / Toalha (jīn)" },
    { id: 51, char: "干", vars: "", strokes: 3, meaning: "Seco / Escudo (gān)" },
    { id: 52, char: "幺", vars: "么", strokes: 3, meaning: "Minúsculo" },
    { id: 53, char: "广", vars: "", strokes: 3, meaning: "Amplo / Abrigo (guǎng)" },
    { id: 54, char: "廴", vars: "", strokes: 3, meaning: "Longa caminhada" },
    { id: 55, char: "廾", vars: "", strokes: 3, meaning: "Duas mãos juntas" },
    { id: 56, char: "弋", vars: "", strokes: 3, meaning: "Flecha com corda" },
    { id: 57, char: "弓", vars: "", strokes: 3, meaning: "Arco (gōng)" },
    { id: 58, char: "彐", vars: "彑", strokes: 3, meaning: "Focinho de porco" },
    { id: 59, char: "彡", vars: "", strokes: 3, meaning: "Cerdas / Penas / Barba" },
    { id: 60, char: "彳", vars: "", strokes: 3, meaning: "Passo (Passo com o pé esquerdo)" },
    // 4 Traços
    { id: 61, char: "心", vars: "忄 ⺗", strokes: 4, meaning: "Coração / Mente (xīn)" },
    { id: 62, char: "戈", vars: "", strokes: 4, meaning: "Alabarda / Lança antiga" },
    { id: 63, char: "户", vars: "户 戸", strokes: 4, meaning: "Porta / Família (hù)" },
    { id: 64, char: "手", vars: "手 龵", strokes: 4, meaning: "Mão (shǒu)" },
    { id: 65, char: "支", vars: "", strokes: 4, meaning: "Ramo / Apoio (zhī)" },
    { id: 66, char: "攴", vars: "攵", strokes: 4, meaning: "Bater levemente" },
    { id: 67, char: "文", vars: "", strokes: 4, meaning: "Texto / Cultura (wén)" },
    { id: 68, char: "斗", vars: "", strokes: 4, meaning: "Concha / Luta (dǒu)" },
    { id: 69, char: "斤", vars: "", strokes: 4, meaning: "Machado (jīn)" },
    { id: 70, char: "方", vars: "", strokes: 4, meaning: "Quadrado / Direção (fāng)" },
    { id: 71, char: "无", vars: "旡", strokes: 4, meaning: "Não ter / Nada (wú)" },
    { id: 72, char: "日", vars: "", strokes: 4, meaning: "Sol / Dia (rì)" },
    { id: 73, char: "曰", vars: "", strokes: 4, meaning: "Dizer / Falar (yuē)" },
    { id: 74, char: "月", vars: "", strokes: 4, meaning: "Lua / Mês (yuè)" },
    { id: 75, char: "木", vars: "", strokes: 4, meaning: "Árvore / Madeira (mù)" },
    { id: 76, char: "欠", vars: "", strokes: 4, meaning: "Bocejo / Faltar (qiàn)" },
    { id: 77, char: "止", vars: "", strokes: 4, meaning: "Parar (zhǐ)" },
    { id: 78, char: "歹", vars: "歺", strokes: 4, meaning: "Mau / Morte (dǎi)" },
    { id: 79, char: "殳", vars: "", strokes: 4, meaning: "Lança / Arma de arremesso" },
    { id: 80, char: "毋", vars: "母", strokes: 4, meaning: "Não / Mãe (wú)" },
    { id: 81, char: "比", vars: "", strokes: 4, meaning: "Comparar (bǐ)" },
    { id: 82, char: "毛", vars: "", strokes: 4, meaning: "Pêlo / Cabelo (máo)" },
    { id: 83, char: "氏", vars: "", strokes: 4, meaning: "Clã (shì)" },
    { id: 84, char: "气", vars: "", strokes: 4, meaning: "Ar / Vapor (qì)" },
    { id: 85, char: "水", vars: "氵 氺", strokes: 4, meaning: "Água (shuǐ)" },
    { id: 86, char: "火", vars: "灬", strokes: 4, meaning: "Fogo (huǒ)" },
    { id: 87, char: "爪", vars: "爫", strokes: 4, meaning: "Garra (zhǎo)" },
    { id: 88, char: "父", vars: "", strokes: 4, meaning: "Pai (fù)" },
    { id: 89, char: "爻", vars: "", strokes: 4, meaning: "Diagramas (I Ching)" },
    { id: 90, char: "爿", vars: "丬", strokes: 4, meaning: "Tábua (lado esquerdo)" },
    { id: 91, char: "片", vars: "", strokes: 4, meaning: "Fatia / Pedaço plano (piàn)" },
    { id: 92, char: "牙", vars: "", strokes: 4, meaning: "Dente / Presa (yá)" },
    { id: 93, char: "牛", vars: "牜 ⺧", strokes: 4, meaning: "Vaca / Boi (niú)" },
    { id: 94, char: "犬", vars: "犭", strokes: 4, meaning: "Cão / Cachorro (quǎn)" },
    // 5 Traços
    { id: 95, char: "玄", vars: "", strokes: 5, meaning: "Profundo / Misterioso (xuán)" },
    { id: 96, char: "玉", vars: "王 玊", strokes: 5, meaning: "Jade / Rei (yù)" },
    { id: 97, char: "瓜", vars: "", strokes: 5, meaning: "Melão (guā)" },
    { id: 98, char: "瓦", vars: "", strokes: 5, meaning: "Telha (wǎ)" },
    { id: 99, char: "甘", vars: "", strokes: 5, meaning: "Doce (gān)" },
    { id: 100, char: "生", vars: "", strokes: 5, meaning: "Nascer / Vida (shēng)" },
    { id: 101, char: "用", vars: "", strokes: 5, meaning: "Usar (yòng)" },
    { id: 102, char: "田", vars: "", strokes: 5, meaning: "Campo de cultivo (tián)" },
    { id: 103, char: "疋", vars: "⺪", strokes: 5, meaning: "Rolo de pano / Perna" },
    { id: 104, char: "疒", vars: "", strokes: 5, meaning: "Doença" },
    { id: 105, char: "癶", vars: "", strokes: 5, meaning: "Passos / Tenda" },
    { id: 106, char: "白", vars: "", strokes: 5, meaning: "Branco (bái)" },
    { id: 107, char: "皮", vars: "", strokes: 5, meaning: "Pele / Couro (pí)" },
    { id: 108, char: "皿", vars: "", strokes: 5, meaning: "Prato / Recipiente (mǐn)" },
    { id: 109, char: "目", vars: "⺫", strokes: 5, meaning: "Olho (mù)" },
    { id: 110, char: "矛", vars: "", strokes: 5, meaning: "Lança (máo)" },
    { id: 111, char: "矢", vars: "", strokes: 5, meaning: "Flecha (shǐ)" },
    { id: 112, char: "石", vars: "", strokes: 5, meaning: "Pedra (shí)" },
    { id: 113, char: "示", vars: "礻", strokes: 5, meaning: "Mostrar / Sinal espiritual (shì)" },
    { id: 114, char: "禸", vars: "", strokes: 5, meaning: "Pegada de animal" },
    { id: 115, char: "禾", vars: "", strokes: 5, meaning: "Grão / Planta de cereal (hé)" },
    { id: 116, char: "穴", vars: "", strokes: 5, meaning: "Caverna / Buraco (xué)" },
    { id: 117, char: "立", vars: "", strokes: 5, meaning: "Ficar em pé / Estabelecer (lì)" },
    // 6 Traços
    { id: 118, char: "竹", vars: "⺮", strokes: 6, meaning: "Bambu (zhú)" },
    { id: 119, char: "米", vars: "", strokes: 6, meaning: "Arroz (mǐn)" },
    { id: 120, char: "纟", vars: "", strokes: 6, meaning: "Seda / Fio (mì)", trad: "糸, 糹" },
    { id: 121, char: "缶", vars: "", strokes: 6, meaning: "Pote de barro (fǒu)" },
    { id: 122, char: "网", vars: "罒 ⺲ ⺳", strokes: 6, meaning: "Rede (wǎng)" },
    { id: 123, char: "羊", vars: "⺷ ⺶", strokes: 6, meaning: "Ovelha / Carneiro (yáng)" },
    { id: 124, char: "羽", vars: "", strokes: 6, meaning: "Pena / Asa (yǔ)" },
    { id: 125, char: "老", vars: "耂", strokes: 6, meaning: "Velho (lǎo)" },
    { id: 126, char: "而", vars: "", strokes: 6, meaning: "E / No entanto (ér)" },
    { id: 127, char: "耒", vars: "", strokes: 6, meaning: "Arado" },
    { id: 128, char: "耳", vars: "", strokes: 6, meaning: "Orelha (ěr)" },
    { id: 129, char: "聿", vars: "⺻ ⺺", strokes: 6, meaning: "Pincel de escrita" },
    { id: 130, char: "肉", vars: "⺼", strokes: 6, meaning: "Carne (ròu)" },
    { id: 131, char: "臣", vars: "", strokes: 6, meaning: "Ministro / Súdito (chén)" },
    { id: 132, char: "自", vars: "", strokes: 6, meaning: "Próprio / Desde (zì)" },
    { id: 133, char: "至", vars: "", strokes: 6, meaning: "Chegar (zhì)" },
    { id: 134, char: "臼", vars: "", strokes: 6, meaning: "Almofariz (jiù)" },
    { id: 135, char: "舌", vars: "", strokes: 6, meaning: "Língua (shé)" },
    { id: 136, char: "舛", vars: "", strokes: 6, meaning: "Oposição / Erro" },
    { id: 137, char: "舟", vars: "", strokes: 6, meaning: "Barco (zhōu)" },
    { id: 138, char: "艮", vars: "", strokes: 6, meaning: "Parar / Duro (gèn)" },
    { id: 139, char: "色", vars: "", strokes: 6, meaning: "Cor (sè)" },
    { id: 140, char: "艹", vars: "++", strokes: 6, meaning: "Grama / Erva", trad: "艸" },
    { id: 141, char: "虍", vars: "", strokes: 6, meaning: "Tigre" },
    { id: 142, char: "虫", vars: "", strokes: 6, meaning: "Inseto / Verme (chóng) [Tradicional: 蟲]" },
    { id: 143, char: "血", vars: "", strokes: 6, meaning: "Sangue (xuè)" },
    { id: 144, char: "行", vars: "", strokes: 6, meaning: "Caminhar / Ir (xíng)" },
    { id: 145, char: "衣", vars: "⻂", strokes: 6, meaning: "Roupa / Vestimenta (yī)" },
    { id: 146, char: "襾", vars: "西 覀", strokes: 6, meaning: "Oeste (xī)" },
    // 7 Traços
    { id: 147, char: "见", vars: "", strokes: 7, meaning: "Ver / Encontrar (jiàn)", trad: "見" },
    { id: 148, char: "角", vars: "⻇", strokes: 7, meaning: "Chifre / Ângulo (jiǎo)" },
    { id: 149, char: "言", vars: "讠 訁", strokes: 7, meaning: "Fala / Palavra (yán)", trad: "言 / 訁" },
    { id: 150, char: "谷", vars: "", strokes: 7, meaning: "Vale (gǔ)" },
    { id: 151, char: "豆", vars: "", strokes: 7, meaning: "Feijão (dòu)" },
    { id: 152, char: "豕", vars: "", strokes: 7, meaning: "Porco" },
    { id: 153, char: "豸", vars: "", strokes: 7, meaning: "Felino lendário" },
    { id: 154, char: "贝", vars: "", strokes: 7, meaning: "Concha / Moeda (bèi)", trad: "貝" },
    { id: 155, char: "赤", vars: "", strokes: 7, meaning: "Vermelho (chì)" },
    { id: 156, char: "走", vars: "", strokes: 7, meaning: "Andar / Correr (zǒu)" },
    { id: 157, char: "足", vars: "⻊", strokes: 7, meaning: "Pé / Suficiente (zú)" },
    { id: 158, char: "身", vars: "", strokes: 7, meaning: "Corpo (shēn)" },
    { id: 159, char: "车", vars: "", strokes: 7, meaning: "Carro / Veículo (chē)", trad: "車" },
    { id: 160, char: "辛", vars: "", strokes: 7, meaning: "Picante / Labuta (xīn)" },
    { id: 161, char: "辰", vars: "", strokes: 7, meaning: "Manhã / Estrela (chén)" },
    { id: 162, char: "辵", vars: "辶 ⻍ ⻎", strokes: 7, meaning: "Caminhar / Parar e andar" },
    { id: 163, char: "邑", vars: "阝 (direita)", strokes: 7, meaning: "Cidade / Vila" },
    { id: 164, char: "酉", vars: "", strokes: 7, meaning: "Vinho / Jarro (yǒu)" },
    { id: 165, char: "采", vars: "", strokes: 7, meaning: "Colher / Coletar (cǎi)" },
    { id: 166, char: "里", vars: "", strokes: 7, meaning: "Vila / Li (distância) (lǐ)" },
    // 8 Traços
    { id: 167, char: "金", vars: "钅", strokes: 8, meaning: "Ouro / Metal (jīn)", trad: "金 / 釒" },
    { id: 168, char: "长", vars: "", strokes: 8, meaning: "Longo (cháng)", trad: "長, 镸" },
    { id: 169, char: "门", vars: "", strokes: 8, meaning: "Porta / Portal (mén)", trad: "門" },
    { id: 170, char: "阜", vars: "阝 (esquerda)", strokes: 8, meaning: "Monte / Colina" },
    { id: 171, char: "隶", vars: "", strokes: 8, meaning: "Escravo / Servo" },
    { id: 172, char: "隹", vars: "", strokes: 8, meaning: "Pássaro de cauda curta (zhuī)" },
    { id: 173, char: "雨", vars: "⻗", strokes: 8, meaning: "Chuva (yǔ)" },
    { id: 174, char: "靑", vars: "", strokes: 8, meaning: "Azul-esverdeado / Jovem (qīng)" },
    { id: 175, char: "非", vars: "", strokes: 8, meaning: "Não / Errado (fēi)" },
    // 9 Traços
    { id: 176, char: "面", vars: "靣", strokes: 9, meaning: "Rosto / Superfície (miàn)" },
    { id: 177, char: "革", vars: "", strokes: 9, meaning: "Couro / Reforma (gé)" },
    { id: 178, char: "韦", vars: "", strokes: 9, meaning: "Couro macio", trad: "韋" },
    { id: 179, char: "韭", vars: "", strokes: 9, meaning: "Nirá / Cebolinha (jiǔ)" },
    { id: 180, char: "音", vars: "", strokes: 9, meaning: "Som / Voz (yīn)" },
    { id: 181, char: "页", vars: "", strokes: 9, meaning: "Página / Folha (yè)", trad: "頁" },
    { id: 182, char: "风", vars: "", strokes: 9, meaning: "Vento (fēng)", trad: "風" },
    { id: 183, char: "飞", vars: "", strokes: 9, meaning: "Voar (fēi)", trad: "飛" },
    { id: 184, char: "食", vars: "饣", strokes: 9, meaning: "Comer / Comida (shí)", trad: "食 / 飠" },
    { id: 185, char: "首", vars: "", strokes: 9, meaning: "Cabeça / Líder (shǒu)" },
    { id: 186, char: "香", vars: "", strokes: 9, meaning: "Aromático (xiāng)" },
    // 10 Traços
    { id: 187, char: "马", vars: "", strokes: 10, meaning: "Cavalo (mǎ)", trad: "馬" },
    { id: 188, char: "骨", vars: "", strokes: 10, meaning: "Osso" },
    { id: 189, char: "高", vars: "髙", strokes: 10, meaning: "Alto (gāo)" },
    { id: 190, char: "髟", vars: "", strokes: 10, meaning: "Cabelo comprido" },
    { id: 191, char: "鬥", vars: "", strokes: 10, meaning: "Luta / Disputa" },
    { id: 192, char: "鬯", vars: "", strokes: 10, meaning: "Vinho sacrificial" },
    { id: 193, char: "鬲", vars: "", strokes: 10, meaning: "Tripé de cozinha antigo" },
    { id: 194, char: "鬼", vars: "", strokes: 10, meaning: "Fantasma / Demônio (guǐ)" },
    // 11 Traços
    { id: 195, char: "鱼", vars: "", strokes: 11, meaning: "Peixe (yú)", trad: "魚" },
    { id: 196, char: "鸟", vars: "", strokes: 11, meaning: "Pássaro / Ave (niǎo)", trad: "鳥" },
    { id: 197, char: "卤", vars: "", strokes: 11, meaning: "Sal / Salmoura (lǔ)", trad: "鹵" },
    { id: 198, char: "鹿", vars: "", strokes: 11, meaning: "Cervo (lù)" },
    { id: 199, char: "麦", vars: "", strokes: 11, meaning: "Trigo / Cevada (mài)", trad: "麥" },
    { id: 200, char: "麻", vars: "", strokes: 11, meaning: "Cânhamo (má)" },
    // 12 Traços
    { id: 201, char: "黄", vars: "", strokes: 12, meaning: "Amarelo (huáng)", trad: "黃" },
    { id: 202, char: "黍", vars: "", strokes: 12, meaning: "Painço (shǔ)" },
    { id: 203, char: "黑", vars: "", strokes: 12, meaning: "Preto / Negro (hēi)" },
    { id: 204, char: "黹", vars: "", strokes: 12, meaning: "Bordado" },
    // 13 Traços
    { id: 205, char: "黾", vars: "", strokes: 13, meaning: "Sapo / Anfíbio", trad: "黽" },
    { id: 206, char: "鼎", vars: "", strokes: 13, meaning: "Tripé ritual (dǐng)" },
    { id: 207, char: "鼓", vars: "", strokes: 13, meaning: "Tambor (gǔ)" },
    { id: 208, char: "鼠", vars: "", strokes: 13, meaning: "Rato (shǔ)" },
    // 14 Traços
    { id: 209, char: "鼻", vars: "", strokes: 14, meaning: "Nariz (bí)" },
    { id: 210, char: "齐", vars: "", strokes: 14, meaning: "Uniforme / Alinhado (qí)", trad: "齊" },
    // 15 Traços
    { id: 211, char: "齿", vars: "", strokes: 15, meaning: "Dente (chǐ)", trad: "齒" },
    // 16 Traços
    { id: 212, char: "龙", vars: "", strokes: 16, meaning: "Dragão (lóng)", trad: "龍" },
    { id: 213, char: "龟", vars: "", strokes: 16, meaning: "Tartaruga (guī)", trad: "龜" },
    // 17 Traços
    { id: 214, char: "龠", vars: "", strokes: 17, meaning: "Flauta antiga" }
];

const container = document.getElementById("dynamic-blocks-container");
const searchInput = document.getElementById("search-input");
const emptyMessage = document.getElementById("empty-message");

// localStorage Tracker de Status
const storageKey = "radicals_status_tracker";
let statusCache = JSON.parse(localStorage.getItem(storageKey)) || {};

// Atualizar os Contadores numéricos das bolinhas
function atualizarContadores() {
    const totalRadicais = radicals.length;
    let emEstudo = 0;
    let aprendidos = 0;

    Object.values(statusCache).forEach(status => {
        if (status === "estudo") emEstudo++;
        if (status === "aprendido") aprendidos++;
    });

    const naoAprendidos = totalRadicais - (emEstudo + aprendidos);

    document.getElementById('qtd-nao-aprendidos').textContent = naoAprendidos;
    document.getElementById('qtd-em-estudo').textContent = emEstudo;
    document.getElementById('qtd-aprendidos').textContent = aprendidos;
}

// Alternância de Status das Linhas
function toggleStatus(id, buttonElement, rowElement) {
    const currentStatus = statusCache[id] || "nenhum";
    let nextStatus = "nenhum";
    let label = "Marcar";

    if (currentStatus === "nenhum") {
        nextStatus = "estudo";
        label = "Em estudo";
    } else if (currentStatus === "estudo") {
        nextStatus = "aprendido";
        label = "Aprendido";
    } else {
        nextStatus = "nenhum";
        label = "Marcar";
    }

    if (nextStatus === "nenhum") {
        delete statusCache[id];
    } else {
        statusCache[id] = nextStatus;
    }
    localStorage.setItem(storageKey, JSON.stringify(statusCache));

    buttonElement.className = "btn-status";
    rowElement.className = "";

    if (nextStatus !== "nenhum") {
        buttonElement.classList.add(nextStatus);
        rowElement.classList.add("status-" + nextStatus);
    }
    buttonElement.textContent = label;

    atualizarContadores();
}

// Função utilitária para remover acentos/diacríticos de uma string
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Renderização Dividida e Agrupada por Número de Traços
function renderGroupedTable(data) {
    container.innerHTML = "";

    if (data.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }
    emptyMessage.style.display = "none";

    const groups = {};
    data.forEach(item => {
        if (!groups[item.strokes]) {
            groups[item.strokes] = [];
        }
        groups[item.strokes].push(item);
    });

    Object.keys(groups).sort((a, b) => a - b).forEach(strokeNum => {
        const groupItems = groups[strokeNum];

        const blockHeader = document.createElement("div");
        blockHeader.className = "block-title";
        blockHeader.id = "secao-traco-" + strokeNum;
        blockHeader.innerHTML = `${strokeNum} ${strokeNum == 1 ? 'Traço' : 'Traços'} - ${groupItems.length}`;
        container.appendChild(blockHeader);

        const tableContainer = document.createElement("div");
        tableContainer.className = "table-container";

        const tableResponsive = document.createElement("div");
        tableResponsive.className = "table-responsive";

        const table = document.createElement("table");
        table.innerHTML = `
                    <thead>
                        <tr>
                            <th class="col-num" id="numerotexto">Nº</th>
                            <th class="col-char" id="radicaltexto">Radical</th>
                            <th class="col-vars" id="variantestexto">Variantes</th>
                            <th class="col-meaning">Significado / Notas</th>
                            <th class="col-status">Status</th>
                            <th class="col-gif">Animação</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

        const tbody = table.querySelector("tbody");

        groupItems.forEach(item => {
            const tr = document.createElement("tr");
            const tradTag = item.trad ? `<br><span class="trad-highlight">[TRADICIONAL: ${item.trad}]</span>` : "";

            const charEncoded = encodeURIComponent(item.char);
            const definitiveGifUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${charEncoded}-order.gif`;

            const savedStatus = statusCache[item.id] || "nenhum";
            let btnClass = "btn-status";
            let btnLabel = "Marcar";

            if (savedStatus !== "nenhum") {
                tr.classList.add("status-" + savedStatus);
                btnClass += " " + savedStatus;
                btnLabel = savedStatus === "estudo" ? "Em estudo" : "Aprendido";
            }

            tr.innerHTML = `
                        <td class="col-num">${item.id}</td>
                        <td class="col-char">${item.char}</td>
                        <td class="col-vars">${item.vars}</td>
                        <td class="col-meaning">
                            <strong>${item.meaning}</strong>
                            ${tradTag}
                        </td>
                        <td class="col-status">
                            <button class="${btnClass}" onclick="toggleStatus(${item.id}, this, this.parentElement.parentElement)">${btnLabel}</button>
                        </td>
                        <td class="col-gif">
                            <div class="gif-wrapper">
                                <img class="stroke-gif" src="${definitiveGifUrl}" alt="${item.char}" loading="lazy">
                            </div>
                        </td>
                    `;
            tbody.appendChild(tr);
        });

        tableResponsive.appendChild(table);
        tableContainer.appendChild(tableResponsive);
        container.appendChild(tableContainer);
    });
}

// Filtro inteligente reativo e insensível a acentos
searchInput.addEventListener("input", (e) => {
    const term = removerAcentos(e.target.value.toLowerCase().trim());

    const filtered = radicals.filter(item => {
        const idMatch = item.id.toString().includes(term);
        const charMatch = item.char.includes(term);
        const strokeMatch = item.strokes.toString() === term;
        const varsMatch = removerAcentos(item.vars.toLowerCase()).includes(term);
        const meaningMatch = removerAcentos(item.meaning.toLowerCase()).includes(term);
        const tradMatch = item.trad ? removerAcentos(item.trad.toLowerCase()).includes(term) : false;

        return idMatch || charMatch || strokeMatch || varsMatch || meaningMatch || tradMatch;
    });
    renderGroupedTable(filtered);
});

// Função para gerar os botões de 1 a 17 e dar a funcionalidade de scroll
function gerarBotoesAncora() {
    const containerBotoes = document.getElementById("botoes-tracos");
    if (!containerBotoes) return;

    for (let i = 1; i <= 17; i++) {
        const btn = document.createElement("button");
        btn.className = "btn-traco";
        btn.textContent = i;
        btn.title = `Ir para ${i} ${i === 1 ? 'traço' : 'traços'}`;
        
        btn.onclick = function() {
            const alvo = document.getElementById("secao-traco-" + i);
            if (alvo) {
                // Rola a página suavemente até o título da seção
                alvo.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                // Caso o radical não esteja visível (por causa de algum filtro da busca)
                alert(`A seção de ${i} traços não está visível no momento.`);
            }
        };
        
        containerBotoes.appendChild(btn);
    }
}

// Botão de Voltar ao Topo
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnTopo.classList.add("visivel");
    } else {
        btnTopo.classList.remove("visivel");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    btnTopo.classList.remove("visivel"); // some assim que clica
});

// Inicialização
renderGroupedTable(radicals);
atualizarContadores();
gerarBotoesAncora();
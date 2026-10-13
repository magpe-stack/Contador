/**
 * Contador - PWA Contador de Palavras e Caracteres em Tempo Real
 */

const textInput = document.getElementById('text-input');
const statWords = document.getElementById('stat-words');
const statChars = document.getElementById('stat-chars');
const statLines = document.getElementById('stat-lines');
const statSentences = document.getElementById('stat-sentences');
const btnCopy = document.getElementById('btn-copy');
const btnClear = document.getElementById('btn-clear');
const btnThemeToggle = document.getElementById('theme-toggle');
const toast = document.getElementById('toast');

// --- Função de Contagem em Tempo Real ---
function updateStats() {
  const text = textInput.value;

  // 1. Caracteres (total com espaços)
  const charsCount = text.length;

  // 2. Palavras (separa por espaços/quebras e filtra vazias)
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordsCount = words.length;

  // 3. Linhas (conta quebras de linha + 1 se houver texto)
  const linesCount = text === "" ? 0 : text.split(/\r\n|\r|\n/).length;

  // 4. Frases (conta pontuações finais comuns: ., !, ?)
  const sentences = text.match(/[\wá-úÁ-Ú]+[^.!?]*[.!?]+/g);
  const sentencesCount = sentences ? sentences.length : (text.trim() ? 1 : 0);

  // Atualiza a interface
  statWords.textContent = wordsCount;
  statChars.textContent = charsCount;
  statLines.textContent = linesCount;
  statSentences.textContent = sentencesCount;
}

// --- Copiar Texto (Mãozinha Aberta) ---
async function copyText() {
  const text = textInput.value;
  if (!text.trim()) {
    showToast("Não há texto para copiar.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Texto copiado para a área de transferência!");
  } catch (err) {
    textInput.select();
    document.execCommand('copy');
    showToast("Texto copiado!");
  }
}

// --- Limpar Texto (Mãozinha Fechada) ---
function clearText() {
  if (!textInput.value) return;
  textInput.value = "";
  updateStats();
  showToast("Texto limpo com sucesso!");
}

// --- Alternância de Tema ---
function initTheme() {
  const savedTheme = localStorage.getItem('contador-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('contador-theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  btnThemeToggle.querySelector('.icon-theme').textContent = theme === 'light' ? '☀️' : '🌙';
}

// --- Toast Feedback ---
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// --- Event Listeners ---
textInput.addEventListener('input', updateStats);
btnCopy.addEventListener('click', copyText);
btnClear.addEventListener('click', clearText);
btnThemeToggle.addEventListener('click', toggleTheme);

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateStats();
});

// --- Registro do Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.error('Falha ao registrar SW:', err));
  });
}

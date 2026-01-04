/**
 * Project: Technical Lifeline - App Logic
 * Description: The JS component responsible for rendering the decision tree,
 *              handling user interactions, and managing state.
 *              Works with the decision tree structure defined in script.js.
 * Programmer: Daniel Nguyen
 * Date: 01/02/2026
 */

const $ = sel => document.querySelector(sel);
const $all = sel => Array.from(document.querySelectorAll(sel));

const state = {
  history: [],
  current: null,
  //setting the default language
  language: 'javascript' 
};

function saveState() {
  try { 
    localStorage.setItem('tl_state', JSON.stringify({ current: state.current, history: state.history })); 
    localStorage.setItem('tl_lang', state.language);
  } 
  catch (e) {}
}

function loadState() {
  try {
    // Only restore language preference on load. We intentionally do NOT
    // auto-restore navigation state so the app always starts at the intro.
    const lang = localStorage.getItem('tl_lang');
    if (lang) state.language = lang;
  } 
  catch(e){}
}

function showIntro() {
  $('#intro').classList.remove('hidden');
  $('#question').classList.add('hidden'); $('#question').setAttribute('aria-hidden', 'true');
  $('#result').classList.add('hidden'); $('#result').setAttribute('aria-hidden', 'true');
  $('#back-btn').disabled = true;
}

function renderNode(nodeId) {
  const node = nodes[nodeId];
   if (!node) {
     showIntro(); 
     return; 
  }
  state.current = nodeId;
  saveState();

  if (node.question) {
    $('#intro').classList.add('hidden');
    $('#question').classList.remove('hidden'); $('#question').setAttribute('aria-hidden', 'false');
    $('#result').classList.add('hidden'); $('#result').setAttribute('aria-hidden', 'true');

    $('#question-title').textContent = localText(node.question);
    const $choices = $('#choices');
    $choices.innerHTML = '';
    node.options.forEach(opt => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = localText(opt.text);
      btn.onclick = () => {
        state.history.push(nodeId);
        renderNode(opt.next);
        $('#back-btn').disabled = false;
      };
      li.appendChild(btn);
      $choices.appendChild(li);
    });
    } 
    else if (node.result) {
    $('#intro').classList.add('hidden');
    $('#question').classList.add('hidden'); $('#question').setAttribute('aria-hidden', 'true');
    $('#result').classList.remove('hidden'); $('#result').setAttribute('aria-hidden', 'false');

    $('#result-title').textContent = localText(node.result.title);
    $('#result-body').innerHTML = localText(node.result.body);
    $('#result-actions').innerHTML = `<button class="btn" onclick="copyBody()">Copy suggested text</button>`;
    $('#back-btn').disabled = state.history.length === 0;
  } 
  else {
    showIntro();
  }
}

function copyBody() {
  const txt = $('#result-body').innerText || $('#result-body').textContent;
  navigator.clipboard?.writeText(txt).then(()=> alert('Copied!'), ()=> alert('Copy failed'));
}

function goBack() {
  if (!state.history.length) { 
    showIntro(); 
    return; 
  }
  const prev = state.history.pop();
  renderNode(prev);
  $('#back-btn').disabled = state.history.length === 0;
  saveState();
}

function resetAll() {
  state.history = []; state.current = null;
  // Clear navigation state but keep language preference
  localStorage.removeItem('tl_state');
  showIntro();
}

/* Initialize the web app: sets up the load state and hooks up event listeners */
function initApp() {
  // Language selector
  const langSelect = $('#language');
  // If a persisted language exists, ensure it is loaded
  loadState();
  // Set select to current language
  if (langSelect) {
    langSelect.value = state.language;
    langSelect.addEventListener('change', e => {
      state.language = e.target.value;
      saveState();
      // If a node is visible, re-render it to reflect language change
      if (state.current) renderNode(state.current);
    });
  }

  // hook starting buttons
  $all('[data-start]').forEach(btn => btn.addEventListener('click', e => {
    const key = e.currentTarget.dataset.start;
    const firstNode = key === 'git' ? 'git_intro' : 'general_intro';
    renderNode(firstNode);
  }));
  $('#back-btn').addEventListener('click', goBack);
  $('#reset-btn').addEventListener('click', resetAll);

  if (!state.current) { 
    showIntro(); 
  } 
  else { 
    renderNode(state.current); 
    $('#back-btn').disabled = state.history.length === 0;
  }
}

/* Returning localized text:
 * If item is object, return item[state.language] || item.javascript || first value
 * If string, return it as-is.
*/
function localText(item) {
  if (!item && item !== '') {
    return '';
  }
  if (typeof item === 'object') {
    if (typeof item[state.language] === 'string') {
      return item[state.language];
    }
    if (typeof item.javascript === 'string') {
      return item.javascript;
    }
    // depth-first search for first string leaf
    const stack = [item];
    while (stack.length) {
      const cur = stack.shift();
      for (const key in cur) {
        const val = cur[key];
        if (typeof val === 'string') return val;
        if (typeof val === 'object') stack.push(val);
      }
    }
    return String(item);
  }
  return String(item);
}

document.addEventListener('DOMContentLoaded', initApp);
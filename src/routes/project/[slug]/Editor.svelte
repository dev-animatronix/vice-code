<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import ace from 'ace-builds/src-noconflict/ace';

  // Import modes/langages que tu veux supporter
  import 'ace-builds/src-noconflict/mode-html';
  import 'ace-builds/src-noconflict/mode-css';
  import 'ace-builds/src-noconflict/mode-javascript';

  // Import thème
  import 'ace-builds/src-noconflict/theme-monokai';

  export let lang = 'html';
  export let value = '';

  let editorDiv;
  let editor;
  const dispatch = createEventDispatcher();

  const getMode = (lang) => {
    if (lang === 'html') return 'ace/mode/html';
    if (lang === 'css') return 'ace/mode/css';
    if (lang === 'js' || lang === 'javascript') return 'ace/mode/javascript';
    return 'ace/mode/text';
  };

  onMount(() => {
    editor = ace.edit(editorDiv, {
      mode: getMode(lang),
      theme: 'ace/theme/monokai',
      wrap: true,
      showPrintMargin: false,
      highlightActiveLine: true,
      showGutter: true,
      fontSize: '14px',
      // active line highlight
    });

    editor.setValue(value || '', -1);
    editor.session.setUseWorker(false);

    // Ecoute les changements et envoie l'event input
    editor.session.on('change', () => {
      const val = editor.getValue();
      value = val;
      dispatch('input', val);
    });

    // Style custom pour le gutter (compteur de lignes)
    editor.renderer.$gutterLayer.element.style.backgroundColor = '#222';
    editor.renderer.$gutterLayer.element.style.color = '#aaa';
    editor.renderer.scrollBarV.element.style.display = 'none'; // scrollbar verticale cachée
    editor.renderer.scrollBarH.element.style.display = 'none'; // scrollbar horizontale cachée
  });

  // Met à jour le mode si la langue change
  $: if (editor) {
    editor.session.setMode(getMode(lang));
  }

  // Met à jour la valeur si elle change de l'extérieur
  $: if (editor && editor.getValue() !== value) {
    editor.setValue(value, -1);
  }

  onDestroy(() => {
    editor?.destroy();
  });
</script>

<div class="container">
  <div class="header">
    <strong>{lang}</strong>
  </div>
  <div bind:this={editorDiv} class="editor"></div>
</div>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }

  .header {
    padding: 6px 10px;
    background-color: #111;
    color: #ddd;
    user-select: none;
  }

  .editor {
    flex-grow: 1;
  }

  /* Ace Editor overrides */
  :global(.ace_editor) {
    width: 100% !important;
    height: 100% !important;
    background-color: transparent !important;
    color: #f8f8f2 !important; /* texte blanc cassé */
    font-family: monospace !important;
  }

  :global(.ace_gutter) {
    background-color: #ffffff00 !important;
    color: #ccc !important;
  }
  :global(.ace_gutter-layer) {
    background-color: #ffffff08 !important;
    color: #ccc !important;
  }

  /* Cacher scrollbars */
  :global(.ace_scrollbar-v),
  :global(.ace_scrollbar-h) {
    display: none !important;
  }
</style>

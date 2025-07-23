<script>
  export let html = '';
  export let css = '';
  export let js = '';

  // Construire le srcdoc complet de l'iframe
  $: srcdoc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>${css}</style>
    </head>
    <body>
      <script>
        // Essayer de capturer erreurs JS dans l'iframe (optionnel)
        window.onerror = function(message, source, lineno, colno, error) {
          console.error("Erreur JS iframe:", message, source, lineno, colno, error);
        };
      <\/script>
      <script>${js}<\/script>
      ${html}
    </body>
    </html>
  `;
</script>

<style>
  :global(iframe) {
    border: none;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

<iframe
  sandbox="allow-scripts allow-same-origin"
  srcdoc={srcdoc}
  title="Live Preview"
></iframe>

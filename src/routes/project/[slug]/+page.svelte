<script>
  import { page } from '$app/stores';
  import { onMount, tick } from 'svelte';
  import { GetProject, EditProject, Me } from '$lib/api';
  import { error } from '@sveltejs/kit';
  import { goto } from '$app/navigation';

  import Editor from './Editor.svelte';
  import Preview from './Preview.svelte';
  import TopBar from './TopBar.svelte';

  let id;
  let project;
  let errormsg;

  let html;
  let css;
  let js;


  onMount( async () => {
    id = $page.params.slug;
    console.log('Page id :', id);
    const user = await Me();
    if (user == null) {
      goto('/login');
      return;
    }

    try {
      const res = await GetProject(id);
      project = res.project
      console.log(project);
      html = project.html
      css = project.css
      js = project.js
      return(project);
    } catch (e) {
      errormsg = JSON.parse(e.message)
      console.error(e);
    }
  });

  let timer;

  // Ce reactive statement s'exécute à chaque changement de html, css ou js
  $: if (html !== undefined || css !== undefined || js !== undefined) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      saveProject();
    }, 1500);
  }

  function saveProject() {
    console.log('Sauvegarde', project.id, html, js, css, project.name );
    EditProject(project.id, html, js, css, project.name);
  }

</script>

<svelte:head>
  <title>{project ? `${project.name} | Vice Code` : 'Chargement... | Vice Code'}</title>
</svelte:head>

<main class="h-screen w-screen max-h-screen p-3 grid grid-cols-[350px_auto] grid-rows-[48px_1fr_1fr_1fr] gap-3">
  {#if project}
    <div class="col-span-2 border border-base-300 card overflow-visible"><TopBar {project} /></div>
  	<div class="row-start-2 border border-base-300 card overflow-hidden"><Editor lang="html" bind:value={html} /></div>
    <div class="col-start-1 row-start-3 border border-base-300 card overflow-hidden"><Editor lang="css" bind:value={css} /></div>
    <div class="col-start-1 row-start-4 border border-base-300 card overflow-hidden"><Editor lang="javascript" bind:value={js} /></div>
    <div class="row-span-3 col-start-2 row-start-2 border border-base-300 card overflow-hidden z-0">
        <Preview {html} {css} {js} />
    </div>
  {:else if errormsg}
  	<p>Erreur : {errormsg.error}</p>
  {:else}
    <div class="skeleton col-span-2"></div>
  	<div class="skeleton row-start-2"></div>
    <div class="skeleton col-start-1 row-start-3"></div>
    <div class="skeleton col-start-1 row-start-4"></div>
    <div class="skeleton row-span-3 col-start-2 row-start-2"></div>
  {/if}
</main>
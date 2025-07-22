<script>
  import { ListProjects, Me, DeleteProject } from "$lib/api";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Item from "./Item.svelte";

  let projects = null;  // null au départ
  let error;

  onMount(async () => {
    const user = await Me();
    if (user == null) {
      goto('/login');
      return;
    }

    try {
      projects = await ListProjects();
      console.log(projects)
    } catch (e) {
      error = e.message;
    }
  });
</script>

<main class="min-h-screen flex justify-center pt-12">
  <div class="card shadow-sm max-w-4xl w-full space-y-4">
    <div class="flex justify-between items-center p-4">
      <h2 class="text-xl font-semibold">
        {#if projects?.projects?.length}
          Vous avez {projects.projects.length} projet{projects.projects.length > 1 ? 's' : ''}
        {:else}
          Aucun projet
        {/if}
      </h2>
      <button on:click={() => goto("/project")} class="btn btn-primary">
        + Créer un projet
      </button>
    </div>
    {#if error}
      <p class="text-red-600">{error}</p>
    {:else if projects && projects.projects}
      <ul class="list bg-base-100 rounded-box shadow-md border border-base-300">
        {#each projects.projects as project}
          <Item {project} />
        {/each}
      </ul>
    {:else}
      <span class="loading loading-spinner loading-lg m-4"></span>
    {/if}
  </div>
</main>


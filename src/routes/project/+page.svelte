<script>
  import { Me, CreateProject } from "$lib/api";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount( async () => {
    const user = await Me();
    if (user == null) {
      goto('/login');
      return;
    }

    let baseName = "Nouveau Projet";
    let i = 0;
    while(true) {
      let tryName = i === 0 ? baseName : `${baseName} ${i}`;
      try {
        const res = await CreateProject(tryName);
        console.log('Projet créé:', res);

        // Redirection vers la page projet avec l'id créé
        goto(`/project/${res.project.id}`);

        break; // Sortir de la boucle après redirection
      } catch(e) {
        console.error(e);
        if (e.status === 409) {
          i++;
        } else {
          console.error("Erreur non gérée:", e.message);
          break;
        }
      }
    }
  });
</script>

<main class="h-screen w-screen max-h-screen p-3 grid grid-cols-[350px_auto] grid-rows-[48px_1fr_1fr_1fr] gap-3">
    <div class="skeleton col-span-2"></div>
  	<div class="skeleton row-start-2"></div>
    <div class="skeleton col-start-1 row-start-3"></div>
    <div class="skeleton col-start-1 row-start-4"></div>
    <div class="skeleton row-span-3 col-start-2 row-start-2"></div>
</main>
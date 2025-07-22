<script>
  import { goto } from '$app/navigation';
  import { DeleteProject } from '$lib/api';
  export let project;
  let projectToDelete = null;
  let deletemodal;
  let success = false;
  let error = false;

  const handleDeleteProject = async (id) => {
    try {
        await DeleteProject(id)
        projectToDelete = null;
        success = true;
        setTimeout(() => {
            success = false;
        }, 3000);
    } catch(e) {
        console.log(e)
        error = e;
        setTimeout(() => {
            error = false;
        }, 3000);
    }
  }

</script>

{#if success}
  <div role="alert" class="alert alert-success fixed top-4 right-4 shadow-lg z-50">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Projet supprimé avec succès !</span>
  </div>
{/if}
{#if error != false}
<div role="alert" class="alert alert-error fixed top-4 right-4 shadow-lg z-50">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Erreur lors de la suppression du projet : {error}</span>
</div>
{/if}
<!-- svelte-ignore a11y_missing_attribute -->
<!-- svelte-ignore a11y_consider_explicit_label -->

<li class="list-row">
  <div class="text-lg align-middle">{project.name}</div>
  <div class="flex items-center space-x-4">
  {#if project.html?.trim()}
    <div class="badge badge-soft badge-html align-middle">HTML</div>
  {/if}
  {#if project.css?.trim()}
    <div class="badge badge-soft badge-css align-middle">CSS</div>
  {/if}
  {#if project.js?.trim()}
    <div class="badge badge-soft badge-js align-middle">JavaScript</div>
  {/if}</div>
  <button on:click={() => goto(`/project/${project.id}`)} class="btn btn-square btn-ghost">
    <svg class="size-[1.2em]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"  fill="currentColor" stroke="none"></path> </g></svg>
  </button>
  <button on:click={() => { projectToDelete = project.id; deletemodal.showModal(); }} class="btn btn-square btn-soft btn-error">
    <svg class="size-[1.2em]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </button>
</li>

<dialog bind:this={deletemodal} class="modal">
  <div class="modal-box w-75">
    <h3 class="text-xl font-bold">Souhaitez vous vraiment supprimer ce projet</h3>
    <p class="py-4">Une fois le projet supprimé il n'est plus possible de le récupérer</p>
    <div class="modal-action">
      <form method="dialog">
        <button on:click={() => handleDeleteProject(projectToDelete)} class="btn btn-error">supprimer</button>
        <button class="btn">Fermer</button>
      </form>
    </div>
  </div>
</dialog>

<style>
  .badge-html {
    --badge-color: #E34F26; /* orange vif HTML */
    --badge-fg: #E34F26;
  }
  
  .badge-css {
    --badge-color: #1572B6; /* bleu violet CSS */
    --badge-fg: #1572B6;
  }
  
  .badge-js {
    --badge-color: #F7DF1E; /* jaune JS */
    --badge-fg: #F7DF1E;
  }
</style>
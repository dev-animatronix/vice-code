<script>
  import { Me, uploadpp, RenameUser, DeleteUser } from "$lib/api";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let user;

  let file;
  let fileInput;
  let success = false;
  let error = false;
  let newUsername = '';

  onMount(async () => {
    user = await Me();
    if (user == null) {
      goto('/login');
      return;
    }
  });

  async function handleUpload() {
    error = '';
    success = '';
    if (!file) {
      error = 'Veuillez sélectionner un fichier';
      setTimeout(() => {
          error = false;
      }, 3000);
    }
    try {
      const res = await uploadpp(file);
      success = 'Avatar mis à jour avec succès !';
      setTimeout(() => {
          success = false;
      }, 3000);
      return;
    } catch (err) {
      error = err.message;
      setTimeout(() => {
        error = false;
      }, 3000);
    }
  }

  async function handleUsernameChange() {
    const trimmedName = newUsername.trim();
    if (trimmedName === '') {
      error = 'Le nom d’utilisateur ne peut pas être vide.';
      setTimeout(() => {
          error = false;
      }, 3000);
      return;
    }
    if (trimmedName === user.username) {
      error = 'Le nouveau nom d’utilisateur est identique à l’actuel.';
      setTimeout(() => {
          error = false;
      }, 3000);
      return;
    }

    try {
      const res = await RenameUser(trimmedName); // ✅ appel réel à l'API
      success = res.message || 'Nom d’utilisateur mis à jour.';
      user.username = trimmedName;
      setTimeout(() => {
          success = false;
      }, 3000);
    } catch (err) {
      error = err.message;
    }
  }
</script>

<svelte:head>
  <title>Paramètres | Vice Code</title>
</svelte:head>

<!-- svelte-ignore a11y_label_has_associated_control -->
<!-- svelte-ignore a11y_missing_attribute -->
<main class="min-h-screen flex justify-center pt-12">
    <div class="card shadow-sm max-w-4xl w-full space-y-4">
        <h1>Paramètres</h1>
        {#if user}
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="http://localhost:3000/uploads/{user.email}.png" />
              </div>
            </div>
        {:else}
            <div class="skeleton h-24 w-24 shrink-0 rounded-full"></div>
        {/if}
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Changer la photo de profil</legend>
          <input type="file" bind:this={fileInput} on:change={() => { file = fileInput.files[0]; }} accept=".jpg,.jpeg,.png,.gif" class="file-input" />
          <label class="label">Taille max 5Mo</label>
          <button class="btn btn-primary" on:click={handleUpload}>Changer</button>
        </fieldset>
        {#if user}
            <h1>Nom actuel : {user.username}</h1>
        {:else}
            <div class="skeleton w-17 h-5"></div>
        {/if}
        <div class="join">
          <div>
            <label class="input validator join-item">
              {#if user}
                  <input bind:value={newUsername} type="text" min="3" max="30" placeholder={user.username} required />
              {:else}
                  <div class="skeleton w-15 h-5"></div>
              {/if}
            </label>
            <div class="validator-hint hidden">Must be between 3 and 30 char</div>
          </div>
          <button class="btn btn-primary" on:click={handleUsernameChange}>Mettre a jour</button>
        </div>
    </div>
</main>


{#if success != false}
  <div role="alert" class="alert alert-success fixed top-4 right-4 shadow-lg z-50">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>{success}</span>
  </div>
{/if}
{#if error != false}
<div role="alert" class="alert alert-error fixed top-4 right-4 shadow-lg z-50">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Erreur : {error}</span>
</div>
{/if}
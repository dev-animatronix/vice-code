<script>
    import { onMount } from 'svelte';
    import { Register, Me } from "$lib/api";
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let username = '';
    let error = null;
    const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';

    onMount(async () => {
        const user = await Me();
        if (user != null) {
            goto('/dashboard');
        }
    });

    async function handleRegister(event) {
        event.preventDefault();
        try {
            await Register(email, password, username);
            const user = await Me();
            if (user) {
                goto('/dashboard');
            }
        } catch (e) {
            error = e;
        }
    }
</script>


<main class="min-h-screen flex items-center justify-center">
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Register</legend>

  <label class="label" for="email">Email</label>
  <input bind:value={email} name="email" type="email" class="input validator" required placeholder="Email" />
  <div class="validator-hint hidden">Enter a valid email.</div>

  <label class="label" for="username">Username</label>
  <input bind:value={username} type="text" name="username" class="input validator" required placeholder="Nom d'utilisateur" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers and dash." />
  <p class="validator-hint hidden">
    Must contain between 3 and 30 characters
    <br/>Only letters, numbers and dash.
  </p>

  <label class="label" for="password">Password</label>
  <input bind:value={password} type="password" name="password" class="input validator" required placeholder="Mot de passe" minlength="5" 
  pattern={passwordPattern}
  title="Must be more than 8 characters, including a number, a lowercase letter, and an uppercase letter" />
  <p class="validator-hint hidden">
    Must be more than 8 characters, 
    <br />including a number, 
    <br />a lowercase letter, 
    <br />and an uppercase letter
  </p>

  <button on:click={handleRegister} class="btn btn-primary mt-4">S'inscrire</button>
  <button on:click={() => goto('/login')} class="link">Ou se connecter</button>

    {#if error}
      <p class="text-red-600 mt-2">{error}</p>
    {/if}
</fieldset></main>
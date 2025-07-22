<script>
    import { onMount } from 'svelte';
    import { Login, Me } from "$lib/api";
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let username = '';
    let error = null;

    onMount(async () => {
        const user = await Me();
        if (user != null) {
            goto('/dashboard');
        }
    });

    async function handleLogin(event) {
        event.preventDefault();
        try {
            await Login(email, password);
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
  <legend class="fieldset-legend">Login</legend>

  <label class="label" for="email">Email</label>
  <input bind:value={email} name="email" type="email" class="input validator" required placeholder="Email" />

  <label class="label" for="password">Password</label>
  <input bind:value={password} type="password" name="password" class="input validator" required placeholder="Password" minlength="5" />

  <button on:click={handleLogin} class="btn btn-primary mt-4">Login</button>
  <button on:click={() => goto('/register')} class="link">Ou s'inscrire</button>

    {#if error}
      <p class="text-red-600 mt-2">{error}</p>
    {/if}
</fieldset></main>
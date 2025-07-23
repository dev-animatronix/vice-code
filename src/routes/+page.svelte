<svelte:head>
  <title>Vice Code</title>
</svelte:head>

<!-- svelte-ignore a11y_missing_attribute -->
<main>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Votre code, partout, tout le temps, pour toujours</h1>
        <p class="py-6">
          Un éditeur HTML/CSS/JS en ligne, privé, sans pub, sans limites, et gratuit.
        </p>
        <a href="/login" class="btn btn-primary">Commencer</a>
      </div>
    </div>
  </div>

  <section class="w-screen flex flex-row gap-2 py-11 justify-center" id="about">
    <div class="card card-border bg-base-100 w-70">
      <div class="card-body">
        <h2 class="card-title">
          <svg class="size-[1.2em]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4H11ZM9 20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20H9ZM15 4C15 3.44772 14.5523 3 14 3C13.4477 3 13 3.44772 13 4H15ZM13 20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20H13ZM6.22354 11.8978L6.48236 10.9319L6.22354 11.8978ZM4.10222 9.77646L5.06815 9.51764L4.10222 9.77646ZM19.8978 9.77646L18.9319 9.51764L19.8978 9.77646ZM17.7765 11.8978L17.5176 10.9319L17.7765 11.8978ZM17.7765 4.10222L17.5176 5.06815L17.7765 4.10222ZM19.8978 6.22354L18.9319 6.48236L19.8978 6.22354ZM6.22354 4.10222L6.48236 5.06815L6.22354 4.10222ZM4.10222 6.22354L5.06815 6.48236L4.10222 6.22354ZM4.10222 13.7765L3.1363 14.0353L4.10222 13.7765ZM6.22354 15.8978L5.96472 16.8637H5.96472L6.22354 15.8978ZM19.8978 13.7765L20.8637 14.0353V14.0353L19.8978 13.7765ZM17.7765 15.8978L17.5176 14.9319L17.7765 15.8978ZM6.22354 19.8978L5.96472 20.8637H5.96472L6.22354 19.8978ZM4.10222 17.7765L5.06815 17.5176L5.06815 17.5176L4.10222 17.7765ZM17.7765 19.8978L18.0353 20.8637H18.0353L17.7765 19.8978ZM19.8978 17.7765L20.8637 18.0353V18.0353L19.8978 17.7765ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9V7ZM7.01 9C7.56228 9 8.01 8.55228 8.01 8C8.01 7.44772 7.56228 7 7.01 7V9ZM17 7C16.4477 7 16 7.44772 16 8C16 8.55228 16.4477 9 17 9V7ZM17.01 9C17.5623 9 18.01 8.55228 18.01 8C18.01 7.44772 17.5623 7 17.01 7V9ZM9 4V20H11V4H9ZM13 4V20H15V4H13ZM8 5H16V3H8V5ZM16 11H8V13H16V11ZM8 11C7.00565 11 6.70464 10.9914 6.48236 10.9319L5.96472 12.8637C6.50545 13.0086 7.13441 13 8 13V11ZM3 8C3 8.86559 2.99141 9.49455 3.1363 10.0353L5.06815 9.51764C5.00859 9.29536 5 8.99435 5 8H3ZM6.48236 10.9319C5.79218 10.7469 5.25308 10.2078 5.06815 9.51764L3.1363 10.0353C3.50617 11.4156 4.58436 12.4938 5.96472 12.8637L6.48236 10.9319ZM19 8C19 8.99435 18.9914 9.29536 18.9319 9.51764L20.8637 10.0353C21.0086 9.49455 21 8.86559 21 8H19ZM16 13C16.8656 13 17.4946 13.0086 18.0353 12.8637L17.5176 10.9319C17.2954 10.9914 16.9944 11 16 11V13ZM18.9319 9.51764C18.7469 10.2078 18.2078 10.7469 17.5176 10.9319L18.0353 12.8637C19.4156 12.4938 20.4938 11.4156 20.8637 10.0353L18.9319 9.51764ZM16 5C16.9944 5 17.2954 5.00859 17.5176 5.06815L18.0353 3.1363C17.4946 2.99141 16.8656 3 16 3V5ZM21 8C21 7.13441 21.0086 6.50545 20.8637 5.96472L18.9319 6.48236C18.9914 6.70464 19 7.00565 19 8H21ZM17.5176 5.06815C18.2078 5.25308 18.7469 5.79218 18.9319 6.48236L20.8637 5.96472C20.4938 4.58436 19.4156 3.50617 18.0353 3.1363L17.5176 5.06815ZM8 3C7.13441 3 6.50545 2.99141 5.96472 3.1363L6.48236 5.06815C6.70464 5.00859 7.00565 5 8 5V3ZM5 8C5 7.00565 5.00859 6.70464 5.06815 6.48236L3.1363 5.96472C2.99141 6.50545 3 7.13441 3 8H5ZM5.96472 3.1363C4.58436 3.50617 3.50617 4.58436 3.1363 5.96472L5.06815 6.48236C5.25308 5.79218 5.79218 5.25308 6.48236 5.06815L5.96472 3.1363ZM10 15H8V17H10V15ZM16 15H14V17H16V15ZM3 12C3 12.8656 2.99141 13.4946 3.1363 14.0353L5.06815 13.5176C5.00859 13.2954 5 12.9944 5 12H3ZM8 15C7.00565 15 6.70464 14.9914 6.48236 14.9319L5.96472 16.8637C6.50545 17.0086 7.13441 17 8 17V15ZM3.1363 14.0353C3.50617 15.4156 4.58436 16.4938 5.96472 16.8637L6.48236 14.9319C5.79218 14.7469 5.25308 14.2078 5.06815 13.5176L3.1363 14.0353ZM19 12C19 12.9944 18.9914 13.2954 18.9319 13.5176L20.8637 14.0353C21.0086 13.4946 21 12.8656 21 12H19ZM16 17C16.8656 17 17.4946 17.0086 18.0353 16.8637L17.5176 14.9319C17.2954 14.9914 16.9944 15 16 15V17ZM18.9319 13.5176C18.7469 14.2078 18.2078 14.7469 17.5176 14.9319L18.0353 16.8637C19.4156 16.4938 20.4938 15.4156 20.8637 14.0353L18.9319 13.5176ZM16 19H8V21H16V19ZM21 16V8H19V16H21ZM5 16V8H3V16H5ZM8 19C7.00565 19 6.70464 18.9914 6.48236 18.9319L5.96472 20.8637C6.50545 21.0086 7.13441 21 8 21V19ZM3 16C3 16.8656 2.99141 17.4946 3.1363 18.0353L5.06815 17.5176C5.00859 17.2954 5 16.9944 5 16H3ZM6.48236 18.9319C5.79218 18.7469 5.25308 18.2078 5.06815 17.5176L3.1363 18.0353C3.50617 19.4156 4.58436 20.4938 5.96472 20.8637L6.48236 18.9319ZM16 21C16.8656 21 17.4946 21.0086 18.0353 20.8637L17.5176 18.9319C17.2954 18.9914 16.9944 19 16 19V21ZM19 16C19 16.9944 18.9914 17.2954 18.9319 17.5176L20.8637 18.0353C21.0086 17.4946 21 16.8656 21 16H19ZM18.0353 20.8637C19.4156 20.4938 20.4938 19.4156 20.8637 18.0353L18.9319 17.5176C18.7469 18.2078 18.2078 18.7469 17.5176 18.9319L18.0353 20.8637ZM7 9H7.01V7H7V9ZM17 9H17.01V7H17V9Z" fill="currentColor"></path> </g></svg>
          Gratuit
        </h2>
        <p>Utilise Vice Code à vie sans dépenser un centime, promis, ça ne changera jamais.</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
    <div class="card card-border bg-base-100 w-70">
      <div class="card-body">
        <h2 class="card-title">
          <svg class="size-[1.2em]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55C14.354 14.148 15 13.15 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.15.647 2.148 1.596 2.652l-2.518 6.55C4.504 19.675 2 16.13 2 12 2 6.477 6.477 2 12 2z"></path> </g> </g></svg>
          Libre
        </h2>
        <p>Le code est accessible, modifiable, et tu peux contribuer — c’est ton outil, pas une boîte.</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div> 
    <div class="card card-border bg-base-100 w-70">
      <div class="card-body">
        <h2 class="card-title">
          <svg class="size-[1.2em]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Privé
        </h2>
        <p>Chaque projet est privé par défaut, personne d’autre ne peut y accéder.</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
    <div class="card card-border bg-base-100 w-70">
      <div class="card-body">
        <h2 class="card-title">
          <svg class="size-[1.2em]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.261 1.03462C12.6971 1.15253 13 1.54819 13 1.99997V8.99997H19C19.3581 8.99997 19.6888 9.19141 19.8671 9.50191C20.0455 9.8124 20.0442 10.1945 19.8638 10.5038L12.8638 22.5038C12.6361 22.8941 12.1751 23.0832 11.739 22.9653C11.3029 22.8474 11 22.4517 11 22V15H5C4.64193 15 4.3112 14.8085 4.13286 14.498C3.95452 14.1875 3.9558 13.8054 4.13622 13.4961L11.1362 1.4961C11.3639 1.10586 11.8249 0.916719 12.261 1.03462ZM6.74104 13H12C12.5523 13 13 13.4477 13 14V18.301L17.259 11H12C11.4477 11 11 10.5523 11 9.99997V5.69889L6.74104 13Z" fill="currentColor"></path> </g></svg>
          Aperçu en temps réel
        </h2>
        <p>Chaque modification s’affiche direct, sans clique, sans délai.</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>  
  </section>





  <section class="flex flex-col items-center justify-center h-[75vh] gap-15" id="pricing">
    <h1 class="text-5xl font-bold">Prix :</h1>
    <div class="flex items-center justify-center gap-2 flex-row">
      <div class="card card-border w-96 bg-base-100 shadow-sm">
        <div class="card-body">
          <div class="flex justify-between">
            <h2 class="text-3xl font-bold">Starter</h2>
            <span class="text-xl">0€/mois</span>
          </div>
          <ul class="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Pas de limites de sauvegardes</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Projets privés</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Code Live</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Pas de traqueurs</span>
            </li>
          </ul>
          <div class="mt-6">
            <a href="/login" class="btn btn-primary btn-block">C'est parti</a>
          </div>
        </div>
      </div>
      <div class="card card-border w-96 bg-base-100 shadow-sm">
        <div class="card-body">
          <span class="badge badge-xs badge-warning">Most Popular</span>
          <div class="flex justify-between">
            <h2 class="text-3xl font-bold">Pro</h2>
            <span class="text-xl">0€/mois</span>
          </div>
          <ul class="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Toujours pas de pub</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Projets privés mais mieux</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Aperçu en temps réel</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Toujours pas de traqueurs</span>
            </li>
          </ul>
          <div class="mt-6">
            <a href="/login" class="btn btn-primary btn-block">Je veux ça !</a>
          </div>
        </div>
      </div>
      <div class="card card-border w-96 bg-base-100 shadow-sm">
        <div class="card-body">
          <div class="flex justify-between">
            <h2 class="text-3xl font-bold">infinity</h2>
            <span class="text-xl">0€/mois</span>
          </div>
          <ul class="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Toujours plus de projets gratuits</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Projets encore plus privés</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Code live, tout le temps</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span>Sauvegarde auto</span>
            </li>
          </ul>
          <div class="mt-6">
            <a href="/login" class="btn btn-primary btn-block">Je prend !</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="hero bg-base-200 h-[75vh]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Prêt a créer sans limites ?</h1>
        <br />
        <a href="/login" class="btn btn-primary">Commencer</a>
      </div>
    </div>
  </div>

  <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
    <aside>
      <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1024" height="1024" fill="#f5f5f5"/>
        <rect x="137" y="737" width="750" height="150" fill="#161616"/>
      </svg>
      <p>
        Vice Code
        <br />
        Éditeur de code libre, privé, et sans pub. Pour les devs qui veulent juste coder
        <br />
        &copy; Animatronix 2025. Tous droits réservés.
        <br />
        Fait avec ❤️ par un dev français.
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">APP</h6>
      <a href="/#about" class="link link-hover">A propos</a>
      <a href="/#pricing" class="link link-hover">Prix</a>
      <a href="https://github.com/dev-animatronix/vice-code" class="link link-hover">Source</a>
    </nav>
    <nav>
      <h6 class="footer-title">Créateur</h6>
      <a class="link link-hover">Qui suis je</a>
      <a class="link link-hover">Contact</a>
      <a href="https://github.com/dev-animatronix/" class="link link-hover">Github</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal shit</h6>
      <a href="/Terms" class="link link-hover">Conditions d'utilisation</a>
      <a href="/policy" class="link link-hover">Politique de confidentialité</a>
      <a href="/credits" class="link link-hover">Crédits</a>
    </nav>
  </footer>
</main>
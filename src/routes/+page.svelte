<script>
  import { goto } from '$app/navigation';

  import github from '$lib/images/github.svg';
  import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
  import { firestore } from '../firebase';

  const gamesRef = collection(firestore, 'games');

  async function newGame() {
    const game = await addDoc(gamesRef, { finished: false, creationTimestamp: serverTimestamp() });
    goto(game.id);
  }
</script>

<div class="main h-screen overflow-y-auto flex flex-col min-h-screen text-center">
  <div class="max-w-lg mx-auto flex-1">
    <h1 class="text-5xl font-bold uppercase font-roboto text-green-300 opacity-80">Chameleon</h1>
    <div>
      <button
        class="m-1 text-green-900 py-2.5 uppercase text-3xl font-oswald center font-bold"
        on:click={newGame}
      >
        New game
      </button>
    </div>
  </div>

  <div
    class="mx-auto w-10 inline-block m-1 text-green-900 uppercase text-xl font-oswald center font-bold"
  >
    <a href="/stats"> Stats </a>
  </div>
  <div class="mx-auto w-10 inline-block">
    <a href="https://github.com/lucianpalaghe/chameleon" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</div>

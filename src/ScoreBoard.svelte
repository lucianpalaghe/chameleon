<script>
  import { each } from 'svelte/internal';
  import Player from './Player.svelte';
  import { fly } from 'svelte/transition';
  import chameleon from '$lib/images/chameleon-plus-2.png'; 

  let newPlayer = '';
  let players = [];

  function addPlayer() {
    if (newPlayer) {
      players = [...players, { id: players.length++, name: newPlayer }];
      newPlayer = '';
    }
  }

  function removePlayer(id) {
    const index = players.findIndex((player) => player.id === id);
    players.splice(index, 1);
    players = players;
  }

  function removeAllPlayers() {
    players = [];
  }

  function resetScore() {
    players.forEach((player) => {
      player.score = 0;
    });

    players = players;
  }
</script>

<div>
  <ul>
    {#each players as player}
      <div transition:fly>
        <Player bind:score={player.score} {...player} on:remove={removePlayer} />
      </div>
    {/each}
  </ul>

  <div class="flex flex-col justify-between items-center text-2xl font-oswald m-2 center">
    <form class="main rounded-lg p-1" on:submit|preventDefault={addPlayer}>
      <input class="main uppercase align-middle" bind:value={newPlayer} placeholder="Alt cameleon" />
      <button
        class="w-8 h-8 align-middle"
        on:click={addPlayer}
      >
      <img src={chameleon} alt="chameleon" class="">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
          />
        </svg> -->
      </button>
    </form>
    <div>
      <button class="m-1 text-green-900 py-2.5" on:click={removeAllPlayers}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button class="m-1 text-green-900 py-2.5" on:click={resetScore}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  .main {
    background-color: #f8fce7;
  }
</style>

<script>
  import Player from './Player.svelte';
  import { fly } from 'svelte/transition';

  import {
    doc,
    updateDoc,
    serverTimestamp,
    query,
    orderBy,
    collection,
    addDoc
  } from 'firebase/firestore';
  import { firestore } from './firebase';
  import { collectionData, docData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';

  export let gameId;

  const gameRef = doc(collection(firestore, 'games'), gameId);
  const gameData = docData(gameRef);

  const playersRef = collection(firestore, 'games', gameId, 'players');
  const playersQuery = query(playersRef, orderBy('creationTimestamp'));
  const playerList = collectionData(playersQuery, { idField: 'id' }).pipe(startWith([]));

  let newPlayer = '';

  async function addPlayer() {
    if ($gameData.finished === true) {
      return;
    }

    if (newPlayer) {
      await addDoc(playersRef, { name: newPlayer, score: 0, creationTimestamp: serverTimestamp() });
      newPlayer = '';
    }
  }

  async function endGame() {
    await updateDoc(doc(collection(firestore, 'games'), gameId), {
      finished: true
    });
  }

  async function updateScore(event) {
    if ($gameData.finished) {
      console.log('game ended');
      return;
    }

    const { id, score } = event.detail;
    await updateDoc(doc(playersRef, id), {
      score: score
    });
  }
</script>

{#if playerList}
  <ul>
    {#each $playerList as player}
      <div transition:fly>
        <Player {...player} bind:disabled={$gameData.finished} on:updateScore={updateScore} />
      </div>
    {/each}
  </ul>
{/if}

<div class="flex flex-col justify-between items-center text-2xl font-oswald m-2 center">
  {#if !$gameData?.finished}
    <form class="component rounded-lg p-1" on:submit|preventDefault={addPlayer}>
      <input
        disabled={$gameData?.finished}
        class="component uppercase align-middle"
        bind:value={newPlayer}
        placeholder={$playerList.length === 0 ? 'Adauga un cameleon' : 'Alt cameleon'}
      />
    </form>
    <div>
      <button
        class="m-1 text-green-900 py-2.5 uppercase text-xl font-oswald center font-bold"
        on:click={endGame}
      >
        End game
      </button>
    </div>
  {/if}

  {#if $gameData?.finished}
    <div class="m-1 text-green-900 py-2.5 uppercase text-3xl font-oswald center font-bold">
      Game over!
    </div>
  {/if}
</div>

<style>
  .component {
    background-color: #f8fce7;
  }
</style>

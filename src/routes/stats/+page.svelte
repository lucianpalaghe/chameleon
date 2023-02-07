<script>
  import github from '$lib/images/github.svg';
  import { firestore } from '../../firebase';
  import { getDocs, collection, orderBy, limit } from 'firebase/firestore';
  import { query, where } from 'firebase/firestore';

  export let data;

  async function fetchData() {
    const coll = collection(firestore, 'games');
    let q = query(
      coll,
      where('finished', '==', true),
      orderBy('creationTimestamp', 'desc'),
      limit(5)
    );
    const querySnapshot = await getDocs(q);

    let gamesData = [];
    for (const doc of querySnapshot.docs) {
      const playersColl = collection(firestore, 'games', doc.id, 'players');
      const topPlayerQuery = query(playersColl, orderBy('score', 'desc'), limit(1));
      const topPlayerQuerySnapshot = await getDocs(topPlayerQuery);
      gamesData.push({
        gameId: doc.id.substring(0, 5),
        topPlayer: topPlayerQuerySnapshot.docs[0] ? topPlayerQuerySnapshot.docs[0].data().name: '?',
        topPlayerScore: topPlayerQuerySnapshot.docs[0] ? topPlayerQuerySnapshot.docs[0]?.data().score : '?'
      });
    }

    // console.log(JSON.stringify(gamesData));
    return gamesData;
  }

  let promise = fetchData();
</script>

<div class="main h-screen overflow-y-auto flex flex-col min-h-screen">
  <div class="max-w-lg mx-auto flex-1">
    <h1 class="text-5xl font-bold uppercase font-roboto text-green-300 opacity-80 text-center">
      Chameleon
    </h1>

    <div class="component flex justify-between items-center text-xl rounded-lg px-2 m-2">
      <div class="overflow-ellipsis truncate">
        <span class="font-oswald uppercase font-semibold">Games being played</span>
      </div>

      <div class="flex-none">
        <span class="font-oswald uppercase font-semibold">{data.gamesOngoing}</span>
      </div>
    </div>

    <div class="component flex justify-between items-center text-xl rounded-lg px-2 m-2">
      <div class="overflow-ellipsis truncate">
        <span class="font-oswald uppercase font-semibold">Games finished</span>
      </div>

      <div class="flex-none">
        <span class="font-oswald uppercase font-semibold">{data.gamesFinished}</span>
      </div>
    </div>

    {#await promise}
      <div class="component flex justify-between items-center text-xl rounded-lg px-2 m-2">
        <p>Loading stats</p>
      </div>
    {:then gamesData}
      <div class="component items-center text-xl rounded-lg px-2 m-2">
        <div class="overflow-ellipsis truncate">
          <span class="font-oswald uppercase font-semibold">Last {gamesData.length} games</span>
        </div>

        <table class="table-auto border-separate">
          <tr>
            <th class="pr-10"> Game </th>
            <th class="pr-10"> Player </th>
            <th> Score </th>
          </tr>
          {#each gamesData as game}
            <tr>
              <td>{game.gameId}</td>
              <td>{game.topPlayer}</td>
              <td>{game.topPlayerScore}</td>
            </tr>
          {/each}
        </table>
        <ul />
      </div>
    {/await}
  </div>

  <div class="mx-auto w-10 inline-block">
    <a href="https://github.com/lucianpalaghe/chameleon" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</div>

<style>
  .component {
    background-color: #f8fce7;
  }
</style>

<script>
  import ScoreBoard from '../../ScoreBoard.svelte';
  import github from '$lib/images/github.svg';

  export let data;
</script>

<div class="main h-screen overflow-y-auto flex flex-col min-h-screen">
  <div class="max-w-lg mx-auto flex-1">
    <h1 class="text-5xl font-bold uppercase font-roboto text-green-300 opacity-80 text-center">
      Chameleon
    </h1>

    <ScoreBoard gameId={data.gameId} />
  </div>

  <div class="mx-auto w-10 inline-block">
    <a href="https://github.com/lucianpalaghe/chameleon" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="GitHub" />
    </a>
  </div>
</div>

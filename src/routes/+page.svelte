<script>
  import ScoreBoard from '../ScoreBoard.svelte';
  import github from '$lib/images/github.svg'; 
</script>

<div class="main h-screen overflow-y-auto flex flex-col min-h-screen">
  <div class="max-w-lg mx-auto flex-1">
    <h1 class="text-5xl font-bold uppercase font-roboto text-green-300 opacity-80 text-center">
      Chameleon
    </h1>

    <ScoreBoard />
  </div>

  <div class="mx-auto w-10 inline-block">
    <a href="https://github.com/lucianpalaghe/chameleon">
      <img src={github} alt="GitHub" />
    </a> 
  </div>
</div>

<style>
  .main {
    border-style: solid;
    border-width: 0.5rem;
    border-color: #d9ff2d;
    background: repeating-conic-gradient(#67ec88 0% 25%, #d9ff2d 0% 50%) 50% / 20px 20px;
  }
</style>

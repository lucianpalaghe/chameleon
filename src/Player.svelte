<script>
  export let name;
  export let score = 0;
</script>

<div class="main flex justify-between items-center text-3xl rounded-lg px-2 m-2">
  <div class="overflow-ellipsis truncate">
    <span class="font-oswald uppercase font-semibold">{name}</span>
  </div>

  <div class="flex-none">
    <button
      on:click={() => (score -= 1)}
      aria-label="Decrease the counter by one"
      class="m-1 text-green-900 font-medium text-sm py-2.5 text-center inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
    </button>

    <span class="font-oswald uppercase font-semibold">{score}</span>

    <button
      on:click={() => (score += 1)}
      aria-label="Increase the counter by one"
      class="m-1 text-green-900 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  </div>
</div>

<style>
  .main {
    background-color: #f8fce7;
  }
</style>

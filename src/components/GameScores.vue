<template>
  <div class="scores-container">
    <div class="score you">
      <p>{{ currentPlayer === "X" ? "X" : "O" }} (You)</p>
      <h3>{{ youScore }}</h3>
    </div>
    <div class="score ties">
      <p>Ties</p>
      <h3>{{ tiesScore }}</h3>
    </div>
    <div class="score cpu">
      <p>{{ currentPlayer === "X" ? "O" : "X" }} (CPU)</p>
      <h3>{{ cpuScore }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPlayer", "youScore", "tiesScore", "cpuScore"],
};
</script>

<style lang="postcss" scoped>
.scores-container {
  @apply flex flex-row items-center gap-4 w-full;

  .score {
    @apply flex flex-col rounded-[1.25rem] px-12 h-20 justify-center text-center flex-1;

    p {
      @apply font-semibold text-blue-dark text-sm;
    }

    h3 {
      @apply font-bold text-blue-dark text-3xl;
    }

    &.you {
      @apply bg-blue-extra;
    }
    &.ties {
      @apply bg-blue-light;
    }
    &.cpu {
      @apply bg-[#EAE2B7];
    }
  }
}
</style>

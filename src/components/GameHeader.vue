<template>
  <div class="turn-container">
    <div class="wrapper">
      <img
        v-if="currentPlayer === 'X'"
        src="../assets/cross-turn.svg"
        alt="Cross turn"
      />
      <img
        v-else-if="currentPlayer === 'O'"
        src="../assets/circle-turn.svg"
        alt="Circle turn"
      />
      <h2>TURN</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPlayer"],
};
</script>

<style lang="postcss" scoped>
.turn-container {
  @apply bg-blue border-b-8 border-blue-dark rounded-[1.25rem] mb-8;
}

.wrapper {
  @apply flex flex-row py-4 px-9;
}

h2 {
  @apply text-xl uppercase font-bold text-blue-dark pl-2;
}
</style>

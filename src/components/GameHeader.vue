<template>
  <div class="turn-container">
    <div class="flex flex-row py-4 px-9">
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
  @apply bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-[1.25rem] mb-8;
}

h2 {
  @apply text-xl uppercase font-bold text-[#0D1B2A] pl-2;
}
</style>

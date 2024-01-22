<template>
  <div class="game-container">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="grid-col">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        :class="{ 'mb-4': colIndex !== row.length - 1 }"
        class="cell"
        @click="playMove(rowIndex, colIndex)"
        @mouseover="setHovered(rowIndex, colIndex)"
        @mouseleave="clearHovered"
      >
        <div class="img-icon">
          <img
            v-if="cell === 'X' && !winner && !isTie"
            src="../assets/Cross.svg"
            alt="Cross"
          />
          <img
            v-else-if="cell === 'O' && !winner && !isTie"
            src="../assets/Circle.svg"
            alt="Circle"
          />
          <img
            v-else-if="
              currentPlayer === 'X' &&
              hoveredRow === rowIndex &&
              hoveredCol === colIndex
            "
            src="../assets/Cross-outline.svg"
            alt="Cross outline"
          />
          <img
            v-else-if="
              currentPlayer === 'O' &&
              hoveredRow === rowIndex &&
              hoveredCol === colIndex
            "
            src="../assets/Circle-outline.svg"
            alt="Circle outline"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "winner",
    "board",
    "isTie",
    "currentPlayer",
    "hoveredRow",
    "hoveredCol",
    "playMove",
    "setHovered",
    "clearHovered",
  ],
};
</script>

<style lang="postcss" scoped>
.game-container {
  @apply grid grid-cols-3 gap-4 my-6;
}
.cell {
  @apply relative flex items-center w-[calc(60vh_/_3)] h-[calc(60vh_/_3)] bg-blue border-b-8 border-blue-dark rounded-3xl;

  &:hover {
    @apply cursor-pointer;
  }
  .img-icon {
    @apply block mx-auto my-0;
  }
}
</style>

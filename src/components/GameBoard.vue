<template>
  <div class="game-container">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="grid-col">
      <div v-for="(_, colIndex) in row" :key="colIndex" class="cell"></div>
    </div>
  </div>
</template>

<script>
import { board } from "../constants";
export default {
  data() {
    return {
      board,
    };
  },
};
</script>

<style scoped>
.game-container {
  @apply h-screen w-[100vh] grid bg-emerald-700 grid-cols-3;
}

.cell {
  @apply w-[calc(100vh_/_3)] h-[calc(100vh_/_3)] outline outline-2 outline-teal-900;
}
</style>

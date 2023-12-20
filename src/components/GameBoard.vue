<template>
  <div class="center-container">
    <div class="game-container">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="grid-col">
        <div v-for="(_, colIndex) in row" :key="colIndex" class="cell"></div>
      </div>
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
.center-container {
  @apply flex min-h-screen justify-center items-center;
}

.game-container {
  @apply grid bg-emerald-700 grid-cols-3;
}

.cell {
  @apply w-[calc(90vh_/_3)] h-[calc(90vh_/_3)] outline outline-8 outline-teal-900;
}
</style>

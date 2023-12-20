<template>
  <div class="center-container">
    <div class="game-container">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="grid-col">
        <div
          v-for="(_, colIndex) in row"
          :key="colIndex"
          :class="{ 'mb-4': colIndex !== row.length - 1 }"
          class="cell"
        ></div>
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
  @apply grid  grid-cols-3 gap-4;
}

.cell {
  @apply w-[calc(60vh_/_3)] h-[calc(60vh_/_3)] bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-3xl;
}
</style>

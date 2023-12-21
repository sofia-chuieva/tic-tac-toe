<template>
  <div class="center-container">
    <div class="game-container">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="grid-col">
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          :class="{ 'mb-4': colIndex !== row.length - 1 }"
          class="cell"
          @click="handleCellClick(rowIndex, colIndex)"
        >
          <div class="img-icon">
            <img v-if="cell === 'X'" src="../assets/Cross.svg" alt="Cross" />
            <img v-if="cell === 'O'" src="../assets/Circle.png" alt="Circle" />
          </div>
        </div>
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
  methods: {
    handleCellClick(rowIndex, colIndex) {
      // Update the cell value to 'X'
      this.$set(this.board[rowIndex], colIndex, "X");
      // this.board[rowIndex][colIndex] = "X";
    },
  },
};
</script>

<style lang="postcss" scoped>
.center-container {
  @apply flex min-h-screen justify-center items-center;
}

.game-container {
  @apply grid  grid-cols-3 gap-4;
}

.cell {
  @apply relative flex items-center w-[calc(60vh_/_3)] h-[calc(60vh_/_3)] bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-3xl;

  .img-icon {
    @apply block mx-auto my-0;
  }
}
</style>

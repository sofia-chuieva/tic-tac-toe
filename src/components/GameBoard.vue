<template>
  <div class="center-container">
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
    <div>
      <p v-if="winner">{{ winner }} wins!</p>
      <p v-else-if="isTie">It's a tie</p>
    </div>
  </div>
</template>

<script>
import { board } from "../constants";

export default {
  data() {
    return {
      board,
      winner: null,
      isTie: false,
      gameover: false,
      currentPlayer: "X",
      hoveredRow: null,
      hoveredCol: null,
    };
  },
  methods: {
    setHovered(row, col) {
      this.hoveredRow = row;
      this.hoveredCol = col;
    },

    clearHovered() {
      this.hoveredRow = null;
      this.hoveredCol = null;
    },
    checkTie() {
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
          if (!board[i][k]) {
            return false;
          }
        }
      }
      return true;
    },
    checkWin() {
      const player = this.currentPlayer;

      for (let i = 0; i < 3; i++) {
        if (this.board[i].every((cell) => cell === player)) {
          return true;
        }
        if (this.board.every((row) => row[i] === player)) {
          return true;
        }
      }

      // Check diagonals
      if (
        this.board[0][0] === player &&
        this.board[1][1] === player &&
        this.board[2][2] === player
      ) {
        return true;
      }
      if (
        this.board[0][2] === player &&
        this.board[1][1] === player &&
        this.board[2][0] === player
      ) {
        return true;
      }

      return false;
    },
    playMove(row, col) {
      if (!this.board[row][col] && !this.winner) {
        this.board[row][col] = this.currentPlayer;
        if (this.checkWin()) {
          this.winner = this.currentPlayer;
        } else if (this.checkTie()) {
          this.isTie = true;
        } else {
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
          setTimeout(() => {
            this.cpuMove();
          }, 1000);
        }
      }
    },
    cpuMove() {
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
          if (!this.board[i][k]) {
            this.board[i][k] = "O";
            if (this.checkWin()) {
              this.winner = "O";
            } else if (this.checkTie()) {
              this.isTie = true;
            } else {
              this.currentPlayer = "X";
            }
            return;
          }
        }
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.center-container {
  @apply flex min-h-screen justify-center items-center flex-col;
}

h2 {
  @apply text-xl uppercase text-[#0D1B2A] pl-2;
}

.turn-container {
  @apply bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-[1.25rem] mb-8;
}

.game-container {
  @apply grid  grid-cols-3 gap-4;
}

.cell {
  @apply relative flex items-center w-[calc(60vh_/_3)] h-[calc(60vh_/_3)] bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-3xl;

  &:hover {
    @apply cursor-pointer;
  }
  .img-icon {
    @apply block mx-auto my-0;
  }
}
</style>

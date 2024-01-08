<template>
  <div class="center-container">
    <GameHeader :currentPlayer="currentPlayer"></GameHeader>
    <GameBoard
      :winner="winner"
      :board="board"
      :isTie="isTie"
      :currentPlayer="currentPlayer"
      :hoveredRow="hoveredRow"
      :hoveredCol="hoveredCol"
      :playMove="playMove"
      :setHovered="setHovered"
      :clearHovered="clearHovered"
    ></GameBoard>
    <div>
      <p v-if="winner">{{ winner }} wins!</p>
      <p v-else-if="isTie">It's a tie</p>
    </div>
  </div>
</template>

<script>
import { board } from "../constants";
import GameBoard from "./GameBoard.vue";
import GameHeader from "./GameHeader.vue";

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
  components: { GameHeader, GameBoard },
};
</script>

<style lang="postcss" scoped>
.center-container {
  @apply flex min-h-screen justify-center items-center flex-col;
}
</style>

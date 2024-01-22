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
    <GameScores
      :currentPlayer="currentPlayer"
      :isTie="isTie"
      :youScore="youScore"
      :tiesScore="tiesScore"
      :cpuScore="cpuScore"
    ></GameScores>
    <ModalMenu @chosen-mark="updateCurrentPlayer"></ModalMenu>
    <Modal :winner="winner" :isTie="isTie"></Modal>
  </div>
</template>

<script>
import { board } from "../constants";
import GameBoard from "./GameBoard.vue";
import GameHeader from "./GameHeader.vue";
import ModalMenu from "./ModalMenu.vue";
import Modal from "./Modal.vue";
import GameScores from "./GameScores.vue";

export default {
  data() {
    return {
      board,
      winner: null,
      isTie: false,
      gameover: false,
      hoveredRow: null,
      hoveredCol: null,
      currentPlayer: "",
      youScore: 0,
      tiesScore: 0,
      cpuScore: 0,
    };
  },
  methods: {
    incrementScore(player) {
      if (player === "X") {
        this.youScore += 1;
      } else if (player === "O") {
        this.cpuScore += 1;
      }
    },
    updateCurrentPlayer(player) {
      this.currentPlayer = player;
    },
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
    checkWin(player) {
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
        if (this.checkWin(this.currentPlayer)) {
          this.winner = this.currentPlayer;
        } else if (this.checkTie()) {
          this.isTie = true;
        } else {
          setTimeout(() => {
            this.cpuMove();
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
          }, 1000);
        }
      }
    },
    cpuMove() {
      const cpuMark = this.currentPlayer === "X" ? "O" : "X";
      for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
          if (!this.board[i][k]) {
            this.board[i][k] = cpuMark;
            if (this.checkWin(cpuMark)) {
              this.winner = cpuMark;
            } else if (this.checkTie()) {
              this.isTie = true;
            }
            // Update currentPlayer only after checking for win or tie
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
            return;
          }
        }
      }
    },
  },
  components: { GameHeader, GameBoard, ModalMenu, Modal, GameScores },
};
</script>

<style lang="postcss" scoped>
.center-container {
  @apply flex min-h-screen justify-center items-center flex-col;
}
</style>

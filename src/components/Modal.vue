<template>
  <div :class="{ modal: true, flex: isVisible, hidden: !isVisible }">
    <div class="modal-content">
      <h1 v-if="isTie">It's a tie</h1>
      <h1 v-else :class="winner === 'X' ? 'x' : 'o'">
        <img
          :src="
            winner === 'X' ? 'src/assets/Cross.svg' : 'src/assets/Circle.svg'
          "
          :alt="winner"
        />
        takes the round
      </h1>
      <div class="modal-btns">
        <button @click="quitGame" class="quit-btn">Quit</button>
        <button @click="nextRound" class="next-round-btn">Next Round</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["winner", "isTie"],
  data() {
    return {
      isVisible: false,
    };
  },
  watch: {
    winner(newValue) {
      if (newValue === "X" || newValue === "O" || this.isTie) {
        this.isVisible = true;
      }
    },
    isTie(newValue) {
      if (newValue || this.winner === "X" || this.winner === "O") {
        this.isVisible = true;
      }
    },
  },
  methods: {
    nextRound() {
      setTimeout(() => {
        this.isVisible = false;
        this.$emit("next-round");
      });
    },
    quitGame() {
      this.isVisible = false;
      this.$emit("quit-game");
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal {
  @apply fixed inset-0 z-[9999] items-center justify-center h-screen bg-black bg-opacity-50 transition-opacity duration-300 ease-out will-change-[opacity];
  .modal-content {
    @apply bg-blue border-b-8 border-[#23375a] rounded-[1.25rem] flex flex-col px-10 h-56 justify-center text-center mx-auto;

    .modal-btns {
      @apply flex flex-row gap-3 justify-center items-center;

      button {
        &.quit-btn {
          @apply bg-blue-extra rounded-[1.125rem] leading-5 py-3 px-5 h-14 border-b-8 text-blue-dark uppercase text-xl border-[#0085b1] font-bold;
        }
        &.next-round-btn {
          @apply bg-[#EAE2B7] rounded-[1.125rem] leading-5 py-3 px-5 h-14 border-b-8 text-blue-dark uppercase text-xl border-[#97906A] font-bold;
        }
      }
    }
    h1 {
      @apply text-white text-3xl justify-center items-center gap-6 flex uppercase font-bold mb-8;

      img {
        @apply w-16 h-16;
      }

      &.x {
        @apply text-blue-extra;
      }
      &.o {
        @apply text-[#EAE2B7];
      }
    }
    p {
      @apply text-white text-4xl uppercase font-bold;
    }
  }
}
</style>

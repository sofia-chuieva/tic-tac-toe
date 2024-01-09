<template>
  <div class="modal-mask">
    <div class="choice-container">
      <h1>PICK PLAYER’S MARK</h1>
      <div
        :class="{
          'choice-options': true,
          o: currentPlayer === 'O',
          x: currentPlayer === 'X',
        }"
      >
        <div class="choice x" @click="setMark('X')">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4.07754C19.2482 19.3508 23.6127 23.7225 23.8889 23.9992"
              stroke="#0D1B2A"
              stroke-width="8"
              stroke-linecap="round"
            />
            <path
              d="M4.11105 23.9216C19.3592 8.64838 23.7238 4.27669 24 4"
              stroke="#0D1B2A"
              stroke-width="8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="choice o" @click="setMark('O')">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM7.91259 15C7.91259 18.9143 11.0857 22.0874 15 22.0874C18.9143 22.0874 22.0874 18.9143 22.0874 15C22.0874 11.0857 18.9143 7.91259 15 7.91259C11.0857 7.91259 7.91259 11.0857 7.91259 15Z"
              fill="#0D1B2A"
            />
          </svg>
        </div>
      </div>
      <p>REMEMBER: X GOES FIRST</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentPlayer"],
  methods: {
    setMark(mark) {
      this.$emit("chosen-mark", mark);
    },
  },
};
</script>

<style lang="postcss" scoped>
.choice-container {
  @apply bg-[#415a77] border-b-8 border-[#0d1b2a] rounded-[1.25rem] flex flex-col px-4 h-52 justify-evenly text-center;

  h1 {
    @apply uppercase font-bold text-[#0D1B2A] text-2xl;
  }

  p {
    @apply uppercase text-[#0D1B2A] text-base;
  }

  .choice-options {
    @apply flex bg-[#0D1B2A] relative items-center justify-center h-16 p-2 rounded-xl;

    &.o {
      &::after {
        @apply translate-x-1/2;
      }

      .choice.o svg path {
        @apply fill-[#0D1B2A];
      }
    }

    &.x {
      &::after {
        @apply -translate-x-1/2;
      }

      .choice.x svg path {
        @apply stroke-[#0D1B2A];
      }
    }

    &::after {
      @apply content-[""] absolute z-10 bg-[#A9BCD0] rounded-xl top-2 bottom-2 w-[calc(50%-8px)] transition-transform duration-300 ease-in-out transform will-change-transform;
    }

    .choice {
      @apply flex-1 h-full flex items-center justify-center cursor-pointer z-20 transition-[background-color] duration-200 ease-out;
    }

    .choice.o svg path {
      @apply fill-[#A9BCD0] transition-[fill] duration-200 ease-in-out will-change-[fill] delay-100;
    }

    .choice.x svg path {
      @apply stroke-[#A9BCD0] transition-[fill] duration-200 ease-in-out will-change-[fill] delay-100;
    }
  }
}
</style>

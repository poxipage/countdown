<script lang="ts">
  import type { State } from "poxi";
  import type { Todo } from "./state";
  export let todo: State<Todo>;
</script>

<div
  class="todo {$todo.completed
    ? 'bg-success text-success-content'
    : 'bg-primary text-primary-content'}"
>
  <input type="checkbox" bind:checked={$todo.completed} />
  <div contenteditable bind:textContent={$todo.description} />
  <button on:click={todo.deleteThis}>x</button>
</div>

<style>
  .todo {
    @apply p-4 m-3 rounded-xl flex gap-2 items-center;
  }
  div[contenteditable] {
    @apply flex-grow outline-none;
  }
  input {
    @apply checkbox;
  }
  button {
    content: "x";
  }
</style>

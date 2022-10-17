<script lang="ts">
  import { getCountdown } from "./state";

const countDownTime = getCountdown()

let days = 0
let hours = 0
let minutes = 0
let seconds = 0

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = $countDownTime - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:{days};"></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:{hours};"></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:{minutes};"></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:{seconds};"></span>
    </span>
    sec
  </div>
</div>

<style>
</style>

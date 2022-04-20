<template>
  <div :class="$style.main" @click="toggle()">
    <span :class="{topin: expanded === 1, topout: expanded === 0}" />
    <span :class="{midin: expanded === 1, midout: expanded === 0}" />
    <span :class="{botin: expanded === 1, botout: expanded === 0}"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'HamburgerButton',
  data() {
    return {
      expanded: -1,
    };
  },
  methods: {
    toggle() {
      if (this.expanded === 1) {
        this.$emit('off');
        this.expanded = 0;
      } else {
        this.$emit('on');
        this.expanded = 1;
      }
    },
  },
});
</script>

<style>
.topin, .topout, .midin, .midout, .botin, .botout {
  animation-duration: 500ms;
  animation-fill-mode: forwards;
}

.topin {
  animation-name: topIn;
}

.topout {
  animation-name: topOut;
}

.midin {
  animation-name: midIn;
}

.midout {
  animation-name: midOut;
}

.botin {
  animation-name: botIn;
}

.botout {
  animation-name: botOut;
}

@keyframes topIn {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(1rem) rotate(45deg);
  }
}

@keyframes topOut {
  0% {
    transform: translateY(1rem) rotate(45deg);
  }
  100% {
    transform: translateY(0rem) rotate(0deg);
  }
}

@keyframes midIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes midOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes botIn {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-1rem) rotate(135deg);
  }
}

@keyframes botOut {
  0% {
    transform: translateY(-1rem) rotate(135deg);
  }
  100% {
    transform: translateY(0rem) rotate(0deg);
  }
}
</style>

<style module lang="scss">
.main {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0.5rem;

  span {
    display: block;
    background-color: $white;
    width: 2.5rem;
    height: 1px;
  }
}
</style>

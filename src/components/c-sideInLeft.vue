<template>
  <div ref="left" :class="{sideLeft: visible, hidden: !visible}">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  name: 'sideInLeftComponent',
  data () {
    return {
      visible: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (!this.visible) {
        var top = this.$refs.left.getBoundingClientRect().top
        this.visible = (top + 100) < window.innerHeight
      }
    }
  }
}
</script>

<style>
.hidden {
  opacity: 0;
}

.sideLeft {
  animation: sideLeft 2s;
  opacity: 1;
}

@keyframes sideLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

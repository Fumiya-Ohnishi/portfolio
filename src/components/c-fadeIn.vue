<template>
  <div ref="top" :class="{top: visible, hidden: !visible}">
    <slot v-show="visible"></slot>
  </div>
</template>

<script>
export default {
  name: 'fadeInComponent',
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
        var top = this.$refs.top.getBoundingClientRect().top
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

.top {
  animation: top 3s;
  opacity: 1;
}

@keyframes top {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

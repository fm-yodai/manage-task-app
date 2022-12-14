<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">Delete</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true
    },
    listIndex: {
      required: true
    }
  },
  methods: {
    removeList () {
      if (confirm('majide kesu??')) {
        this.$store.dispatch('removeList', { title: this.title })
      }
    }
  }
}
</script>
<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <list v-for="(item, index) in $store.state.taskLists"
              :key="item.id"
              :title="item.title"
              :listIndex="index"
        />
        <list-add />
      </div>
    </main>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import ListAdd from '@/components/ListAdd.vue'

export default {
  name: 'BoardComponent',
  components: {
    ListAdd,
    List
  }
}

</script>

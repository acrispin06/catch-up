<script>
export default {
  name: "article-card",
  props: {
    article: null,
  },
} 

</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt="article.title" :src="article.urlToImage">
    </template>
    <template #title>
      <p>{{ article.title }}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :image="article.source.urlToLogo"
                     :aria-label="article.source.name" shape="circle"></pv-avatar>
        </span>
        <span class="flex align-items-center justify-content-center">
          {{ article.source.name }}
        </span>
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ article.description }}
      </p>
    </template>
    
    <template #footer>
      
    </template>
  </pv-card>
</template>

<style scoped>

</style>
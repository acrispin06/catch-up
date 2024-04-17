<script>
import {NewsApiService} from "@/components/news/service/news-api.service.js";

export default {
  name: "side-menu",
  props: {
    visible: Boolean
  },
  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    };
  },
  created() {
    this.newsApi.getSources()
      .then(response => {
        this.sources = response.data.sources;
        this.sources.map(source => source.urlToLogo = this.newsApi.getUrlToLogo(source));
        console.log('data: ');
        console.log(response.data.sources);
      })
      .catch(e => this.errors.push(e));
  },
  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    }
  }
}
</script>

<template>
</template>

<style scoped>
</style>
<script>
import {NewsApiService} from "@/components/news/service/news-api.service.js";
import UnavailableContent from "@/components/news/components/unavailable-content.component.vue";
import MainContent from "@/components/news/components/main-content.component.vue";
import FooterContent from "@/components/news/components/footer-content.component.vue";
import SideMenu from "@/components/news/components/side-menu.component.vue";
import LanguageSwitcher from "@/components/news/components/language-switcher.component.vue";

export default{
  name: "App",
  components: {LanguageSwitcher, FooterContent, UnavailableContent, MainContent, SideMenu},
  data(){
    return {
      articles: [],
      errors: [],
      newsApi: new NewsApiService(),
      sidebarVisible: false
    };
  },
  created() {
    this.getArticlesForSource('bbc-news');
  },
  methods: {
    //fetch articles for a given source
    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
        .then(response => {
          this.articles = response.data.articles;
          console.log(response.data.articles);
        })
        .catch(e => this.errors.push(e));
    },
    //fetch articles for selected source with logo url
    getArticlesForSourceWithUrl(source){
      this.newsApi.getArticlesForSource(source.id)
        .then(response => {
          this.articles = response.data.articles;
          this.articles.map(article => article.source.urlToLogo = source.urlToLogo);
          console.log(response.data.articles);
        })
        .catch(e => this.errors.push(e));
    },
    //on source selected
    setSource(source){
      this.getArticlesForSourceWithUrl(source);
      this.toggleSidebar();
    },
    toggleSidebar(){
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}



</script>

<template>
  <div class="w-full">
    <div>
      <pv-menubar class="sticky bg-primary">
        <template #start>
          <pv-button label="CatchUp" icon="pi pi-bars" @click="toggleSidebar"></pv-button>
          <side-menu v-model:visible="sidebarVisible" v-on:source-selected="setSource"></side-menu>
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>
    <div>
      <main-content v-if="errors" :articles="articles"></main-content>
      <unavailable-content v-else :articles="errors"></unavailable-content>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>

</style>

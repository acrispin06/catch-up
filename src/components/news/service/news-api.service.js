import axios from 'axios';
import {LogoApiService} from "@/components/shared/service/logo-api.service.js";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class NewsApiService {
    apiKey = 'e4c098137b86437ab652cd9a19101dda';
    logoApi = new LogoApiService();

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }
}
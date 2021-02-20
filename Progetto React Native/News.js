import {articles_url , api_key, country} from './Config';

export async function getArticles(category='general') {
  try {
    let articles = await fetch (`${articles_url}?country=${country}&category=${category}&apiKey=${api_key}`);
    let result = await articles.json();
    articles=null;
    return result.articles;
  }
  catch (error) {
    throw error;
  }

}

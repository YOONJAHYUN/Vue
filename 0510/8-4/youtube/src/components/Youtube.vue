<template>
  <div><input type="text" @keydown.enter="youtubeSearch">
  <div ><iframe :src="imgSrc" frameborder="0"></iframe>
    <p>{{this.title}}</p></div>
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
name : 'YoutubeVue',
data(){
    return {
      videioList: [],
      imgSrc:null,
      title:null,
    }
  },
  methods: {
    youtubeSearch(event) {
      const keyWord = event.target.value
      console.log(keyWord)
      const params = {
        type: "video",
        q: keyWord,
        key: "AIzaSyAB3Vcvz6ziMJ9FzUaonMZkS6hpyyOerMM",
        part: "snippet",
      }
      axios({
        method:'get',
        url: "https://www.googleapis.com/youtube/v3/search",
        params,
      }).then((response) => {
        this.videioList = response.data.items[0]
        console.log(this.videioList)
        const id = response.data.items[0].id.videoId
        this.imgSrc = `https://www.youtube.com/embed/${id}`
        console.log(this.imgSrc)

        this.title = response.data.items[0]['snippet']['title']
      }).catch((err)=> console.log(err))
    }
  },
  created() {
    // youtubeSearch()

  }
}
</script>

<style>

</style>
<!--
<template>
  <div>
    <div class="mb-3">
      <!-- <router-link :to="{ name: 'ArticleList' }">
        <button class="btn btn-dark text-secondary">글 목록</button>
      </router-link> 
    </div>
    <div class="jumbotron">
      <h2>{{ article.title }}</h2>
      <hr>
      <div class="text-right"><small>작성일: {{ article.created_at | moment('YYYY-MM-DD') }}</small></div>
      <div class="text-right"><small>작성자: {{ article.user }}</small></div>
      <br>
      <p>{{ article.content }}</p>
    </div>
    <ul v-if="comments" class="jumbotron">
      <Comment
        v-for="(comment, idx) in comments"
        :key="idx"
        :comment="comment"
      />
    </ul>
    <ul v-else>
      아직 댓글이 없습니다.
    </ul>
    <CommentForm @write-comment="writeComment"/>
  </div>
</template>
-->


<template>
  <div>
    <template id="article-content">
    <section class="grid">
      <h2>{{ $route.query.article.title }}</h2>
      <p>
        <br>
        <b>Username:</b> {{ $route.query.article.user_name }}
        <br>
        <b>Date:</b> {{ $route.query.article.created_at | moment("YYYY-MM-DD") }}
        <br>
        <b>Content:</b> {{ $route.query.article.content }}
        <br>
      </p>

      <br>
      <router-link v-bind:to="'/community'">Back</router-link>

    </section>
  </template>

        <comments 
        
          :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
          :comments="comments"
          :current_user="current_user"
          @submit-comment="submitComment"

        ></comments>
    </div>
</template> 

<script> 
import axios from 'axios'
import Vue from 'vue'
import vueMoment from 'vue-moment'
import Comment from '@/components/Comment.vue'
// import CommentForm from '@/components/CommentForm.vue'

Vue.use(vueMoment)

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

// export default {
//   components: {
//     Comment,
//     CommentForm,
//   },
//   name: 'ArticleDetail',
//   data: function () {
//     return {
//       article: [],
//       comments: [],
//     }
//   },
//   methods: {
//     setToken: function () {
//       const token = localStorage.getItem('jwt')
//       const config = {
//         headers: {
//           Authorization: `JWT ${token}`
//         }
//       }
//       return config
//     },
//     readArticle: function () {
//       // const article_id = this.$route.params.article_id
//       axios.get(`${SERVER_URL}/community/${article_id}`, this.setToken())
//         .then(response => {
//           this.article = response.data
//         })
//         .catch(error => console.log(error))
//     },
//     readComments(articleId) {
//       // const article_id = this.$route.params.article_id
//       axios.get(`${SERVER_URL}/community/comments`, this.setToken())
//         .then(response => {
//           this.comments = response.data.filter(comment => comment.article === articleId)
//         })
//         .catch(error => console.log(error))      
//     },
//     writeComment(articleId) {
//       this.readComments(articleId)
//     }
//   },
//   created: function () {
//     this.readArticle()
//     this.readComments()
//     console.log('created')
//   },
// }
// </script>


export default {
    name: 'ArticleDetail',
      components: {
    Comments
  },
    props: {
        article: Object,
        // comments: Object,
        // current_user: Object,
        // comments_wrapper_classes: Object,

    },
    created() {
      this.userName = localStorage.getItem("user")
    },
    data() {
    return {
      
      creator: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: 'exampleCreator'
      },
      // username으로 받을수있게 설정 및 delete 마무리
      current_user: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: this.userName
      },
      comments: [
        {
          id: 1,
          user: 'example',
          avatar: 'http://via.placeholder.com/100x100/a74848',
          text: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        },
        {
          id: 2,                            
          user: 'example1',
          avatar: 'http://via.placeholder.com/100x100/2d58a7',
          text: 'lorem ipsum dolor',
        },
        {
          id: 3,                            
          user: 'example2',
          avatar: 'http://via.placeholder.com/100x100/36846e',
          text: 'lorem ipsum dolor again',
        },
      ]
    }
  },
  methods: {

    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },

    submitComment: function() {
      if (this.content) {
        const articleId = this.$route.params.article_id
        const commentItem = {
          content: this.content,
        }
        axios.post(`${SERVER_URL}/community/community/${articleId}/comments/`, commentItem, this.setToken())
          .then(() => this.$emit('submit-comment'))
          .catch(error => console.log(error.response))
        this.content = ''




      this.comments.push({
        id: this.comments.length + 1,
        user: this.current_user.user,
        avatar: this.current_user.avatar,
        text: content
      });
    }
  }
}
</script>


<style>
.comments-start {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}

.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 600px;
}

.comments-header {
  background-color: #C8C8C8;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}

.comments-header .comments-stats span {
  margin-left: 10px;
}

.post-owner {
  display: flex;
  align-items: center;
}

.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}

.post-owner .username {
  margin-left: 5px;
}

.post-owner .username > a {
  color: #333;
}
</style>
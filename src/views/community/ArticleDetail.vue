<template>
  <div id="articledetail">
    <main id="movie" class="grid">
    <template >
    <section>
      <h1><b>Article</b> Detail</h1>
      <section>
        <table>
          <thead>
          <tr class='textstyle'>
            <th>User Name</th>
            <th>Date</th>
            <th>Content</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{{ $route.query.article.user_name }}</td>
              <td>{{ $route.query.article.created_at | moment("YYYY-MM-DD") }}</td>
              <td>{{ $route.query.article.content }}</td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-main" v-bind:to="'/community'">
        Back
        </router-link>
      </section>
  </section>
  </template>

  <table>
    <thead>
      <tr>
        <th>UserName</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in hiComments" :key="comment.id" :comment="comment">
        <td>{{ comment.user_name }}</td>
        <td>{{ comment.content }}</td>
      </tr>
    </tbody>
  </table>

  <div class="comments">
  <div :class="comments_wrapper_classes">
    <!-- <div v-for="comment in hiComments" :key="comment.id" :comment="comment">
      {{ comment.user_name }}
      {{ comment.content }}
    </div> -->
      <CommentForm @write-comment="writeComment"/>
  </div>
  </div>



  </main>
  </div>

</template>

<script>
import axios from 'axios'
import CommentForm from '@/components/CommentForm.vue'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ArticleDetail',
  components: {
    CommentForm,
  },

  props: {
    article: Object
  },

  data: function () {
    return {
      comments: []
    }
  },

  computed: {
    hiComments: function () {
      return this.comments
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
    getComments: function () {
      const config = this.setToken()
      const article = this.$route.query.article
      axios.get(`${SERVER_URL}/community/${article.id}/comment_list/`, config)
        .then(response => {
          this.comments = response.data
        })
        .catch(error => console.log(error))
    },
    writeComment(){
      this.getComments()
    }
  },
  created: function () {
    this.getComments()
  }
}
</script>

<style lang="scss">

#movie {
  
}

#articledetail {
  width: 70rem;
  margin: 3rem auto;
  padding: 5rem;
  border-radius: 0.3rem;
  background: rgb(255, 245, 224);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.10),
              0 0 4rem rgba(0, 0, 0, 0.03);
              
  section { width: 100%; }
}
table {
  width: 100%;
  margin: 2rem 0 4rem 0;
  border-spacing: 0;
  td, th {
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
  }
  th {
    padding: 2.0rem 1.0rem;
    text-align: center;
    font-size: 15px;
  }
  td {
    padding: 1.8rem 1.0rem;
    transition: all 0.3s ease;
    .btn { display: inline; }
  }
  tr:hover td { background: rgba(0, 0, 0, 0.03); }
}

.btn {
  display: block;
  width: 100%;
  margin: 2rem 0 2rem 0;
  padding: 1rem 2rem;  
  color: #111;
  background: transparent;
  border: 0.1rem solid #111;
  outline: 0;
  border-radius: 0.3rem;
  
  font: inherit;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  user-select: none;
  
  transition: all 0.25s ease;
  
  &:visited { color: #111; }
  &:hover, &:focus {
    border: 0.1rem solid #f04;
    color: #f04; 
  }
  
  &.btn-main {
    border: 0;
    color: #fff;
    background: #44a;
    &:visited { color: #fff; }
    &:hover, &:focus { background: #f04; }
  }
}



.comments {
    margin-top: 20px;
    padding: 20px;
    padding-top: 0;
}

.comments-wrapper {
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;
}


.custom-scrollbar::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar
{
    width: 8px;
    background-color: #fff;
}

.custom-scrollbar::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}


/* Reply component */
.reply {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #EBEBEB;
    border-radius: 30px;
    padding: 5px 10px;
    overflow: hidden;
}

.reply .avatar {
    position: absolute;
}

.reply .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
}

.reply .reply--text {
    min-height: 40px;
    padding: 10px 10px 10px 55px;
    margin-right: 10px;
    border: 0;
    color: #333;
    width: 100%;
    outline: 0;
    background-color: transparent;
    box-shadow: none;
}

.reply input.reply--text:valid {
    margin-right: 71px;
}

.reply input.reply--text:valid + .reply--button {
    right: 10px;
}

.reply .reply--button {
    position: absolute;
    right: -100px;
    border: 1px solid rgb(145,99,65);
    background-color: transparent;
    color: rgb(145,99,65);
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 15px;
    line-height: 1.5;
    border-radius: 30px;
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, right 0.25s ease-in-out;
    outline: 0;
}

.reply .reply--button:hover {
    color: #fff;
    background-color:rgb(122, 83, 54);
}

.reply .reply--button:focus,
.reply .reply--button:active {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

hr {
    margin-top: 10px;
    margin-bottom: 10px;
}




</style>
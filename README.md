# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

Back-end - https://github.com/mishamilovidov/graphql-lyrical

### Used queries:
```

query getSongs {
  songs {
    id
    title
  }
}



query getSong($id: ID!) {
  song(id: $id) {
    id
    title
    lyrics {
      id
      content
      likes
    }
  }
}

mutation addLyric($id: ID, $content: String) {
  addLyricToSong(content: $content, songId: $id) {
    id
    title
    lyrics {
      id
      likes
      content 
    }
  }
}


mutation likeLyric($id: ID){
	likeLyric(id:$id){
		id
    likes
  }
}

mutation createSong($title: String){
	addSong(title: $title){
		id
    title
  }
}

mutation deleteSong($id: ID) {
  deleteSong(id: $id) {
    id
    title
  }
}

```

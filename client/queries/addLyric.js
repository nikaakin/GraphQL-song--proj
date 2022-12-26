import { gql } from "@apollo/client";

export default gql`
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
`;

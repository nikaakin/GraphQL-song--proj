import { gql } from "@apollo/client";

export default gql`
  query getTitles {
    titles: songs {
      id
      title
    }
  }
`;

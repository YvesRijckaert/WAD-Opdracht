import gql from "graphql-tag";

export default gql`
  query getAllWorkOptions {
    allWorkOptions {
      _id
      name
      location
      startHour
      endHour
      salaryPerHour
    }
  }
`;

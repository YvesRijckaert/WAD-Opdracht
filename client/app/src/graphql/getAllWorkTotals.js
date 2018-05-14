import gql from "graphql-tag";

export default gql`
  query getAllWorkTotals {
    allWorkTotals {
      _id
      totalDays
      totalSalary
    }
  }
`;

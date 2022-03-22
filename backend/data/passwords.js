/** @format */
import faker from "faker";

const passwords = [
  {
    username: faker.internet.email(),
    url: "tidal.com",
    sitePassword: "seedpasswordTest",
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: "facebook.com",
    sitePassword: "seedpasswordTest",
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: "google.com",
    sitePassword: "seedpasswordTest",
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: "24hourfitness.com",
    sitePassword: "seedpasswordTest",
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: faker.internet.url(),
    sitePassword: faker.datatype.string(),
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: faker.internet.url(),
    sitePassword: faker.datatype.string(),
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: faker.internet.url(),
    sitePassword: faker.datatype.string(),
    notes: "",
  },
  {
    username: faker.internet.email(),
    url: faker.internet.url(),
    sitePassword: faker.datatype.string(),
    notes: "",
  },
];
//  [...Array(5)].map(() => ({
//   username: faker.internet.email(),
//   url: faker.internet.url(),
//   sitePassword: faker.datatype.string(),
// }));

export default passwords;

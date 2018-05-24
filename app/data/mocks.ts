import { User } from '../model/user';


export const USER_DATA: User[] = [{
        firstName: "Bill",
        lastName: "Gates",
        dob: new Date("Dec 12 1965"),
        isWorking: true,
        income: 50000,
        company: "Microsoft",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg",
        vote: 120
      },
      {
        firstName: "Steve",
        lastName: "Jobs",
        dob: new Date("Jan 12 1965"),
        isWorking: false,
        income: 50000,
        company: "Apple",
        image: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/02/26/100496736-steve-jobs-march-2011-getty.1910x1000.jpg",
        vote: 180
      },
      {
        firstName: "Tim B.",
        lastName: "Lee",
        dob: new Date("Aug 2 1965"),
        isWorking: true,
        income: 30000,
        company: "World Wide Web",
        image: "http://news.mit.edu/sites/mit.edu.newsoffice/files/images/2013/20130318105145-1_0.jpg",
        vote: 100
      }]

const movies = [
  {
    _id: 1,
    name: "LEO",
    summary:
      "The film was officially announced in January 2023 under the tentative title Thalapathy 67, as it is Vijay's 67th film as a lead actor, and the official title was announced a few days later.",
    rating: 9.5,
    poster:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=dmnn5giZ-KzvuqYR",
  },
  {
    _id: 2,
    name: "BEAST",
    summary:
      "After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    rating: 8.6,
    poster:
      "https://igimages.gumlet.io/tamil/home/beast260322_1.jpg?w=900&dpr=1.3 ",
    trailer: " https://youtube.com/embed/0E1kVRRi6lk?si=X9he9E1P9b6nQEbB",
  },
  {
    _id: 3,
    name: "VARISU",
    summary:
      "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
    rating: 9.5,
    poster:
      " https://igimages.gumlet.io/tamil/home/varisu241022_2.jpg?w=376&dpr=2.6",
    trailer: " https://youtube.com/embed/9fux9swQ5AQ?si=jKjh1zmpHO2NV5zq",
  },
  {
    _id: 4,
    name: "MASTER",
    summary:
      "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    rating: 9.0,
    poster:
      " https://pbs.twimg.com/media/EVJgwvdU0AI59iw?format=jpg&name=900x900",
    trailer: " https://youtube.com/embed/UTiXQcrLlv4?si=ksUGVO40VTUGr_dH",
  },
  {
    _id: 5,
    name: "BIGIL",
    summary:
      "Michael gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    rating: 7.5,
    poster:
      "https://static.toiimg.com/thumb/imgsize-23456,msid-71277352,width-600,resizemode-4/71277352.jpg ",
    trailer: " https://youtube.com/embed/GR-Ui8-V2M0?si=2O7nHbVcENxeeESk",
  },
  {
    _id: 5,
    name: "MERSAL",
    summary:
      "A police officer arrests a doctor for crimes targeting medical professionals but later finds the real culprit in a tale of revenge, corruption and magic.",
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2M2ZjUxMDUtNDk4MC00ZDAxLTljZjItZmI4MTU5OTQ0ZTQ4XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UY2000_.jpg ",
    trailer: "https://youtube.com/embed/gQDo5QuZTaw?si=bUHwi-HJ-iQU40In",
  },
];

db.movies.insertMany([
  {
    id: 1,
    name: "LEO",
    summary:
      "The film was officially announced in January 2023 under the tentative title Thalapathy 67, as it is Vijay's 67th film as a lead actor, and the official title was announced a few days later.",
    rating: 9.5,
    poster:
      "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=dmnn5giZ-KzvuqYR",
  },
  {
    id: 2,
    name: "BEAST",
    summary:
      "After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    rating: 8.6,
    poster:
      "https://igimages.gumlet.io/tamil/home/beast260322_1.jpg?w=900&dpr=1.3 ",
    trailer: " https://youtube.com/embed/0E1kVRRi6lk?si=X9he9E1P9b6nQEbB",
  },
  {
    id: 3,
    name: "VARISU",
    summary:
      "Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire.",
    rating: 9.5,
    poster:
      " https://igimages.gumlet.io/tamil/home/varisu241022_2.jpg?w=376&dpr=2.6",
    trailer: " https://youtube.com/embed/9fux9swQ5AQ?si=jKjh1zmpHO2NV5zq",
  },
  {
    id: 4,
    name: "MASTER",
    summary:
      "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    rating: 9.0,
    poster:
      " https://pbs.twimg.com/media/EVJgwvdU0AI59iw?format=jpg&name=900x900",
    trailer: " https://youtube.com/embed/UTiXQcrLlv4?si=ksUGVO40VTUGr_dH",
  },
  {
    id: 5,
    name: "BIGIL",
    summary:
      "Michael gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    rating: 7.5,
    poster:
      "https://static.toiimg.com/thumb/imgsize-23456,msid-71277352,width-600,resizemode-4/71277352.jpg ",
    trailer: " https://youtube.com/embed/GR-Ui8-V2M0?si=2O7nHbVcENxeeESk",
  },
  {
    id: 5,
    name: "MERSAL",
    summary:
      "A police officer arrests a doctor for crimes targeting medical professionals but later finds the real culprit in a tale of revenge, corruption and magic.",
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2M2ZjUxMDUtNDk4MC00ZDAxLTljZjItZmI4MTU5OTQ0ZTQ4XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UY2000_.jpg ",
    trailer: "https://youtube.com/embed/gQDo5QuZTaw?si=bUHwi-HJ-iQU40In",
  },
]);

db.movies.updateMany({},{$set: {language:"English"}});

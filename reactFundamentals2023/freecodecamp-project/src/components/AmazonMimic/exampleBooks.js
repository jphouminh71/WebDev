// importing all images so we can access them when they are in /src
import img1 from "../../images/present.jpg";
import img2 from "../../images/grinch.jpg";
import img3 from "../../images/bible.jpg";

const bookOne = {
  id: 1,
  author: "SantaClause",
  title: "How the Grinch Stole Christmas",
  imgPath: img1,
};

const bookTwo = {
  id: 2,
  author: "The WhoVille People",
  title: "Lucy",
  imgPath: img2,
};

const bookThree = {
  id: 3,
  author: "The Bible",
  title: "Jesus",
  imgPath: img3,
};

const allBooks = [bookOne, bookTwo, bookThree];

export default allBooks;

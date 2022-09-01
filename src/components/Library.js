import '../styles/Library.css';
import BookComponent from './Book';
import atomic_habits from '../imgs/atomic_habits.jpg';
import case_for_christ from '../imgs/case_for_christ.jpg';
import celebration_of_discipline from '../imgs/celebration_of_discipline.jpg';
import elements_of_investing from '../imgs/elements_of_investing.jpg';
import exponential_age from '../imgs/exponential_age.jpg';
import learning_to_breathe from '../imgs/learning_to_breathe.jpg';

const LibraryComponent = () => {

  const bookInfoList = [
    {
        bookLink: atomic_habits,
        bookName: "Atomic Habits",
        status: "Finished",
        about: "Clear offers practical strategies to build good habits and break bad ones."
    },
    {
        bookLink: case_for_christ,
        bookName: "The Case for Christ",
        status: "In Progress",
        about: "Strobel, a former investigative journalist, interviews field experts to discover hard evidence of Jesus Christ."
    },
    {
        bookLink: celebration_of_discipline,
        bookName: "Celebration of Discipline",
        status: "In Progress",
        about: "Foster discusses the central spiritual practices that lead to spriritual maturity."
    },
    {
        bookLink: elements_of_investing,
        bookName: "Elements of Investing",
        status: "Finished",
        about: "Two investment experts, Ellis and Malkiel, discuss the tools for a successful investment strategy: low-cost index funds, diversification, dollar-cost averaging, and rebalancing."
    },
    {
        bookLink: exponential_age,
        bookName: "The Exponential Age",
        status: "Finished",
        about: "Azhar discusses the effects of the \"exponential gap\" that exists between rapidly evolving technology and a society that is unable to keep up. Policy solutions for the problem at hand are proposed."
    },
    {
        bookLink: learning_to_breathe,
        bookName: "Learning to Breathe",
        status: "Finished",
        about: "Morton discusses how we can experience the Holy Spirit's power in our daily life."
    }
  ];

  return (
    <div className="library-content over-particles d-flex flex-column justify-content-center align-items-center">
        <div className="bookshelf row flex-row flex-nowrap p-5 bg-dark">
            {/* create a rotating card for each book */}
            {bookInfoList.map( (book, index) => <BookComponent bookLink={book.bookLink} bookName={book.bookName} status={book.status} about={book.about} key={index}/>)}
            {/* safe to use index as key value since no books aren't changing order */}
        </div>
    </div>
  );
}

export default LibraryComponent;

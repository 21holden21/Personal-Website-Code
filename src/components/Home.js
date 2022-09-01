import '../styles/Home.css';
import first_photo from '../imgs/photo_of_me_cropped.jpg'
import second_photo from '../imgs/another_photo_of_me.jpg'

const HomeComponent = () => {


  /* the handle scroll button hover functions allow the button background color to change back and forth from bg dark to white (bootstrap doesn't already support this)*/
  const handleScrollBtnHoverIn = event => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "#212529"; /* hex encoding for bg dark */
  };

  const handleScrollBtnHoverOut = event => {
    event.target.style.backgroundColor = "#212529"; /* hex encoding for bg dark */
    event.target.style.color = "white"; 
  };

  /* the goToAbout function scrolls to the bottom of the landing page (the about section)*/
  const goToAbout = event => {
    window.scrollTo({
        top: document.body.scrollHeight, /* just scroll to the bottom of the page */
        behavior: "smooth", /* make scrolling animation smooth */
    });
  };

  /* the goToTop function scrolls to the top of the landing page*/
  const goToTop = event => {
    window.scrollTo({
        top: 0, /* just scroll to the top of the page */
        behavior: "smooth", /* make scrolling animation smooth */
    });
  };


  return (
    <div className="over-particles entire-home"> 

      <div className="heading-div">

        <div className="heading-content row g-0">
          <div className="content-col col-7 d-flex flex-column justify-content-center align-items-center"> {/* flex-column class stacks elements (flex items) inside the column (flexbox container) */}
            <h1>&mdash;&nbsp;Hi! I'm Holden.&nbsp;&mdash;</h1> {/* using an mdash instead of a pure css approach is more elegant, albeit the line is slightly smaller than desired (it was too hard for me to use a pure css approach when considering responsive design) */}
            <button type="button" className="btn btn-dark shadow-none scroll-btn" onMouseOver={handleScrollBtnHoverIn} onMouseOut={handleScrollBtnHoverOut} onClick={goToAbout}>Scroll for more</button>
          </div>
          <div className="content-col col-5">
            <img className="heading-img" src={first_photo} alt={"me"}/>
          </div>
        </div>

      </div>

      <div className="about bg-dark pb-2">

        <div className="about-content row g-0 p-5">
          <div className="col-5 d-flex flex-column justify-content-center align-items-center">
            <img src={second_photo} className="circle-img" alt={"me"}/>
          </div>
          <div className="col-7 d-flex flex-column justify-content-center align-items-center"> {/* col-7 (without specifying viewport size) ensures the columns never stack on top of each other */}
            <h1 className="pb-4">&mdash;&nbsp;About Me&nbsp;&mdash;</h1> {/* using an mdash instead of a pure css approach is more elegant, albeit the line is slightly smaller than desired (it was too hard for me to use a pure css approach when considering responsive design) */}
            <p>I am a graduate from Texas A&M University with an undergraduate degree in Computer Science and a minor in Business. Currently, I work as a technology consultant for Credera in Dallas, Texas. I am particularly interested in data science and cybersecurity, but I also have experience operating in a more traditional software engineering role. In my free time, I enjoy watching sports, playing golf, reading books, and travelling.</p>
          </div>
        </div>

        <a className="to-top-link link-primary" style={{cursor: "pointer"}} onClick={goToTop}>Back to Top</a>

      </div>

    </div>
  );
}

export default HomeComponent;

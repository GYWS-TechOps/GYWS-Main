import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import HCard from "../../HeaderCard/HCard";
function ArrowTest(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#aa3f17" }}
      onClick={onClick}
    />
  );
}

export default function TestiMonial() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    autoplay: true,
    // eslint-disable-next-line no-dupe-keys
    speed: 1000,
    autoplaySpeed: 4500,
    cssEase: "linear",
    pauseOnHover: true,

    nextArrow: <ArrowTest />,
    prevArrow: <ArrowTest />,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testiMonialData = [
    {
      name: "Prof. Partha Pratim Chakraborty",
      post: "Former Director, IIT Kharagpur",
      img: "assets/images/home/testimg/Partha.jpg",
      statement:
        " Having attended some GYWS events, the determination of the students to make a change amazes me. This is worth applause that they have taken the initiative to work for the underprivileged. I feel privileged to have such students in the campus who seek to give back to the society. Hope to see GYWS as well as other students come forward with more such initiatives.",
    },
    {
      name: "Mr. Mrinal Kanti Bhanja",
      post: "Founder, Gopali Youth Welfare Society",
      img: "assets/images/home/testimg/Mrig.jpg",
      statement:
        "   Gopali Youth Welfare Society (GYWS) was established with the  objectives of making people aware of problems faced by the modern society. It also aims at helping people's social, economic and cultural development and encouraging them to find out solutions to their problems on the basis of locally available resources.",
    },
    {
      name: "Prof. N R Mandal",
      post: " Ex-Professor, Ocean Engineering and Naval Architecture,                   Ex-Dean SA, IIT Kharagpur",
      img: "assets/images/home/testimg/NR.jpg",
      statement:
        "   The fact that a group of students of IIT Kharagpur run a               fully-fledged NGO leaves me filled with immense pride. As an advisory committee member of GYWS and having closely  observed all their activities. They are breaking the trends which see IITians aiming at bagging high salary jobs as soon as they enter the campus. These people are contributing back to the society and their contribution is making a difference.",
    },
    {
      name: "MR. Sailesh Gandhi",
      post: "IIT Bombay,'63 batch",
      img: "assets/images/home/testimg/sailesh.jpg",
      statement:
        " I was happy to see the diverse activities being taken up by the Gopali Youth Welfare Society. The social commitment being continuously shown by the students and faculty of IIT Knaragpur to share knowledge and time with the inhabitants of Gopali and its surroundings is laudable. I was also impressed with the details of expenditure for the last few years which they have displayed on the website. I wish them all the best and send my good wishes.",
    },
    {
      name: "Mr. Roy Da Silva",
      post: "IIT Kharagpur, '74 batch Former President, IIT foundation",
      img: "assets/images/home/testimg/roy.jpg",
      statement:
        " I would like to recognize Gopali Youth Welfare Society at  IIT Kharagpur at which I found out about when I visited PAN IIT GLOBAL CONFERENCE 2012 and what I said was about, you have got to establish a cause you would like to give back to  and I'm extremely happy this organisation exists within IIT  Kharagpur campus.",
    },
    {
      name: "Ms. Suparna Mondal",
      post: "Former President, GYWS",
      img: "assets/images/home/testimg/suparna.png",
      statement:
        " Since its establishment in 2002, Gopali Youth Welfare Society has successfully launched and carried out several training and development activities in and around the Gopali. In the past we have established rural libraries providing vocational training to the people from under-privileged section of society beside carrying out several awareness generation programs. We express our gratitude to them and our well wishes.",
    },
    {
      name: "Prof. H R Tiwari",
      post: "  Ex-Professor, Department of Humanities and Social Science, IIT Kharagpur",
      img: "assets/images/home/testimg/HR.png",
      statement:
        " Society is purely the extension of ourselves. Though we stepped in 21st century there are still several bleak aspects remain in our society especially in the developing countries like India. Illiteracy, poverty, lack of health consciousness, lack of social consciousness, lack of worldly  knowledge are major arnong them.Out of these sacred some of  the educated youth grouped together to do something in the field .",
    },
    {
      name: "Prof. Madhusudan Chakraborty",
      post: "Former Director, IIT Bhubaneshwar",
      img: "assets/images/home/testimg/madhu.jpg",
      statement:
        " The society is fortunate to have some young Samaritans who have always committed themselves for the humanitarian cause of uplifting the condition of the poor and enlightening the future generation, let all of us join our hands together to make this endeavour, envisaged to help the needy aspire for a better future, a success.",
    },
  ];



  const Testimonials = ({ name, img, statement, post }) => {
    return (
      <>
        <div className="blog-item">
          <div className="linkshere">
            <div className="icon">
              <img src={img} alt="" />
            </div>
            <div className="content">
              <div className="title">{name}</div>
              <div className="title">{post}</div>
              <div className="rounded"></div>

              <p>{statement}</p>
            </div>

          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container-TestiMonial">
        <HCard head={"TESTIMONIALS"}></HCard>
        <Slider {...settings}>
          {testiMonialData.map((content, index) => (
            <div key={index}>
              <Testimonials
                img={content.img}
                name={content.name}
                post={content.post}
                statement={content.statement}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

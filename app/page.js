import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="Heading">
        <img className="img-profile" src="DSC_1553 copy.jpg" alt="profile" />
        <div className="name">
          <h1>Bunarith Soksim</h1>
          <p>Student</p>
        </div>
      </div>
      <hr className="border-2 border-black" />
      <div className="main-body">
        <div className="uper-half">
          <div className="uper-info">
            <h2>
              <li>work experince</li>
            </h2>
            <h3>Web dev and Data visual intern.</h3>
            <p>2024</p>
            <p>creating project.</p>
            <br />
            <h2>
              <li>education</li>
            </h2>
            <h3>Insitut of Technoloy of Cambodia</h3>
            <p>2023-2027</p>
            <p>Information and technology, in progress.</p>
            <h3>chhbar aompov high school</h3>
            <p>2014-2022</p>
          </div>
          <div className="about">
            <h2>ABOUT ME</h2>
            <hr className="text-blue-400" />
            <p>Information and technology student.</p>
            <p>I consider myself a responsible and orderly person.</p>
            <p>I am looking forward to my fisrt work experince.</p>
          </div>
        </div>
        <div className="lower-half">
          <div className="lower-info">
            <h2>
              <li>langauge</li>
            </h2>
            <p>Intermediate English</p>
            <p>Native Khmer</p>
            <p>Beginner Chinese</p>
            <br />
            <h2>
              <li>computer skills</li>
            </h2>
            <p>Word, Excel,...</p>
            <p>Research</p>
            <p>slide presentation</p>
            <br />
            <h2>
              <li>volunteer</li>
            </h2>
            <h3>SEA Game 2023</h3>
            <p>participation in collection to</p>
            <p>distribute in Human Resource.</p>
          </div>
          <div className="contact">
            <h2 className=" bg-black text-white p-2 m-0">CONTACT ME</h2>
            <p>
              <i className="fa-solid fa-phone"></i> 096-941-9185
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> ken02game@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> 110 National St., Ta
              Khmav city, ST 21B
            </p>
            <p>
              <i className="fa-solid fa-globe"></i> @BunarithSoksim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

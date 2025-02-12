import { useContext } from "react";
import photo from "../assets/pexels-energepic-com-27411-175039.jpg";
import manphoto from "../assets/young-worker-standing-step-ladder-repairing-gutter-house_454047-4475.avif";
import ThemeContext from "../Context/ThemeProvider";

function AboutUs() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="min-h-screen">
      <div className="card  h-fit mb-3 md:h-52 rounded-none bg-base-100 image-full w-full  mx-auto shadow-xl">
        <figure>
          <img className="w-full " src={photo} alt="bg" />
        </figure>
        <div className="card-body text-center">
          <div className="md:w-8/12  text-justify md:text-center mx-auto">
            <h2 className="card-title text-3xl flex justify-center">
              About Us
            </h2>
            <p>
              At Home Repair, we believe that every home deserves expert care
              and attention. With years of experience in home repair and
              maintenance, we take pride in providing reliable, high-quality
              solutions to homeowners who want their spaces to remain safe,
              functional, and beautiful.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-5  space-y-3 p-2 py-3">
        <div>
          <img
            src={manphoto}
            className="mx-auto rounded-md shadow-lg"
            alt=""
            srcset=""
          />
        </div>
        <div className="md:w-7/12 mx-auto ">
          <div>
            <h1 className={` text-3xl md:text-4xl font-bold ${ theme === "dark" ? "text-slate-400" : "text-[#f9781f]"}`}>
              {" "}
              Why Choose Us?
            </h1>
            <p className="my-5">
              We are a team of skilled professionals specializing in a wide
              range of home repair services, from plumbing and electrical work
              to carpentry, painting, and general maintenance. Our mission is to
              deliver top-notch craftsmanship with honesty, efficiency, and a
              commitment to customer satisfaction.
            </p>

            <ul className="my-3 space-y-3">
              <li className=" list-disc list-inside">
                <span className=" font-semibold">
                  Experienced & Skilled Technicians –{" "}
                </span>{" "}
                Our team consists of trained and certified professionals with
                extensive experience in home repair and maintenance.
              </li>

              <li className=" list-disc list-inside">
                <span className=" font-semibold">
                  Reliable & Timely Service –{" "}
                </span>{" "}
                We respect your time and ensure prompt service, completing
                projects efficiently without compromising quality.
              </li>
              <li className=" list-disc list-inside">
                <span className=" font-semibold">
                  Affordable & Transparent Pricing –{" "}
                </span>
                No hidden costs or surprise fees—just fair, upfront pricing for
                all our services.
              </li>
              <li className=" list-disc list-inside">
                <span className=" font-semibold">
                  Customer Satisfaction Guaranteed –{" "}
                </span>{" "}
                Your satisfaction is our priority, and we stand behind our work
                with warranties and follow-ups to ensure everything is done
                right.
              </li>
            </ul>
          </div>

          <div>
            <h1 className={`text-2xl font-bold  ${ theme === "dark" ? "text-slate-400" : "text-[#f9781f]"}`}>Our Services</h1>
            <ul>
              <li className=" list-disc list-inside">
                Electrical Repairs & Installations
              </li>
              <li className=" list-disc list-inside">
                Plumbing Fixes & Upgrades
              </li>
              <li className=" list-disc list-inside">
                Drywall & Painting Services
              </li>
              <li className=" list-disc list-inside">
                Carpentry & Custom Woodwork
              </li>
              <li className=" list-disc list-inside">Door & Window Repairs</li>
              <li className=" list-disc list-inside">
                Appliance Installation & Maintenance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

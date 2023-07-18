import React from "react";
import background from "../assets/Ourwork.jpg";
import RTEImage from "../assets/RTE.jpg";
import COVIDImage from "../assets/covid.jpg";
import SEEDImage from "../assets/SeedBallP.jpg";
import ECOImage from "../assets/eco_champs.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import DonationUsage from "../components/DonationUsage";

const OurWork = () => {
  const [donationUsage, setdonationUsage] = useState([]);

  const Cities = [
    "Bangalore",
    "New Delhi",
    "Gurugram",
    "Pune",
    "Trichy",
    "Patna",
    "Hyderabad",
    "Dehradun",
    "Chennai",
  ];
  const Campaign = {
    RTE: {
      head: "RTE 25 - Right To Education Awareness",
      body: `The RTE Act emphasizes free education for underprivileged children aged 6 to 14, with 25% reservation in private schools. Despite 20 lakh free seats annually, only 20% are utilized due to lack of awareness. Our solution involves engaging volunteers to raise awareness and enable underprivileged communities to benefit from this transformative opportunity.`,
      image: RTEImage,
    },
    COVID: {
      head: "COVID Relief Support",
      body: `Bhumi’s strength lies in mobilising hundreds of volunteers for citizen led action during times of need. Since 2015, our volunteers have mobilised relief for thousands of people and supported over 100 partner organisations and educational institutions. Bhumi has supported direct financial transfers and groceries for over 14,000 daily wagers.`,
      image: COVIDImage,
    },
    SEED: {
      head: "Seed-Ball Programme",
      body: `Seed balls, composed of clay, Earth, and seeds, offer a simple and speedy solution for reestablishing greenery in our environment. They aid in soil restoration, water retention, and enable the planting of wildflowers in challenging locations, contributing to environmental restoration and climate change response.`,
      image: SEEDImage,
    },
    ECO: {
      head: "Eco-Champs",
      body: `Eco-Champs is a 3-5 month environment sensitization program for students, empowering them to adopt eco-friendly lifestyles. It offers immersive, hands-on experiences to foster critical thinking, problem-solving, teamwork, and compassion, enabling students to drive positive change in their communities.`,
      image: ECOImage,
    },
  };
  const campaignArray = Object.values(Campaign);
  console.log(campaignArray);
  useEffect(() => {
    getUsage();
  }, []);
  const getUsage = async () => {
    const response = await fetch("http://127.0.0.1:8000/donation/");
    const data = await response.json();
    console.log(data);
    setdonationUsage(data);
  };
  return (
    <div>
      <Navbar />
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          marginTop: "6%",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font text-white"
            style={{
              fontSize: "280%",
              color: "white",
              textAlign: "center",
            }}
          >
            Change Today ... Change Tomorrow
          </h1>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap -mx-2 mb-2">
              {campaignArray.map((campaign, index) => {
                return (
                  <div className="px-2 w-1/2" key={index}>
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src={campaign.image}
                      />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                          {campaign.head}
                        </h2>
                        <p className="text-xl font-medium leading-relaxed">
                          {campaign.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="text-center bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-medium mb-4">
            Usage of your valuable donations
          </h2>
          <div className="text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationUsage.map((donationUsage, index) => (
              <div className="bg-white rounded-lg p-6 shadow-md" key={index}>
                <DonationUsage donationUsage={donationUsage} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              OUR CHAPTERS
            </h1>
            <p className="text-2xl lg:w-2/3 mx-auto leading-relaxed">
              Bhumi is currently operating in multiple cities across India,
              engaging more than 30,000 volunteers every year. We fuel change by
              identifying problems that are widespread globally and then scale
              solutions to a local level.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mb-20 mx-auto flex flex-wrap">
          <div className="flex flex-row w-full justify-between items-start">
            {Cities.map((city, index) => (
              <div
                className="flex flex-col w-full md:w-1/5 md:pr-10 md:py-6"
                key={index}
              >
                <div className="flex justify-center items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      {city}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;

import SectionTitle from "../Shared/SectionTitle";
import AboutBulb from "./AboutBulb";
import travel from "../../assets/icon/travel.png";
import vipMember from "../../assets/icon/vip-member.png";
import tieUps from "../../assets/icon/partnership.png";
import client from "../../assets/icon/public-relation.png";

const AboutSection = () => {
  const aboutDetails = [
    {
      image: travel,
      number: 1560,
      text: "Travel pack Completed In Last 5 Years",
    },
    {
      image: vipMember,
      number: 1823,
      text: "Worldwide Premium Members",
    },
    {
      image: tieUps,
      number: 1560,
      text: "International Corporate Tie-ups ",
    },
    {
      image: client,
      number: 1823,
      text: "Local & International Client Tie-ups",
    },
  ];

  return (
    <section className="pt-28 pb-12 bg-background">
      <div className="container">
        <SectionTitle
          subtitle="Enjoy with adventure"
          title="We bring to life your tour dreams"
        />

        <div className="grid grid-cols-4 gap-6">
          {aboutDetails.map((about, idx) => (
            <AboutBulb key={idx} about={about} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

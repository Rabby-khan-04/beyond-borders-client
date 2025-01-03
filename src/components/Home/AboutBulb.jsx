import PropTypes from "prop-types";

const AboutBulb = ({ about }) => {
  return (
    <div className="font-montserrat p-12">
      <img src={about.image} className="inline-block size-20 mb-2" alt="" />
      <h2 className="font-bold text-5xl mb-3 text-primary">{about.number}</h2>
      <p className="text-2xl font-semibold text-black">{about.text}</p>
    </div>
  );
};

AboutBulb.propTypes = {
  about: PropTypes.object,
};

export default AboutBulb;

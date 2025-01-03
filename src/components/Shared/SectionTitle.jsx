import PropTypes from "prop-types";
import locationIcon from "../../assets/icon/location.svg";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="max-w-xl mx-auto text-center mb-12">
      <img src={locationIcon} className="size-11 inline-block mb-2" alt="" />
      <p className="text-3xl font-normal font-mansalva text-secondary mb-3">
        {subtitle}
      </p>
      <h2 className="text-6xl font-palanquin_park font-bold text-primary">
        {title}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;

import PropTypes from "prop-types";
import locationIcon from "../../assets/icon/location.svg";

const SectionTitle = ({ subtitle, title, description, align = "center" }) => {
  return (
    <div
      className={`${
        align === "center" ? "max-w-xl mx-auto text-center" : "text-left"
      } mb-12`}
    >
      <img src={locationIcon} className="size-11 inline-block mb-2" alt="" />
      <p className="text-3xl font-normal font-mansalva text-secondary mb-3">
        {subtitle}
      </p>
      <h2 className="text-6xl font-palanquin_park font-bold text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-base text-des_gray font-montserrat mt-5">
          {description}
        </p>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.string,
};

export default SectionTitle;

import './EasyCleanLogo.css';
import PropTypes from 'prop-types';

export default function EasyCleanLogo({ className = '' }) {
  return (
    <div className={`easyclean-logo ${className}`}>
      <span className="logo-easy">Easy</span>
      <span className="logo-clean">Clean</span>
    </div>
  );
}

EasyCleanLogo.propTypes = {
  className: PropTypes.string,
};

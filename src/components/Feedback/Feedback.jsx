import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => {
                return <button type='button' onClick={() => onLeaveFeedback(option)} key={option} className={css.buttonFB}>{option}</button>
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';
import ButtonField from './ButtonField';
import Loader from '../../components/Loader';

/**
 * DEPRECATED
 *
 * @class SubmitButtonField
 * @extends {React.Component}
 */
class SubmitButtonField extends React.Component {
  static propTypes = {
    /**
     * Indicates that the form has not been touched yet. Will disable submission.
     */
    pristine: PropTypes.bool,
    /**
     * Indicates that the form is loading something. Will disable submission.
     */
    loading: PropTypes.bool,
    /**
     * Indicates that the user cannot submit the form.
     */
    disabled: PropTypes.bool,
    /**
     * Glyph name for an icon to pop out of the right side of the button on hover.
     */
    rightIcon: PropTypes.string,
    /**
     * Glyph name for an icon to pop out of the left side of the butotn on hover.
     */
    leftIcon: PropTypes.string,
    /**
     * Contents of the button.
     */
    children: PropTypes.node.isRequired,
    /**
     * Alternate optional contents of the button when 'pristine' is true.
     */
    pristineContents: PropTypes.node,
    /**
     * Adds an id to the button.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the button.
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    pristine: false,
    loading: false,
    disabled: false,
    rightIcon: null,
    leftIcon: null,
    pristineContents: 'Up to Date',
    id: null,
    className: null,
  };

  renderContents = () => {
    const { pristine, loading, children, pristineContents } = this.props;

    if (pristine) {
      return <span>{pristineContents}</span>;
    }
    if (loading) {
      return <Loader size="1em" />
    }

    return children;
  }

  render() {
    const { pristine, loading, disabled, leftIcon, rightIcon, id, className } = this.props;
    return (
      <ButtonField
        disabled={pristine || loading || disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        type="submit"
        id={id}
        className={className}
      >
        {this.renderContents()}
      </ButtonField>
    )
  }
}

SubmitButtonField.usage = `
# SubmitButtonField

Shortcut for a submit button field. Use props \`pristine\`, \`loading\` and \`disabled\` to change what gets rendered inside. Pass children for the text to display when the user can submit the form, which will not be shown if \`pristine\` or \`loading\` is overriding the contents (pristine means that the form is up-to-date or untouched).

\`\`\`
<SubmitButtonField pristine={pristine} loading={loading}>Save</SubmitButtonField>
\`\`\`
`;

export default SubmitButtonField;

import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEPRECATED
 *
 * A set of form fields which is grouped in a row
 *
 * You can supply `spacing` as a prop. Spacing can be an int (flex size) or an array of ints (flex size per item)
 */
const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: ${({ align }) => align};

  ${({ spacing }) => {
    if (spacing instanceof Array) {
      return spacing.map((item, idx) => `& > *:nth-child(${idx + 1}) { flex: ${ item}; }`).join('\n');
    }
    return `& > * { flex: ${ spacing}; }`;
  }}
`;

FieldGroup.propTypes = {
  /**
   *
   */
  spacing: PropTypes.array,
  /**
   * A literal flexbox justify-content value.
   */
  align: PropTypes.string,
  /**
   * Adds an id to the element.
   */
  id: PropTypes.string,
  /**
   * Adds a class name to the element.
   */
  className: PropTypes.string,
};

FieldGroup.defaultProps = {
  spacing: '0 1 auto',
  align: 'space-around',
  id: null,
  className: null,
};

FieldGroup.usage = `
# FieldGroup

For when you know how you want to lay out fields in a form on one row. For instance, if the first name and last name field need to be on the same row, you'd use a FieldGroup to join them. You can pass props for arrangement:

* \`spacing\`: a single value to set the \`flex\` CSS property of every item, or an array to set them individually.
* \`align\`: a verbatim value for \`justify-content\` on the enclosing flexbox.

\`\`\`
<FieldGroup spacing={[2, 1]} align="space-between">
  <TextField />
  <ButtonField />
</FieldGroup>
\`\`\`
`;

export default FieldGroup;

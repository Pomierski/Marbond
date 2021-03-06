import styled from "styled-components";

const SectionTitle = styled.div`
  font-size: ${(props) => props.theme.textMedium};
  color: ${(props) =>
    props.type === "secondary"
      ? props.theme.secondaryText
      : props.theme.primaryText};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
`;

export default SectionTitle;

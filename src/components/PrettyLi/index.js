import styled from 'styled-components';

const PrettyLi = styled.li`
  ::before {
    content: '\\2022';
    color: ${(props) => props.color};
    font-weight: bold;
    display: inline-block;
    margin-right: 8px;
  }
`;

export default PrettyLi;

import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justyfy-content: space-between;
  align-items: center;
  background: 1A3636;
  border: 1px solid 1A3636;
`;

const Title = styled.p`
  color: D6BD98;
  font-size: 1.25rem;
`;

export const HeadBar = () => {
  return (
    <Wrapper>
      <Title>User1</Title>
      <Title>User2</Title>
    </Wrapper>
  );
};

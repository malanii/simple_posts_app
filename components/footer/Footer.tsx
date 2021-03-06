import styled from "styled-components";
const Title = styled.p`
  color: #6c6378;
  font-size: 1.2rem;
  font-weight: bold;
`;
const ExtendedTitle = styled(Title)`
  font-size: 0.8rem;
  margin-bottom: 0;
  padding-bottom: 1rem;
`;
export default function Footer() {
  return (
    <>
      <Title>
       Simple posts app<span>&#9734;</span>
      </Title>
      <Title>Next.js + React + Redux + TypeScript</Title>
      <ExtendedTitle>by junior frontend developer Yana Ignatova</ExtendedTitle>
    </>
  );
}

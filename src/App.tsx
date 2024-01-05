import styled from "styled-components";
import Data from "./Data";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 20px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h1`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  font-weight: bold;
`;
const Btn = styled.button`
  border: 0;
  width: 50%;
  color: white;
  background-color: ${(props) => props.theme.pink};
  padding: 10px 0;
  margin: 0 auto;
`;
const Lists = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 10px;
`;
const Name = styled.h1`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
  font-weight: 400;
`;
const Age = styled.h2`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
`;
interface IData {
  id: number;
  name: string;
  age: number;
  image: string;
}
function App() {
  const [people, setPeople] = useState<IData[]>(Data);
  const onClick = () => {
    setPeople([]);
  };
  return (
    <Container>
      <Title> {people.length} Birthdays today</Title>
      <Lists>
        {people.map((person) => {
          return (
            <List key={person.id}>
              <Image style={{ backgroundImage: `url(${person.image})` }} />
              <div>
                <Name>{person.name}</Name>
                <Age> {person.age} olds</Age>
              </div>
            </List>
          );
        })}
      </Lists>
      <Btn onClick={onClick}>Clear All</Btn>
    </Container>
  );
}

export default App;

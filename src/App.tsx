import styled from "styled-components";
import { HeadBar } from "./components/header/header";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  gridtemplate-rows: 20% 1fr 20%;
`;

function App() {
  return (
    <Grid>
      <HeadBar />
    </Grid>
  );
}

export default App;

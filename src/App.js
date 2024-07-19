import './App.css';
import React, { useState } from 'react';
import { Box, Grommet, Image, Text } from 'grommet';
import { Instagram } from 'grommet-icons';
import ReactCardFlip from 'react-card-flip';

const Front = ({ navigate }) => (
  <Box align="center" justify="center" pad="small" fill direction="column">
    <Box height='380px' width='280px' align="center" justify="start" hoverIndicator pad="small" round="small" direction="column" border={{"color":"border","size":"large"}} onClick={() => navigate("/flipped")}>
      <Box height='260px' width='260px' align="center" justify="start" alignSelf="center" responsive={false}>
        <Image src="https://images.volleyballworld.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/fivb-prd/dcw3jt5jkfxf8ecnnibu.jpg" fill fit="cover" />
      </Box>
      <Box height='40px' width='240px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}}>
        <Text size="large">MAYU</Text>
      </Box>
      <Box height='40px' width='240px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}}>
        <Text size="large">OUTSIDE HITTER</Text>
      </Box>
    </Box>
  </Box>
);

const Back = ({ navigate }) => (
  <Box align="center" justify="center" direction="column" fill pad="small">
    <Box height='380px' width='280px' align="start" justify="start" pad="small" round="small" direction="column" border={{"color":"border","size":"large"}} onClick={() => navigate("/")} hoverIndicator>
      <Box height='30px' width='240px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}}>
        <Text size="large">MAYU ISHIKAWA</Text>
      </Box>
      <Box height='30px' width='240px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}}>
        <Text size="large">JAPAN</Text>
      </Box>
      <Box height='30px' width='240px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}} direction="column">
        <Text size="large">23 y.o</Text>
      </Box>
      <Box height='30px' width='140px' align="center" justify="center" background={{"color":"active"}} margin={{"top":"small"}} direction="column">
        <Text size="large">PROFILE</Text>
      </Box>
      <Box height='120px' width='240px' align="stretch" justify="start" background={{"color":"active"}} margin={{"top":"small"}} direction="row" cssGap={false}>
        <Text size="small" truncate={false} weight={500} margin={{"left":"xsmall"}}>
          Mayu Ishikawa (石川 真佑, Ishikawa Mayu, born 14 May 2000) is a Japanese professional volleyball player from Okazaki City, Aichi, Prefecture. She currently plays for the club Azzurra Volley Firenze.
        </Text>
      </Box>
      <Box height='30px' width='240px' align="center" justify="start" direction="row-responsive">
        <Instagram />
        <Text truncate size="small" margin={{"left":"xsmall"}}>
          https://www.instagram.com/mayu_00514/?hl=en
        </Text>
      </Box>
    </Box>
  </Box>
);

const App = () => {
  const [path, setPath] = useState('/');

  const navigate = (nextPath) => {
    setPath(nextPath);
    window.history.pushState({}, '', nextPath);
  };

  const isFlipped = path === '/flipped';

  return (
    <Grommet full>
      <Box fill align="center" justify="center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Front navigate={navigate} key="front" />
          <Back navigate={navigate} key="back" />
        </ReactCardFlip>
      </Box>
    </Grommet>
  );
};

export default App;

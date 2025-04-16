import { Box, Button } from "@mui/material";
import React from "react";

const MainContainer = () => {
  const soundFolders = process.env.PUBLIC_URL + "/Sounds/";

  const clip1 = soundFolders + "SFX/battle-rifle-42734.mp3";
  const clip2 = soundFolders + "SFX/distant-explosion-80398.mp3";

  const audio = new Audio();

  const playClipAny = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    // audio.pause();
    audio.src = name;
    audio.play();
  };
  return (
    <Box>
      <Button name={clip1} onClick={playClipAny}>
        SFX 1
      </Button>
      <Button name={clip2} onClick={playClipAny}>
        SFX 2
      </Button>
    </Box>
  );
};

export default MainContainer;

import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { formatTime } from "../utilities";

interface PlayButtonProps {
  fileLocation: string;
  buttonLabel?: string;
  musicPlayback?: (fileLocation: string) => void;
  buttonStyle?: React.CSSProperties;
}

const PlayButton = (props: PlayButtonProps) => {
  const { fileLocation, buttonLabel, buttonStyle, musicPlayback } = props;
  const style = buttonStyle || {
    backgroundColor: "green",
    borderRadius: 10,
    margin: "1em",
  };

  const [player, setPlayer] = useState<HTMLAudioElement | undefined>(undefined);
  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    const audio = new Audio(fileLocation);
    setPlayer(audio);

    audio.onloadeddata = () => {
      const audioDuration = audio.duration;
      if (typeof audioDuration === "number" && !isNaN(audioDuration)) {
        setDuration(formatTime(audioDuration));
      }
    };
  }, [props.fileLocation]);

  const getLabel = (): string => {
    let label = buttonLabel;
    if (label === undefined) {
      const locationArray = fileLocation.split("/");
      label = locationArray[locationArray.length - 1];
    }
    return `${label} ${duration}`;
  };

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    if (musicPlayback) {
      musicPlayback(name);
    } else {
      if (player) {
        player.play();
      }
    }
  };

  return (
    <Button
      variant="contained"
      size="large"
      style={style}
      name={fileLocation}
      onClick={handlePlayClick}
    >
      {getLabel()}
    </Button>
  );
};

export default PlayButton;

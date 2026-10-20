import React, { useState } from 'react';
import { View, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YouTubeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>
       
      </Text>

      <YoutubePlayer
        height={350}
        videoId="5SZYz7lZRRI"
        play={playing}
        onChangeState={(state) => {
          if (state === 'ended') {
            setPlaying(false);
          }
        }}
      />
    </View>
  );
}
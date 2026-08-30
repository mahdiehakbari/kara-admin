"use client";

import { useRef, useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface Props {
  src: string;
}

const formatTime = (time: number) => {
  if (isNaN(time)) return '00:00';

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const VideoPlayer = ({ src }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    setCurrent(videoRef.current.currentTime);

    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100,
    );
  };

  return (
    <div className='relative group bg-black'>
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        className='aspect-4/5 w-full'
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
        }}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* Play Overlay */}
      <button
        onClick={togglePlay}
        className='absolute inset-0 flex items-center justify-center'
      >
        {!playing && (
          <div className='rounded-full bg-black/50 p-5 text-white text-3xl transition-all duration-200'>
            <FaPlay />
          </div>
        )}
      </button>

      {/* Bottom Controls */}
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3'>
        {/* Progress */}
        <div className='mb-2 h-1 overflow-hidden rounded-full bg-white/30'>
          <div
            style={{ width: `${progress}%` }}
            className='h-full bg-white transition-all duration-100'
          />
        </div>

        <div className='flex items-center justify-between text-xs text-white'>
          <span>
            {formatTime(current)} / {formatTime(duration)}
          </span>

          <button
            onClick={toggleMute}
            className='text-lg transition-transform hover:scale-110'
          >
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { fadeUp, viewport } from '../motion';
import SectionHeading from './SectionHeading';

const Showreel = () => {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  // Once the visitor pauses manually, scrolling back into view must not restart it.
  const userPaused = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="showreel" className="py-24 md:py-32">
      <div className="max-container">
        <SectionHeading kicker="Showreel" title="My journey, in motion" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="group relative rounded-[2rem] overflow-hidden ring-1 ring-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
        >
          <video
            ref={videoRef}
            src="/MyPortfolio_V2.mp4"
            poster="/showreel-poster.png"
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onClick={togglePlay}
            className="block w-full aspect-video object-cover cursor-pointer"
            aria-label="Motion design video presenting my journey"
          />

          <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              className="w-10 h-10 rounded-full bg-zinc-950/80 hover:bg-zinc-950 text-white flex items-center justify-center transition-colors"
            >
              {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="w-10 h-10 rounded-full bg-zinc-950/80 hover:bg-zinc-950 text-white flex items-center justify-center transition-colors"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-accent text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Play size={22} className="ml-1" fill="currentColor" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;

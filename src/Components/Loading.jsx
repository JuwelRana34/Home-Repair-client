import { Player } from "@lottiefiles/react-lottie-player";

function Loading() {
  return (
    <div>
      <Player
        src={
          "https://lottie.host/354944e8-405b-4e53-9f5e-15e1fe625632/2mVAlzcdHN.json"
        }
        loop
        autoplay
        className="w-1/2 mx-auto"
      />
    </div>
  );
}

export default Loading;

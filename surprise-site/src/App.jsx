import { useEffect, useState } from "react";
import "./App.css";

const baby = "/baby.jpeg";
const now = "/now.jpeg";

export default function App() {

  const [step, setStep] = useState(0);
  const [glitch, setGlitch] = useState(false);

  const speak = (text) => {

    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);

    msg.rate = 0.95;
    msg.pitch = 1;

    speechSynthesis.speak(msg);

  };

  useEffect(() => {

    speak(
      "Connecting to secret human database"
    );

    const t1 = setTimeout(() => {

      setStep(1);

      speak(
        "Baby face identified"
      );

    }, 4000);

    const t2 = setTimeout(() => {

      setGlitch(true);

      speak(
        "Warning. Dangerous transformation detected"
      );

    }, 8000);

    const t3 = setTimeout(() => {

      setStep(2);

      setGlitch(false);

      speak(
        "Mission failed. Reel addict confirmed"
      );

    }, 11000);

    return () => {

      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);

    };

  }, []);

  return (

    <div className="app">

      <div className="bg"></div>

      <div className="particles"></div>

      {/* INTRO */}

      {step === 0 && (

        <div className="center">

          <div className="aiCircle">

            <div className="innerCircle"></div>

          </div>

          <h1>
            🤖🚨 FBI HUMAN DETECTOR
          </h1>

          <p>
           Searching missing person database... 
          </p>

          <div className="scanBar">

            <div className="scanFill"></div>

          </div>

        </div>

      )}

      {/* BABY MODE */}

      {step === 1 && (

        <div className="center">

          <div className="light"></div>

          <img
            src={baby}
            className="photo babyPhoto"
          />

          <h1>
            👶🥺 BEFORE THE KIDNAPPING
          </h1>

          <p>
           This child was last seen eating Dairy Milk and ice cream  peacefully 🍫
          </p>

        </div>

      )}

      {/* GLITCH */}

      {glitch && (

        <div className="glitchScreen">

          <h1 className="danger">
            🚨 KIDNAPPER DETECTED 🚨
          </h1>

          <p>
           Subject kidnapped by roadside panipuri gang 🌮
          </p>

        </div>

      )}

      {/* FINAL */}

      {step === 2 && (

        <div className="center">

          <div className="dangerGlow"></div>

          <img
            src={now}
            className="photo finalPhoto"
          />

          <h1>
           ☠ AFTER KIDNAPPING Panuu ☠
          </h1>

          <p>
           Highly dangerous species detected ☠️  
Mood changes every 3 seconds 😭 
          </p>

          <div className="stats">

            <div className="card">
              <h2>99999+</h2>
              <span>PaniPuri Eaten</span>
            </div>

            <div className="card">
              <h2>0</h2>
              <span>Brains cells left</span>
            </div>

            <div className="card">
              <h2>24/7</h2>
    <span>Nonsense Talks</span>
            </div>

          </div>

          <button
            onClick={() => {

              speak(
                "Emergency snacks required immediately"
              );

              alert(
                "Suspect extremely dangerous when hungry.... doka khate hee porgiii panuuuuuuuuuuu 😭 😭 😭 "
              );

            }}
          >
            OPEN SECRET REPORT
          </button>

        </div>

      )}

    </div>
  );
}
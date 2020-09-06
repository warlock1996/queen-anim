import React from "react";

function App() {
  const wrapperRef = React.useRef(null);
  const alicequeenRef = React.useRef(null);
  let animator_alice_ref = React.useRef(null);

  const treeRef = React.useRef(null);
  const animator_tree_ref = React.useRef(null);

  const tree2Ref = React.useRef(null);
  const animator_tree2Ref = React.useRef(null);

  const rookRef2 = React.useRef(null);
  const animator_rookRef2 = React.useRef(null);

  const rookRef = React.useRef(null);
  const animator_rookRef = React.useRef(null);

  const knightRef = React.useRef(null);
  const animator_knightRef = React.useRef(null);

  const pawnRef = React.useRef(null);
  const animator_pawnRef = React.useRef(null);

  const pawnRef2 = React.useRef(null);
  const animator_pawnRef2 = React.useRef(null);

  const palmRef = React.useRef(null);
  const animator_palmRef = React.useRef(null);

  setInterval(() => {
    if (animator_alice_ref.current.playbackRate > 0.4) {
      animator_alice_ref.current.updatePlaybackRate(
        animator_alice_ref.current.playbackRate * 0.9
      );
    }
    var _animators = [
      animator_tree_ref,
      animator_tree2Ref,
      animator_rookRef2,
      animator_rookRef,
      animator_knightRef,
      animator_pawnRef,
      animator_pawnRef2,
      animator_palmRef,
    ];
    if (animator_alice_ref.current.playbackRate < 1) {
      _animators.forEach((obj) => obj.current.pause());
    }
    if (animator_alice_ref.current.playbackRate > 1) {
      _animators.forEach((obj) => obj.current.play());
    }
  }, 3000);
  React.useLayoutEffect(() => {
    animator_alice_ref.current = alicequeenRef.current.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
      {
        easing: "steps(7, end)",
        duration: 600,
        playbackRate: 1.5,
        direction: "reverse",
        iterations: Infinity,
      }
    );
    animator_tree_ref.current = treeRef.current.animate(
      [
        { transform: "translateX(1000px)" },
        { transform: "translateX(-500px)" },
      ],
      {
        duration: animator_alice_ref.current.playbackRate * 2000,
        iterations: Infinity,
      }
    );
    animator_tree2Ref.current = tree2Ref.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 2000,
        iterations: Infinity,
      }
    );
    animator_rookRef.current = rookRef.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 2000,
        iterations: Infinity,
      }
    );
    animator_rookRef2.current = rookRef2.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 4000,
        iterations: Infinity,
      }
    );
    animator_knightRef.current = knightRef.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 4000,
        iterations: Infinity,
      }
    );
    animator_pawnRef.current = pawnRef.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 3000,
        iterations: Infinity,
      }
    );
    animator_pawnRef2.current = pawnRef2.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 3000,
        iterations: Infinity,
      }
    );
    animator_palmRef.current = palmRef.current.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(-500px)" }],
      {
        duration: animator_alice_ref.current.playbackRate * 3000,
        iterations: Infinity,
      }
    );
  });
  React.useEffect(() => {
    wrapperRef.current.addEventListener("click", () => {
      animator_alice_ref.current.updatePlaybackRate(
        animator_alice_ref.current.playbackRate * 1.1
      );
    });
  });
  return (
    <div className="App">
      <div id="wrapper" ref={wrapperRef}>
        <div id="sky"></div>
        <div id="earth">
          <div id="wrapper_obstacles">
            <div id="alice_queen_wrapper">
              <img
                id="alicenqueen"
                ref={alicequeenRef}
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                alt="alicenqueen"
              />
            </div>
            <img
              id="bush"
              className="ontop"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
              alt="bush"
            />
            <img
              id="tree"
              ref={treeRef}
              className="ontop"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
              alt="tree"
            />
            <img
              id="tree2"
              ref={tree2Ref}
              className="ontop"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
              alt="tree2"
            />
            <img
              id="rook"
              ref={rookRef}
              className="ontop"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
              alt="rook"
            />
            <img
              id="small_rook"
              ref={rookRef2}
              className="ontop"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
              alt="small_rook"
            />
            <img
              id="small_pawn"
              ref={pawnRef}
              className="far"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
              alt="small_pawn"
            />
            <img
              id="small_upright_pawn"
              ref={pawnRef2}
              className="far"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
              alt="pawn"
            />
            <img
              id="palm1_small"
              ref={palmRef}
              className="far"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
              alt="palm1_small"
            />
            <img
              id="small_knight"
              ref={knightRef}
              className="far"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
              alt="pawn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

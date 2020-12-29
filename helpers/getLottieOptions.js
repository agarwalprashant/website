const getLottieOptions = ({ lottieData }) => {
  return {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

export default getLottieOptions;

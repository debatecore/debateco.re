const MovingCompSciBg = (props: { height?: "full" | "screen" }) => {
  return (
    <div
      className={`absolute w-full ${
        props.height === "full"
          ? "h-full"
          : props.height === "screen"
          ? "h-screen"
          : "h-16"
      } bg-compsci motion-safe:animate-pan opacity-[.05] -z-10`}
    />
  );
};

export { MovingCompSciBg };

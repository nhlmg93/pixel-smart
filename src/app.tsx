const Canvas = () => {
  let canvasRef: HTMLCanvasElement | undefined;

  return (
    <canvas
      ref={canvasRef}
      class="w-screen h-screen fixed top-0 left-0"
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={({ x, y }) => {
        if (!canvasRef) return;
        const ctx = canvasRef.getContext("2d")!;
        ctx.fillStyle = "red";
        ctx.fillRect(x - 75, y - 50, 150, 100);
      }}
    />
  );
};

export const App = () => {
  return <Canvas />;
};

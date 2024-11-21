function Canvas() {
  let canvasRef: HTMLCanvasElement | undefined;

  return (
    <div class="border border-black flex items-center justify-center h-screen">
      <canvas
        ref={canvasRef}
        class="border border-black"
        width={250}
        height={250}
        onMouseDown={(e) => {
          if (!canvasRef) return;
          const ctx = canvasRef.getContext("2d")!;
          const rect = canvasRef.getBoundingClientRect();
          const x = e.x - rect.left;
          const y = e.y - rect.top;
          ctx.fillStyle = "red";
          ctx.fillRect(x - 25, y - 25, 50, 50);
        }}
      />
    </div>
  );
}

export function App() {
  return <Canvas />;
}

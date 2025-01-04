const LoadingSpinner = () => {
  return (
    <section className="h-screen bg-background flex items-center justify-center">
      <div className="size-24 rounded-full border-[15px] border-[#ddd] border-t-primary animate-spin"></div>
    </section>
  );
};

export default LoadingSpinner;

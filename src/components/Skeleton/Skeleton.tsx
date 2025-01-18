const Skeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse p-20">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="w-full h-2 bg-gray-200 rounded-full mb-4"></div>
      ))}
    </div>
  );
};

export default Skeleton;

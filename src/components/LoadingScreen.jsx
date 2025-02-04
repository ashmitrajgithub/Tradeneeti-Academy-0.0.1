export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-black">
      <div className="relative flex flex-col items-center space-y-4">
        {/* Spinner with image inside */}
        <div className="relative">
          <div className="animate-spin h-24 w-24 border-t-4 border-blue-500 border-solid rounded-full"></div>
          <img 
            src="./assets/logo.ico" 
            alt="Loading" 
            className="absolute inset-0 m-auto h-16 w-16"
          />
        </div>
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}

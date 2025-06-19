export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Texte de chargement */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">
            Chargement en cours...
          </h2>
          <p className="text-sm text-gray-500">Veuillez patienter un instant</p>
        </div>

        {/* Points animés */}
        <div className="flex justify-center space-x-1 mt-4">
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

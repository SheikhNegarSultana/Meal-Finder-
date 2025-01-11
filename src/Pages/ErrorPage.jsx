import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-red-700 flex flex-col items-center justify-center text-white p-6">
      <div id="error-page" className="bg-white text-red-700 p-8 rounded-lg shadow-md animate-pulse flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-md">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

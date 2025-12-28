import {useState} from "react";

export const useThrowAsyncError = () => {
  const [, setError] = useState<Error | null>(null);
  return (error: Error) => setError(() => { throw error });
};

const COPY_TIMEOUT = 2000;

export const copyWithTimeout = (
  content: string,
  dispatcher: React.Dispatch<React.SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(content);
  dispatcher(true);
  setTimeout(() => {
    dispatcher(false);
  }, COPY_TIMEOUT);
};

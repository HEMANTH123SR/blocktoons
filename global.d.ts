interface Window {
  diam: {
    connect: () => Promise<{ message: { diamPublicKey: string }[] }>;
  };
}

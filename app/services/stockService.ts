export async function fetchStockData() {
  // In a real application, this would be an API call to your backend
  // For this example, we'll return mock data for the last 7 days
  return [
    { code: "AAPL", name: "Apple Inc." },
    { code: "GOOGL", name: "Alphabet Inc." },
    { code: "MSFT", name: "Microsoft Corporation" },
    { code: "AMZN", name: "Amazon.com, Inc." },
    { code: "FB", name: "Facebook, Inc." },
    { code: "TSLA", name: "Tesla, Inc." },
    { code: "NVDA", name: "NVIDIA Corporation" }
  ]
}


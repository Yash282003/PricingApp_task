import "./App.css";
import BasicTable from "./components/Table";

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h2>API Pricing</h2>
          <p>
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
          <div className="pricingContainer">
            <BasicTable />
          </div>
          <h3>Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
          <h3>Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

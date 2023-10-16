import React from "react";
import { Typography } from "@mui/material";
import image1 from "../../assets/one.jpg";
function Module1Html() {
  return (
    <div className="OnShow">
      <Typography variant="h4" style={{ textAlign: "center" }}>
        ML-Powered Data Analytics for Reducing Delinquency and Optimising Credit
        Risk
      </Typography>

      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        In the dynamic world of lending, financial institutions face the ongoing
        challenge of reducing delinquency rates and effectively managing risk.
        To tackle these hurdles head-on, lenders are turning to the power of
        advanced machine learning (ML) data analytics. By leveraging data-driven
        insights, ML models have the potential to revolutionise the lending
        industry, enabling lenders to make informed decisions and optimise their
        customer portfolios.
      </Typography>
      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        Corestrat’s groundbreaking no-code ML model builder platform, Model.ai,
        coupled with our cutting-edge data visualisation tools, provides lenders
        with a comprehensive toolkit to achieve these objectives. In this blog
        post, we will explore how advanced ML data analytics can drive down
        delinquency rates and facilitate the creation of risk-optimised customer
        portfolios, while highlighting the transformative capabilities of
        Model.ai and predictive analytics.
      </Typography>
      <img
        src={image1}
        style={{ height: "18rem", width: "29rem", marginLeft: "14rem" }}
      />
      <Typography
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        variant="h5"
      >
        Understanding Delinquency Rates and Risk Optimisation
      </Typography>
      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        Delinquency rates, a crucial metric for lenders and digital banks,
        indicate the percentage of borrowers who fail to make timely payments.
        By effectively managing and reducing delinquency rates, lenders can
        mitigate financial risks and strengthen their overall portfolio.
        However, traditional risk assessment models often fall short of
        accurately predicting default probabilities and identifying potential
        delinquencies.
      </Typography>
      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        Advanced machine learning data analytics presents a groundbreaking
        solution to these challenges. By leveraging large volumes of historical
        customer data, ML algorithms can uncover intricate patterns and hidden
        insights. These models can effectively predict the likelihood of
        delinquency based on a comprehensive set of factors, including credit
        history, income levels, employment data, and more.{" "}
      </Typography>
      <Typography
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        variant="h5"
      >
        Use Cases: Boosting Profitability and Optimising Risk with Predictive
        Analytics and ML
      </Typography>
      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        ML models excel in detecting patterns and anomalies within vast volumes
        of data, making them invaluable for fraud detection and prevention in
        lending. By analysing historical transactional data, borrower behaviour,
        and patterns associated with fraudulent activities, ML algorithms can
        identify potential fraud instances in real time. By integrating ML-based
        fraud detection systems, lenders can significantly reduce financial
        losses, protect their customers, and strengthen their risk management
        frameworks.
      </Typography>
      <Typography
        style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "2rem" }}
      >
        Predictive analytics and ML algorithms can revolutionise credit scoring
        by incorporating a broader range of variables and data sources. Lenders
        can leverage these technologies to build more accurate risk models,
        taking into account factors such as credit history, income levels,
        employment data, and alternative data sources. By enhancing credit
        scoring accuracy, lenders can make more informed decisions regarding
        loan approvals, interest rates, and credit limits, ultimately reducing
        default rates and increasing profitability.
      </Typography>
    </div>
  );
}

export default Module1Html;

# SEC EDGAR Form 10-K / 10-Q


Rearc's **SEC EDGAR Form 10-K / 10-Q** data product offers all annual and quarterly reports available in the SEC EDGAR database from 1993 to the present. 

The data is offered as .nc files in the XBRL format. Data in XLSX, plain text, and tabular format is available on request. The dataset updates daily, but real-time EDGAR data feeds are available on request.

We also offer the full EDGAR database as a separate data product ([link](TODO)).

### Features & Use Cases:

- **Perfect for Machine Learning & AI:** SEC Forms 10-K and 10-Q provide a large corpus of high-quality financial text and tabular data. Projects like [BloombergGPT](https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/) have shown that SEC filings can be a valuable tool for training State-of-the-Art Large Language Models (LLMs) or in Retrieval-Augmented Generation (RAG) systems.
- **Full SEC Reports:** Instantly access the full breadth of SEC reports via AWS Data Exchange and avoid obstacles such as rate-limiting and parsing .IDX files.
- **XBRL Format:** The XBRL format of these reports includes a full HTML version of the report, plus machine-readable versions of key tables and other attached exhibits.

### Included Data:

- **index.parquet:** This index file contains a row for each form 10-K/10-Q available, with the report's file path and information like company, CIK, and filing date.
- **Form 10-K/10-Q .nc Files:** Each of these files contains a single Form 10-K or 10-Q filing in XBRL format.

More information on SEC Form 10-K can be found on [the SEC's Investor website](https://www.investor.gov/introduction-investing/investing-basics/glossary/form-10-k).

**License:** SEC data is in the [Public Domain](https://www.sec.gov/privacy#dissemination), access to this data is governed by the [Rearc Terms of Service](https://rearc-data-public-assets.s3.amazonaws.com/Rearc_Data_DSA.pdf).

## What is SEC EDGAR?

SEC EDGAR is the primary source for financial reports and disclosures for publicly listed companies in the USA.

> EDGAR, the Electronic Data Gathering, Analysis, and Retrieval system, is the primary system for companies and others submitting documents under the Securities Act of 1933, the Securities Exchange Act of 1934, the Trust Indenture Act of 1939, and the Investment Company Act of 1940. 

> Containing millions of company and individual filings, EDGAR benefits investors, corporations, and the U.S. economy overall by increasing the efficiency, transparency, and fairness of the securities markets. The system processes about 3,000 filings per day, serves up 3,000 terabytes of data to the public annually, and accommodates 40,000 new filers per year on average.

More information is available on the [SEC website](https://www.sec.gov/edgar/about).

## Where to Access

This dataset is currently refreshed and available at the following locations:

- [Amazon Data Exchange](TODO)

## About Rearc

We understand the complexities involved with acquiring data from disparate sources and transforming them to meet your
analytical needs. We work with lots of free publicly available datasets and publish them at a variety of endpoints for
our subscribers to consume them in an easy consistent fashion. Our goal is always to remove the heavy lifting involved
with acquiring and processing data so you can focus on data-driven insights that matter to your business. To learn more
about us and how we can help you meet your goals with ready-to-use data, come find us at [rearc.io](rearc.io)!

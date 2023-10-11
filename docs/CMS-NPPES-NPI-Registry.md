# CMS - National Provider Identifier (NPI) registry

This listing provides access to the National Provider Identifier (NPI) registry, which is maintained by the National
Plan and Provider Enumeration System (NPPES). The NPI registry contains comprehensive information about healthcare
providers, including their unique identification numbers, contact details, and other relevant data. This dataset is
maintained and released by the Centers for Medicare & Medicaid Services (CMS).

Explanations of codes are available from
CMS: https://www.cms.gov/regulations-and-guidance/administrative-simplification/nationalprovidentstand/downloads/data_dissemination_file-code_values.pdf

All tables are updated monthly. A common `npi` ID field connects all the tables.

- [Official Documentation](https://www.cms.gov/medicare/regulations-guidance/administrative-simplification)
- [Terms of Service](https://rearc-data-public-assets.s3.amazonaws.com/Rearc_Data_DSA.pdf)

# What is the NPI Registry?

The NPI registry contains FOIA-releasable information about all healthcare providers in the US. This generally includes
names of doctors and medical centers, public contact information, addresses, and medical specializations. Each provider
is uniquely identified by their NPI number.

> The National Provider Identifier (NPI) is a Health Insurance Portability and Accountability Act (HIPAA) Administrative
> Simplification Standard. The NPI is a unique identification number for covered health care providers. Covered health
> care providers and all health plans and health care clearinghouses must use the NPIs in the administrative and financial
> transactions adopted under HIPAA. The NPI is a 10-position, intelligence-free numeric identifier (10-digit number). This
> means that the numbers do not carry other information about healthcare providers, such as the state in which they live
> or their medical specialty. The NPI must be used in lieu of legacy provider identifiers in the HIPAA standards
> transactions.

> As outlined in the Federal Regulation, The Health Insurance Portability and Accountability Act of 1996 (HIPAA),
> covered providers must also share their NPI with other providers, health plans, clearinghouses, and any entity that may
> need it for billing purposes.

## Data sets

| Name                           | Source                                                               | Documentation                                                                                   | Description                                                                                                            |
|:-------------------------------|:---------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `npi_data_monthly`             | [CMS NPPES NPI Files](https://download.cms.gov/nppes/NPI_Files.html) | [NPI Standard](https://www.cms.gov/medicare/regulations-guidance/administrative-simplification) | This is the bulk of the NPI registry, containing a wide variety of data about each NPI-registered healthcare provider. |
| `npi_primary_location_monthly` | [CMS NPPES NPI Files](https://download.cms.gov/nppes/NPI_Files.html) | [NPI Standard](https://www.cms.gov/medicare/regulations-guidance/administrative-simplification) | Stores information about a practice's additional location, if applicable.                                              |
| `npi_endpoint_monthly`         | [CMS NPPES NPI Files](https://download.cms.gov/nppes/NPI_Files.html) | [NPI Standard](https://www.cms.gov/medicare/regulations-guidance/administrative-simplification) | Provides various ways a practice can be found, such as email addresses or URLs.                                        |
| `npi_othername_monthly`        | [CMS NPPES NPI Files](https://download.cms.gov/nppes/NPI_Files.html) | [NPI Standard](https://www.cms.gov/medicare/regulations-guidance/administrative-simplification) | Provides alternative names a practice goes by.                                                                         |

## Data Exchanges

This dataset is currently refreshed and available at the following locations:

- [Amazon Data Exchange](https://us-east-1.console.aws.amazon.com/dataexchange/home?region=us-east-1#/products/prodview-6hrha5c7pe3am)
- [Snowflake Data Exchange](https://www.snowflake.com/datasets/rearc/)
- [Databricks Marketplace](https://www.databricks.com/product/marketplace)

## About Rearc

We understand the complexities involved with acquiring data from disparate sources and transforming them to meet your
analytical needs. We work with lots of free publicly available datasets and publish them at a variety of endpoints for
our subscribers to consume them in an easy consistent fashion. Our goal is always to remove the heavy lifting involved
with acquiring and processing data so you can focus on data-driven insights that matter to your business. To learn more
about us and how we can help you meet your goals with ready-to-use data, come find us at [rearc.io](rearc.io)!

# EpiLake: Influenza Global Surveillance

## General Information

EpiLake Flu provides comprehensive data on the spread of influenza worldwide. It is sourced from various authorities, including both nation-specific and international agencies. This atlas transforms all of this data, adds additional predictive features, and puts it all in one place to make it ready for business use.

While there are some rollup sources of influenza data, such as from the WHO or the CDC, many countries and states publish their data in their own format via their own mechanisms through their own health agencies. This region-specific data is often more well-defined and sometimes contains finer details than what is readily available globally. On top of the broad, global data sources, this atlas provides a growing variety of those specific data sources to offer the most comprehensive influenza dataset on the market.

While our other Influenza product, Influenza Global Data Atlas, seeks to keep all data in its original format, as close to the published version as possible, EpiLake Flu is a further transformed, enriched dataset. Non-tabular sources are converted to tables, data is translated to English, metrics are aggregated across various dimensions and sources, additional sources are brought in to enrich the Influenza data, and we've even created a suite of prediction metrics to top it all off.

## Key Attributes

While different countries and international agencies provide different data, the following kinds of data are generally
available:

- **Influenza Case and Test Counts**: Numbers of positive tests for Flu, numbers of total tests, numbers of diagnoses of
  flu, etc.
- **Influenza Subtypes**: Counts of laboratory confirmed cases of Flu subtypes, such as A (H3N2), B (Yamagata), and
  more.
- **Other Influenza-Like Illness (ILI) Data**: Some datasets include positive tests results for Adenovirus, RSV, Covid,
  Rhinovirus, HPIV, and other common respiratory viruses.
- **Hospitalization and Severity**: Some datasets include hospitalization counts for ILI or confirmed Flu cases.
- **Regional and Demographic Breakdowns**: Some datasets include fine-grained regional, age, gender, or other
  demographic breakdowns.
- **Influenza Metric Predictions**: Using dozens of the most reliable forecasts available in addition to SDoH data, we include aggregated predictions of key time-series Influenza metrics - cases, hospitalizations, fatalities, etc.

## Additional Information

- **[Terms of Service](https://rearc-data-public-assets.s3.amazonaws.com/Rearc_Data_DSA.pdf)**

## Sources

- [WHO](https://www.who.int/tools/flunet): The World Health Organization's FluNet aggregation system.
- [ECDC](https://www.ecdc.europa.eu/en/about-us/partnerships-and-networks/disease-and-laboratory-networks/eisn)
  and [Flu News Europe](https://flunewseurope.org/): The European Center for Disease Control, in collaboration with the
  WHO.
- [CDC FluSurv-Net](https://www.cdc.gov/flu/weekly/influenza-hospitalization-surveillance.htm)
  and [FluView](https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html): USA CDC sources for Flu surveillance data in
  the United States.
- [NNDSS (Australia)](https://www.health.gov.au/our-work/nndss): Australia's National Notifiable Diseases Surveillance
  System.
- [CIRID (Canada)](https://www.canada.ca/en/public-health/services/surveillance/respiratory-virus-detections-canada.html):
  Canada's respiratory virus detection reports.
- [SSI (Denmark)](https://en.ssi.dk/surveillance-and-preparedness/surveillance-in-denmark/annual-reports-on-disease-incidence/influenza-2022-2023):
  Denmark's weekly reports from ILI monitoring.
- [Terviseamet (Estonia)](https://www.terviseamet.ee/et/nakkushaigused/tervishoiutootajale/nakkushaigustesse-haigestumine/gripp-ja-gripilaadsetesse):
  Estonia's Health Board's report of Flu and ILI reports.
- [RKI (Germany)](https://edoc.rki.de/handle/176904/7797/recent-submissions): The Robert Koch Institute's GrippeWeb
  weekly report.
- [Panama Ministry of Health](https://www.minsa.gob.pa/): Panama's official weekly epidemiological reports.
- [SVGE (Spain)](https://vgripe.isciii.es/inicio.do): Spain's official weekly epidemiological reports.
- [NIDSS (Taiwan)](https://nidss.cdc.gov.tw/en/Cdcwnh/CDCWNH01): Taiwan's official weekly epidemiological dashboard.
- [UK Health Security Agency](https://www.gov.uk/government/statistics/national-flu-and-covid-19-surveillance-reports-2023-to-2024-season):
  UK's national Flu and Covid monitoring reports.

## Data Exchanges

This dataset is currently refreshed and available at the following locations:

- [Snowflake Data Exchange](https://www.snowflake.com/datasets/rearc/)

## About Rearc

We understand the complexities involved with acquiring data from disparate sources and transforming them to meet your
analytical needs. We work with lots of free publicly available datasets and publish them at a variety of endpoints for
our subscribers to consume them in an easy consistent fashion. Our goal is always to remove the heavy lifting involved
with acquiring and processing data so you can focus on data-driven insights that matter to your business. To learn more
about us and how we can help you meet your goals with ready-to-use data, come find us at [rearc.io](rearc.io)!

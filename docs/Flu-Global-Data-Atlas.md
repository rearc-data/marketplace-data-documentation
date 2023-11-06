# Influenza Global Data Atlas

## General Information

The Influenza Global Data Atlas provides comprehensive data on the spread of influenza worldwide. It is sourced from
various authorities, including both nation-specific and international agencies. This atlas puts all that data in one
place.

While there are some rollup sources of influenza data, such as from the WHO or the CDC, many countries and states
publish their data in their own format via their own mechanisms through their own health agencies. This region-specific
data is often more well-defined and sometimes contains finer details than what is readily available globally. On top of
the broad, global data sources, this atlas provides a growing variety of those specific data sources to offer the most
comprehensive influenza dataset on the market.

This atlas endeavours to preserve the data as it was originally published, only improving its accessibility. Where data
is not published in tabular format, we convert it into a table. Column names are cleaned and translated to English, and
data types are normalized. Non-English region names are generally translated to English. Otherwise, this product
republishes the data purely as it was originally reported. We do not attempt to fill gaps that the sources do not fill
or estimate values the sources do not explicitly provide.

The dataset is updated daily, but most of the underlying data sources are weekly summaries.

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

## Tables

| Name                                         | Source                    | Description                                                                                 |
|:---------------------------------------------|:--------------------------|:--------------------------------------------------------------------------------------------|
| `FLU_USA_HOSP_RATE_WEEKLY_CDC`               | CDC                       | USA - Weekly Flu-related hospitalization rates, broken down by age, sex, and race           |
| `FLU_USA_NOVEL_CASECOUNTS_CDC`               | CDC                       | USA - Seasonal counts of various Flu subtypes                                               |
| `FLU_USA_NOVEL_CHARACTERISTICS_CDC`          | CDC                       | USA - Seasonal Cause and demographic breakdown of cause of Flu infections                   |
| `FLU_USA_NOVEL_MAP_CDC`                      | CDC                       | USA - Seasonal counts of various Flu subtypes, broken down by state                         |
| `FLU_AUSTRALIA_TESTS_BIWEEKLY_NNDSS`         | NNDSS                     | Australia - Biweekly provincial and national Flu counts; includes basic stats               |
| `FLU_CANADA_TESTS_WEEKLY`                    | CIRID                     | Canada - Weekly Flu case counts, broken down by subtype                                     |
| `FLU_DENMARK_ILI_WEEKLY_SSI`                 | SSI                       | Denmark - Weekly percent of ILI tests that came back positive                               |
| `FLU_DENMARK_TESTS_HOSP_DEATHS_WEEKLY_SSI`   | SSI                       | Denmark - Weekly hospitalization counts and rates, broken down by age, sex, and region      |
| `FLU_ECDC_ACTIVITY_DATAGRID`                 | European CDC              | Europe / Global - Weekly Flu intensity and dominant strains by region                       |
| `FLU_EU_ACTIVITY_MAP_WEEKLY_ECDC`            | European CDC              | Europe / Global - Weekly Flu intensity and dominant strains by region, for WHO map layout   |
| `FLU_ESTONIA_TESTS_AND_CASES_ILI_WEEKLY`     | Terviseamet               | Estonia - Weekly Flu counts, broken down by type; includes ILI and UHVN                     |
| `FLU_GERMANY_ILI_WEEKLY_GRIPPEWEB`           | RKI                       | Germany - Weekly ILI tests and positivity counts, from GrippeWeb                            |
| `FLU_GERMANY_TESTS_WEEKLY_RKI`               | RKI                       | Germany - Weekly Flu subtype counts, from RKI AGI reports                                   |
| `FLU_GLOBAL_TESTS_WEEKLY_WHO_FLUNET`         | WHO                       | Global - Weekly lab-identified Flu and other ILI counts broken down by country              |
| `FLU_PANAMA_CASES_WEEKLY_MINSA`              | Panama Ministry of Health | Panama - Weekly cases and rates of Flu                                                      |
| `FLU_PANAMA_TESTS_WEEKLY_MINSA`              | Panama Ministry of Health | Panama - Weekly lab-identified Flu subtype counts                                           |
| `FLU_SPAIN_TESTS_WEEKLY_SVGE`                | SVGE                      | Spain - Weekly lab-confirmed Flu counts                                                     |
| `FLU_TAIWAN_CASES_ILI_VISITS_NHI`            | NIDSS                     | Taiwan - Weekly ILI case counts by region                                                   |
| `FLU_TAIWAN_CASES_ILI_VISITS_PCT_WEEKLY_NHI` | NIDSS                     | Taiwan - Weekly rates of how many outpatients are for ILI diseases, by region               |
| `FLU_TAIWAN_TESTS_WEEKLY_LARS`               | NIDSS                     | Taiwan - Weekly Flu subtype counts                                                          |
| `FLU_UK_ARI_WEEKLY_NHS`                      | UK Health Security Agency | UK - Weekly ARI diagnoses and outbreaks broken down by social context                       |
| `FLU_UK_HOSP_BY_AGEGRP_WEEKLY_NHS`           | UK Health Security Agency | UK - Weekly Flu hospitalization rates, broken down by age                                   |
| `FLU_UK_HOSP_BY_REGION_WEEKLY_NHS`           | UK Health Security Agency | UK - Weekly Flu hospitalization rates, broken down by region                                |
| `FLU_UK_HOSP_BY_TYPE_WEEKLY_NHS`             | UK Health Security Agency | UK - Weekly Flu hospitalization rates, broken down by subtype                               |
| `FLU_UK_HOSP_OVERALL_WEEKLY_NHS`             | UK Health Security Agency | UK - Weekly Flu hospitalization rates                                                       |
| `FLU_UK_TESTS_WEEKLY_NHS_DATAMARTFLU`        | UK Health Security Agency | UK - Weekly lab-confirmed Flu cases, broken down by subtype                                 |

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

# COVID-19 Global Data Atlas

## General Information

The COVID-19 Global Data Atlas is your go-to resource for a comprehensive view of the COVID-19 landscape worldwide. We bring together data from various health authorities, both at the national and international levels to help you make informed decisions, assess trends, and gain valuable insights into the ongoing global impact of the COVID-19 Pandemic.

While general COVID-19 data is available at the global level, additional unique data is often published by various national and local governments, reflecting their local nuances. Our atlas embraces this diversity, offering a more detailed and comprehensive perspective compared to global summaries. We curate a growing collection of specific data sources, ensuring you get a richer understanding of the global picture.

Our goal with this product is to make the data more accessible without sacrificing its authenticity. This involves converting non-tabular data into tables, cleaning up column names, and translating non-English terms. The result is a clear and unembellished representation of original published data.

The dataset is updated daily, although the underlying data sources mostly provide weekly summaries. We aim to provide you with the most up-to-date information while respecting the reporting cadence of the original sources.

## Key Attributes

While different countries and international agencies provide different data, the following kinds of data are generally available:

- **COVID-19 Case and Test Counts**: Numbers of positive tests for COVID-19, numbers of total tests, numbers of diagnoses, etc.
- **COVID-19 Variants**: Counts of laboratory confirmed cases of specific COVID-19 variants.
- **COVID-19 Vaccinations**: Information on vaccine administrations, including providers and dosages.
- **COVID-19 Predictions**: Forward-looking forecasts from various institutions.
- **Hospitalization and Severity**: Some datasets include hospitalization counts for COVID-19 cases.
- **Regional and Demographic Breakdowns**: Some datasets include fine-grained regional, age, gender, or other demographic breakdowns.

| Name                                            | Source                    | Description                                                                                             |
|:------------------------------------------------|:--------------------------|:--------------------------------------------------------------------------------------------------------|
| `FLU_USA_HOSPITALS_WEEKLY_HHS_HEALTHDATA`| [US Department of Health and Human Services](https://healthdata.gov/)| Weekly hospital capacity and COVID-19 impact data for USA hospitals, including beds, admissions, etc. |
| `COVID19_USA_VACCINATIONS_COUNTY` | [CDC](https://data.cdc.gov/Vaccinations/COVID-19-Vaccinations-in-the-United-States-County/8xkx-amqh/about_data)| U.S. County-level COVID-19 vaccination data|
| `COVID_19_US_VACCINATING_PROVIDER_LOCATIONS` | [CDC](https://data.cdc.gov/Vaccinations/Vaccines-gov-COVID-19-vaccinating-provider-locatio/5jp2-pgaw/about_data)| U.S. COVID-19 vaccinating provider locations data|
| `COVID19_USA_CONFIRMED_7DAV_INCIDENCE_PROP_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Daily data on the 7-day average incidence proportion of confirmed COVID-19 cases in the USA |
| `COVID19_USA_CONFIRMED_ADMISSIONS_COVID_1D_PROP_7DAV_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Daily data on the 7-day average proportion of confirmed COVID-19 admissions in the USA |
| `COVID19_USA_COVID_AG_SMOOTHED_PCT_POSITIVE_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on the percentage of positive COVID-19 antigen tests in the USA |
| `COVID19_USA_DEATHS_7DAV_INCIDENCE_PROP_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Daily data on the 7-day average incidence proportion of COVID-19 deaths in the USA |
| `COVID19_USA_SMOOTHED_ADJ_CLI_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on adjusted CLI in the USA |
| `COVID19_USA_SMOOTHED_WCLI_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on COVID-like illness (CLI) in the USA |
| `COVID19_USA_SMOOTHED_WCOVID_VACCINATED_APPOINTMENT_OR_ACCEPT_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on COVID-19 vaccination appointment or acceptance in the USA |
| `COVID19_USA_SMOOTHED_WHH_CMNTY_CLI_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on community-level CLI in the USA |
| `COVID19_USA_SMOOTHED_WWEARING_MASK_7D_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily data on mask-wearing behavior in the USA|
| `COVID19_USA_SUM_ANOSMIA_AGEUSIA_SMOOTHED_SEARCH_DAILY_CMU`| [Carnegie Mellon University Delphi Group](https://delphi.cmu.edu/)   | Smoothed daily search data on anosmia and ageusia symptoms in the USA |
| `COVID19_USA_CASES_DEATHS_BY_COUNTY_DAILY_NYT`| [The New York Times](https://www.nytimes.com/interactive/2021/us/covid-cases.html)   | Daily cases and deaths by US county |
| `COVID19_USA_CASES_DEATHS_BY_COUNTY_ROLLING_AVG_DAILY_NYT`| [The New York Times](https://www.nytimes.com/interactive/2021/us/covid-cases.html)   | Daily rolling average of cases and deaths by US county |
| `COVID19_USA_CASES_DEATHS_BY_STATE_DAILY_NYT`| [The New York Times](https://www.nytimes.com/interactive/2021/us/covid-cases.html)   | Daily cases and deaths by US state |
| `COVID19_USA_CASES_DEATHS_BY_STATE_ROLLING_AVG_DAILY_NYT`| [The New York Times](https://www.nytimes.com/interactive/2021/us/covid-cases.html)   | Daily rolling average of cases and deaths by US state |
| `COVID19_USA_PREDICTION_COUNTY_WEEKLY_UCB`| [Yu Group](https://www.stat.berkeley.edu/~yugroup/people.html)| Weekly predictions of COVID-19 deaths in U.S. counties with confidence intervals |
| `COVID19_USA_PREDICTION_SEVERITY_WEEKLY_UCB`| [Yu Group](https://www.stat.berkeley.edu/~yugroup/people.html)| Weekly predictions of COVID-19 severity metrics in U.S. counties and hospitals |
| `CANADA_VACCINATION_ADMINISTRATION_DOSENUMBER2`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/)| Canadian COVID-19 vaccination data by dose number, including doses administered and reported |
| `CANADA_VACCINATION_COVERAGE_AGE_AND_SEX`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/) | Vaccine coverage by age, sex, doses, and proportions in Canada |
| `CANADA_VACCINATION_COVERAGE_AGE_AND_SEX`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/) | Temporal trends in vaccine coverage by age and sex in Canada |
| `CANADA_VACCINATION_COVERAGE_MAP`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/) | Vaccine coverage map in Canada by age groups, doses, and proportions |
| `CANADA_VACCINATION_COVERAGE_VACCINE_TYPE`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/) | Vaccine coverage in Canada by vaccine type, doses, and proportions |
| `COVID19_CANADA_VAX_DISTRIBUTION_PHAC`| [Government of Canada Health Infobase](https://health-infobase.canada.ca/) | Distribution of COVID-19 vaccine doses in Canada by type, age, and totals |
| `COVID19_CANADA_TRACKER_NATIONAL_AGGREGATE_DATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | National COVID-19 metrics, including cases, hospitalizations, and vaccinations |
| `COVID19_CANADA_TRACKER_PROVINCES_LEVEL_DATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | COVID-19 data at the provincial level, detailing cases, vaccinations, and more |
| `COVID19_CANADA_TRACKER_PROVINCES_METADATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | Metadata for Canadian provinces, including population, GDP, and geographic details |
| `COVID19_CANADA_TRACKER_REGIONS_AGGREGATE_DATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | Aggregated COVID-19 statistics for different regions, covering various metrics |
| `COVID19_CANADA_TRACKER_REGIONS_LEVEL_DATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | COVID-19 data for specific regions, including cases, hospitalizations, and vaccinations |
| `COVID19_CANADA_TRACKER_REGIONS_METADATA`| [COVID-19 Tracker Canada Project](https://covid19tracker.ca/) | Metadata for Canadian regions, providing names and unique identifiers |
| `UK_COVID_VACCINE_NATION`| [UK Government](https://coronavirus.data.gov.uk/) | Aggregated UK Government data on COVID-19 vaccine metrics for the entire nation |
| `UK_COVID_VACCINE_OVERVIEW`| [UK Government](https://coronavirus.data.gov.uk/) | COVID-19 vaccine metrics overview |
| `EU_COVID_DAILY_CASES_AND_DEATHS`| [ECDC](https://www.ecdc.europa.eu/en)   | ECDC's daily European COVID-19 cases and deaths |
| `EU_COVID_HOSPITAL_ICU_ADMISSION_RATES`| [ECDC](https://www.ecdc.europa.eu/en)   | European COVID-19 hospital/ICU rates |
| `EU_COVID_VACCINE_OVERVIEW`| [ECDC](https://www.ecdc.europa.eu/en)   | European vaccine data, weekly doses, and types |
| `EU_COVID_VACCINE_OVERVIEW_WEEKLY_ECDC`| [ECDC](https://www.ecdc.europa.eu/en)   | ECDC's weekly European COVID-19 vaccine data |
| `FRANCE_SUBNATIONAL_BY_DEPT`| [République Française](https://www.data.gouv.fr/fr/) | Vaccine distribution by department at subnational level |
| `FRANCE_SUBNATIONAL_BY_DEPT_AND_AGE`| [République Française](https://www.data.gouv.fr/fr/) | Vaccine distribution by department and age at subnational level |
| `FRANCE_SUBNATIONAL_BY_DEPT_AND_REGION`| [République Française](https://www.data.gouv.fr/fr/) | Vaccine distribution by department and region at subnational level |
| `COVID19_FRANCE_SUBNATIONAL_VACCINES_BY_REGION`| [République Française](https://www.data.gouv.fr/fr/) | Vaccine distribution by region at subnational level |
| `COVID19_FRANCE_SUBNATIONAL_VACCINES_BY_REGION_AND_AGE`| [République Française](https://www.data.gouv.fr/fr/) | Vaccine distribution by age and region at subnational level |
| `COVID19_GERMANY_VAX_BY_DOSE_DAILY_UPDATED_MONTHLY_RKI`| [Robert Koch Institut](https://www.rki.de/DE/Home/homepage_node.html) | Daily updates of vaccine doses distributed by dose number in Germany |
| `COVID19_GERMANY_VAX_BY_REGION_AGE_DOSE_CUMULATIVE_MONTHLY_RKI`| [Robert Koch Institut](https://www.rki.de/DE/Home/homepage_node.html)) | Total and percentage of doses by age group and vaccination dose |
| `COVID19_GERMANY_VAX_BY_REGION_MFG_CUMULATIVE_MONTHLY_RKI`| [Robert Koch Institut](https://www.rki.de/DE/Home/homepage_node.html) | Cumulative doses by vaccine manufacturer for different regions in Germany |
| `COVID19_ITALY_VACCINE_ADMINISTRATION`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Detailed vaccine administration data including dose type, region, and demographics |
| `COVID19_ITALY_VACCINE_ADMINISTRATION_AGGREGATED`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Aggregated vaccine administration data with cumulative doses and booster opportunities |
| `COVID19_ITALY_VACCINE_ADMINISTRATION_PIVOTED`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Pivot table format of vaccine administration data by date, manufacturer, and age range |
| `COVID19_ITALY_VACCINE_ADMINISTRATION_TOTAL_DOSES_BY_FORN_N2_N1`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Total doses administered by foreign region code (forn_n2_n1) |
| `COVID19_ITALY_VACCINE_DISTRIBUTION`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Vaccine distribution data with details on delivered doses by manufacturer and region |
| `COVID19_ITALY_VACCINE_DISTRIBUTION_AGGREGATED`| [Ministero della Salute](https://www.salute.gov.it/portale/home.html) | Aggregated vaccine distribution data with dose volume and cumulative distribution |
| `COVID19_SPAIN_VAX_BY_DOSE_WEEKLY_CCAES` | [Ministerio de Sanidad](sanidad.gob.es) | COVID-19 vacinnation rates and administration by dose in Spain|
| `COVID19_SPAIN_VAX_BY_MFG_WEEKLY_CCAES` | [Ministerio de Sanidad](sanidad.gob.es) | COVID-19 vacinnation rates and administration by manufacturer in Spain|
| `COVID19_JAPAN_VAX_BY_MFG_GENDER_DOSE_MHLW_MONTHLY`| [Japan Ministry of Health, Labour, and Welfare](https://www.mhlw.go.jp/index.html)   | Vaccine distribution and dosage by manufacturer and gender |
| `COVID19_SOUTHKOREA_DAILY_VACCINATION_STATUS`| [Korean Disease Control and Prevention Agency](https://ncv.kdca.go.kr)   | Daily vaccination statistics by dose type, manufacturer, and winter doses |
| `COVID19_SOUTHKOREA_DAILY_VACCINATION_STATUS_BY_HEALTH_CENTER`| [Korean Disease Control and Prevention Agency](https://ncv.kdca.go.kr) | Vaccination data by health center, including dose counts and source updates |
| `COVID19_SOUTHKOREA_DAILY_VACCINATION_STATUS_BY_PROVINCE`| [Korean Disease Control and Prevention Agency](https://ncv.kdca.go.kr)   | Provincial vaccination metrics, including dose rates and population statistics |
| `COVID19_SOUTHKOREA_VACCINATION_STATUS_AGE_GENDER`| [Korean Disease Control and Prevention Agency](https://ncv.kdca.go.kr)   | Comprehensive age and gender-specific vaccination data, including inoculation rates |
| `COVID19_TAIWAN_VAX_BY_MFG_DOSE_DAILY_TCDC`| [Taiwan National Infections Disease Statistics System](https://nidss.cdc.gov.tw/) | Taiwan COVID-19 vaccine statistics by manufacturer, including doses and cumulative injections |
| `OWID_COVID_DATA`| [Our World in Data](https://ourworldindata.org/) | Global COVID-19 cases, deaths, and testing data |
| `CTTI_COVID_DATA`| [CTTI](https://ctti-clinicaltrials.org/)   | COVID-19 studies from the Clinical Trials Transformation Initiative (CTTI)|


## Additional Information

- **[Terms of Service](https://rearc-data-public-assets.s3.amazonaws.com/Rearc_Data_DSA.pdf)**

## Sources

- [Carnegie Mellon University Delphi COVIDcast project](https://delphi.cmu.edu/)
- [Clinical Trials Transformation Initiative](https://ctti-clinicaltrials.org/)
- [COVID-19 Tracker Canada Project](https://covid19tracker.ca/)
- [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en)
- [Government of Canada Health Infobase](https://health-infobase.canada.ca/)
- [Japan Ministry of Health, Labour, and Welfare](https://www.mhlw.go.jp/index.html)
- [Korean Disease Control and Prevention Agency](https://ncv.kdca.go.kr)
- [Ministerio de Sanidad](sanidad.gob.es)
- [Ministero della Salute](https://www.salute.gov.it/portale/home.html)
- [Our World in Data](https://ourworldindata.org/)
- [Prime Minister's Office of Japan](https://www.kantei.go.jp/)
- [République Française](https://www.data.gouv.fr/fr/)
- [Robert Koch Institut](https://www.rki.de/DE/Home/homepage_node.html)
- [Taiwan National Infections Disease Statistics System](https://nidss.cdc.gov.tw/)
- [The New York Times](https://www.nytimes.com/interactive/2021/us/covid-cases.html)
- [UK Government](https://coronavirus.data.gov.uk/)
- [U.S. Centers for Disease Control and Prevention](https://data.cdc.gov)
- [Yu Group](https://www.stat.berkeley.edu/~yugroup/people.html)


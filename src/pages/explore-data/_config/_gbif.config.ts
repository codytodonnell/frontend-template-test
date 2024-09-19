import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
  data: {
    /**
     * Data definition for the initial items list
     */
    list: {
      /**
       * URL or path to the data source
       */
      source: "https://api.gbif.org/v1/occurrence/search",
      /**
       * Key-value object of params that should always be included in the query URL
       */
      staticParams: null,
      /**
       * Name of the field in the data that represents a unique identifier for each record.
       */
      idField: "key",
      /**
       * Method by which data should be filtered, either client or server.
       */
      queryMode: "server",
    },
    /**
     * Data definition for the item detail page
     */
    detail: {
      source: "https://api.gbif.org/v1/occurrence",
      staticParams: null,
      idField: "key",
      queryMode: "server",
    }
  },
  pages: {
    index: {
      /**
       * Title to appear at the top of the main page.
       */
      title: "Explore Data App Test",
      /**
       * Text to appear underneath the title at the top of the main page.
       */
      description: "Description of this app section",
      /**
       * List of column definition objects for the columns in the table on the main page.
       */
      tableColumns: [
        {
          field: "scientificName",
          headerName: "Name",
          width: 200
        },
        {
          field: "year",
          headerName: "Year",
          width: 150
        },
        {
          field: "basisOfRecord",
          headerName: "Basis of Record",
          width: 150
        },
        {
          field: "elevation",
          headerName: "Elevation",
          width: 150,
          type: 'number'
        }
      ],
      /**
       * List of filters to display on the main page and use to filter the main table data. 
       * Each filter has a definition object to determine how it renders and functions.
       */
      tableFilters: [
        {
          field: "elevation",
          label: "Elevation",
          paramType: "array-string",
          filterComponent: "RangeSlider",
          filterProps: {
            min: 0,
            max: 100
          }
        },
        {
          field: "basisOfRecord",
          label: "Basis of Record",
          paramType: 'repeated',
          filterComponent: "CheckboxList",
          filterProps: {
            options: [
              {
                label: "PRESERVED_SPECIMEN",
                value: "PRESERVED_SPECIMEN"
              },
              {
                label: "FOSSIL_SPECIMEN",
                value: "FOSSIL_SPECIMEN"
              },
              {
                label: "LIVING_SPECIMEN",
                value: "LIVING_SPECIMEN"
              },
              {
                label: "OBSERVATION",
                value: "OBSERVATION"
              },
              {
                label: "HUMAN_OBSERVATION",
                value: "HUMAN_OBSERVATION"
              },
              {
                label: "MACHINE_OBSERVATION",
                value: "MACHINE_OBSERVATION"
              }
            ]
          }
        },
      ]
    }
  }
}
import { capitalizeFirstLetter } from '../helpers/strings';
import { getAddress } from '../services/cepApi';
import * as api from '../services/contactsAPI'

const ordersStore = new DevExpress.data.CustomStore({
  key: 'id',
  load() {
    return api.getContacts();
  },
  insert(values) {
    return api.postContact(values)

  },
  update(key, values) {
    return api.editContact(key, values)
  },
  remove(key) {
    return api.deleteContact(key)
  },
});

export class DataGrid {
  constructor() {
    this.createDataGrid()
  }
  createDataGrid() {
    $("#dataGrid").dxDataGrid({
      dataSource: ordersStore,
      repaintChangesOnly: true,
      columnHidingEnabled: true,
      columns: [{
        dataField: "FullName",
        setCellValue: async function (newData, value) {
          let capitalized = capitalizeFirstLetter(value)
          console.log(capitalized)
          newData.FullName = capitalized;

        },
        validationRules: [{ type: 'required' }, {
          type: 'pattern',
          pattern: /^[^0-9]+$/,
          message: 'Do not use digits in the Name.',
        }],
      }, {
        dataField: "BirthDate",
        dataType: "date",
        format: 'dd/MM/yyyy',
        validationRules: [{ type: 'required' }],
      }, {
        dataField: "PostalCode",
        editorOptions: { useMaskBehavior: true, mask: "#####-###" },
        validationRules: [{ type: 'required' }],
        setCellValue: async function (newData, value) {

          let res = await getAddress(value)
          newData.Address = res.address;
          newData.City = res.city;
        }
      }, {
        dataField: "City",
        validationRules: [{ type: 'required' }],
      },
      {
        dataField: "Address",
        validationRules: [{ type: 'required' }],
      },
      {
        dataField: "Phone",
        editorOptions: { useMaskBehavior: true, mask: "(##) #####-####" },
        validationRules: [{ type: 'required' },
          ,],

      },

      ],
      allowColumnReordering: true,
      searchPanel: {
        visible: true,
        highlightCaseSensitive: true,
      },
      editing: {
        mode: "popup",
        allowUpdating: true,
        allowDeleting: true,
        allowAdding: true,
        useIcons: true
      },
    });
  }

}
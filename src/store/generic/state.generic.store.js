/**
 * State of module in store
 */
export default class GenericModelState {
     selected = {
          metaData: null,
          data: null,
          isFetching: false,
     };
     list = {
          metaData: null,
          data: [],
          isFetching: false,
     };
}

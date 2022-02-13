import moment from "moment";

export const formatDate = (value: moment.MomentInput[]) => {
  return value.map((value: moment.MomentInput) => moment(value).format('YYYY-MM-DD'));
}

export const saveStorage = (value: any) => {
  localStorage.setItem("value", JSON.stringify(value));
}

export const getStorage = () => {
  const serializedState = localStorage.getItem('value');

  return serializedState === null ? [null, null] : JSON.parse(serializedState);
}

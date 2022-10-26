type LocalStorageTmFormType = Array<{
  id: string;
  isRandom: boolean;
  randomMax: number;
  randomMin: number;
  tms: {
    id: string;
    name: string;
    value: number;
  }[];
}>;
class LocalStorageTmForm {
  private key = 'tmForm';

  private getLocalStorageString() {
    const targetArray = window.localStorage.getItem(this.key);
    if (targetArray) return targetArray;
    window.localStorage.setItem(this.key, '[]');
    return '[]';
  }

  private stringToObj(localStorageData: string) {
    try {
      const parseData = JSON.parse(localStorageData) as LocalStorageTmFormType;
      return parseData; // TODO 入力チェック
    } catch (e) {
      window.localStorage.setItem(this.key, '[]');
      return [] as LocalStorageTmFormType;
    }
  }

  getFindAll() {
    const localStorageData = this.getLocalStorageString();
    return this.stringToObj(localStorageData);
  }

  getFindOne(id: string) {
    const localStorageData = this.getLocalStorageString();
    const parseData = this.stringToObj(localStorageData);
    return parseData.find((data) => data.id === id);
  }

  createData(param: LocalStorageTmFormType[number]) {
    const localStorageData = this.getLocalStorageString();
    const parseData = this.stringToObj(localStorageData);
    const filterData = parseData.filter((data) => data.id !== param.id);
    const resultData = [...filterData, param];
    window.localStorage.setItem(this.key, JSON.stringify(resultData));
  }

  deleteData(id: string) {
    const localStorageData = this.getLocalStorageString();
    const parseData = this.stringToObj(localStorageData);
    const filterData = parseData.filter((data) => data.id !== id);
    window.localStorage.setItem(this.key, JSON.stringify(filterData));
  }
}

export const localStorageTmForm = new LocalStorageTmForm();

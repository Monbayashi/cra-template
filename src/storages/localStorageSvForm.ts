type LocalStorageSvFormType = Array<{
  id: string;
  isRandom: boolean;
  svs: {
    id: string;
    name: string;
    value: number;
  }[];
}>;

class LocalStorageSvForm {
  private key = 'svForm';

  private getLocalStorageString() {
    const targetArray = window.localStorage.getItem(this.key);
    if (targetArray) return targetArray;
    window.localStorage.setItem(this.key, '[]');
    return '[]';
  }

  private stringToObj(localStorageData: string) {
    try {
      const parseData = JSON.parse(localStorageData) as LocalStorageSvFormType;
      return parseData; // TODO 入力チェック
    } catch (e) {
      window.localStorage.setItem(this.key, '[]');
      return [] as LocalStorageSvFormType;
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

  createData(param: LocalStorageSvFormType[number]) {
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

export const localStorageSvForm = new LocalStorageSvForm();

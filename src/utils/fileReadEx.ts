/**
 * https://bobbyhadz.com/blog/react-open-file-input-on-button-click
 */
export class FileReadEx extends FileReader {
  constructor() {
    super();
  }

  private readAs(blob: File, ctx: 'readAsText') {
    return new Promise((res, rej) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      super.addEventListener('load', ({ target }) => res(target!.result));
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      super.addEventListener('error', ({ target }) => rej(target!.error));
      super[ctx](blob);
    });
  }

  readAsText(blob: File) {
    const result = this.readAs(blob, 'readAsText') as Promise<string>;
    return result;
  }
}

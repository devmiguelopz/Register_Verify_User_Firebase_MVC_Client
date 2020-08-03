 export class NameSpace {
  constructor() {}
  // #region singleton
  static get Instance() {
    return this._Instance || (this._Instance = new this());
  }
  // #endregion

  SetDependencyInjection(objectDependency) {
    this.Firebase = objectDependency.firebase;
  }
}
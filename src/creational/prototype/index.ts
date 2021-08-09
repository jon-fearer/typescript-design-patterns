export class Tree {
  protected _branches: number;

  constructor();
  constructor(tree: Tree);
  constructor(tree?: Tree) {
    this._branches = tree?.branches || 5;
  }

  public clone() {
    return new Tree(this);
  }

  public get branches() {
    return this._branches;
  }

  public set branches(branches: number) {
    if (branches < 1) {
      throw new Error('tree must have at least one branch');
    }
    this._branches = branches;
  }
}

export class BigTree extends Tree {
  constructor();
  constructor(bigTree: BigTree);
  constructor(bigTree?: BigTree) {
    super();
    this._branches = bigTree?.branches || 50;
  }

  public clone() {
    return new BigTree(this);
  }
}

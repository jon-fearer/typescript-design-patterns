import { BigTree, Tree } from '.';

describe('test prototype pattern', () => {
  test('should create multiple trees', () => {
    const tree = new Tree();
    expect(tree.branches).toBe(5);
    const tree2 = tree.clone();
    expect(tree2.branches).toBe(tree.branches);
    tree2.branches = 4;
    expect(tree2.branches).toBe(4);
    const tree3 = tree.clone();
    expect(tree3.branches).toBe(tree.branches);
    tree3.branches = 6;
    expect(tree3.branches).toBe(6);
    expect(tree2).not.toBe(tree);
    expect(tree3).not.toBe(tree);
    expect(tree3).not.toBe(tree2);
  });

  test('should create multiple big trees', () => {
    const bigTree = new BigTree();
    expect(bigTree.branches).toBe(50);
    const bigTree2 = bigTree.clone();
    expect(bigTree2.branches).toBe(bigTree.branches);
    bigTree2.branches = 40;
    expect(bigTree2.branches).toBe(40);
    const bigTree3 = bigTree.clone();
    expect(bigTree3.branches).toBe(bigTree.branches);
    bigTree3.branches = 60;
    expect(bigTree3.branches).toBe(60);
    expect(bigTree2).not.toBe(bigTree);
    expect(bigTree3).not.toBe(bigTree);
    expect(bigTree3).not.toBe(bigTree2);
  });
});

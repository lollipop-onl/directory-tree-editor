const countIndent = (source: string): number => {
  const indent = source.replace(/(^(?:  |\t)+).+/, '$1');
  const matches = indent.match(/  |\t/g);

  return matches ? matches.length : 0;
}

const mapTreeDepth = (lines: string[], arr: any[]): any[] => {
  return lines.map((line, i) => {
    const value = line.replace(/^(?: |\t)+/, '');
    const depths = countIndent(line);
    let indent = '';

    for (let j = 1; j <= depths; j++) {
      let minIndent = Infinity;

      for (let k = i + 1; k < lines.length; k++) {
        const line = lines[k];

        const indent = countIndent(line);

        if (indent < j) {
          break;
        }

        minIndent = Math.min(minIndent, indent);
      }

      if (j === depths && !/^#/.test(value)) {
        indent += minIndent <= j ? '├──' : '└──';
      } else {
        indent += minIndent <= j ? '│  ' : '   ';
      }
    }

    return `${indent}${value}`;
  });
}

/**
 * ディレクトリのツリー構造に変換する関数
 */
export const parseDirectoryTree = (source: string): string => {
  const lines = source.split(/\n|\r\n/);
  const trees = mapTreeDepth(lines, []);

  return trees.join('\n');

  // const lines = source.split(/(?:\n|\r|\r\n)+/);

  // const trees = lines.reduce<any[]>((tree, line, i): any => {
  //   const value = line.replace(/^(?: |\t)+/, '');
  //   const matches = line.replace(/(^(?:  |\t)+).*/, '$1').match(/  /g);
  //   let level = matches ? matches.length : 0;

  //   const lastItem = tree[i - 1];

  //   if (lastItem && level - lastItem.level > 1) {
  //     level = lastItem.level + 1;
  //   }

  //   return tree.concat({ level, value });
  // }, []);

  // const treeString = trees.map(({ value, level }, i) => {
  //   let indent = '';

  //   for (let i = 0; i < level; i++) {
  //     let isLast = true;

  //     for (let j = i + 1; j < trees.length; j++) {
  //       if (trees[j].level <= level) {
  //         isLast = false;

  //         break;
  //       }
  //     }

  //     indent += isLast ? '  ' : '| ';
  //   }

  //   return `${indent}${value}`;
  // }).join('\n');

  // return treeString
};

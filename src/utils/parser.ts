/**
 * インデントの数をカウントする
 * @param value
 */
const countIndents = (value: string): number =>
  Math.floor((/^ +/.exec(value)?.[0].length || 0) / 2);

/**
 * インデントをディレクトリツリーに変換する
 * @param source
 */
export const indentToDirTree = (source: string): string => {
  // FIXME: 旧実装のままなので実装を見直す
  const lines = source.split(/\n|\r\n/);

  return lines
    .map((line, i) => {
      const value = line.replace(/^(?: |\t)+/, '');
      const depths = countIndents(line);
      let indent = '';

      for (let j = 1; j <= depths; j++) {
        let minIndent = Infinity;

        for (let k = i + 1; k < lines.length; k++) {
          const line = lines[k];

          const indent = countIndents(line);

          if (indent < j) {
            break;
          }

          minIndent = Math.min(minIndent, indent);
        }

        if (j === depths && !/^#/.test(value)) {
          indent += minIndent <= j ? '├── ' : '└── ';
        } else {
          indent += minIndent <= j ? '│   ' : '    ';
        }
      }

      return `${indent}${value}`;
    })
    .join('\n');
};

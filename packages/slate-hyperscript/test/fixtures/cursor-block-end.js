/** @jsx h */

import h from '../..'

export const input = (
  <value>
    <document>
      <block type="paragraph">
        one<cursor />
      </block>
    </document>
  </value>
)

export const options = {
  preserveSelection: true,
  preserveKeys: true,
}

export const output = {
  object: 'value',
  document: {
    object: 'document',
    key: '3',
    data: {},
    nodes: [
      {
        object: 'block',
        key: '1',
        type: 'paragraph',
        isVoid: false,
        data: {},
        nodes: [
          {
            object: 'text',
            key: '0',
            leaves: [
              {
                object: 'leaf',
                text: 'one',
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
  selection: {
    object: 'range',
    anchorKey: '0',
    anchorPath: [0, 0],
    anchorOffset: 3,
    focusKey: '0',
    focusPath: [0, 0],
    focusOffset: 3,
    isFocused: true,
    isAtomic: false,
    marks: null,
  },
}

import { visit } from 'unist-util-visit';
import { Root, Element as Ele, Node, ElementContent } from 'hast';

const plugin = () => {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (isSpacedCode(node)) {
        const element = node as Ele;
        if (element.children) {
          wrapAllChildren(element);
        }
      }
    })
  }
}

function isSpacedCode(node: Node): boolean {
  if (node.type !== 'element') {
    return false;
  }
  const element = node as Ele;
  if (element.tagName !== 'code') {
    return false;
  }

  if (element.properties.className) {
    const classNames = element.properties.className as string[];
    return classNames.includes('language-spaced');
  }
  return false;
}

function wrapAllChildren(element: Ele) {
  element.children = wrapChildren(element.children);
}

function wrapChildren(children: ElementContent[]) : ElementContent[] {
  const newChildren = [] as ElementContent[];
  children.forEach(child => {
    if (child.type === 'element') {
      wrapAllChildren(child)
      newChildren.push(child);
    } else if (child.type === 'text') {
      newChildren.push({
        type: 'element',
        tagName: 'pre',
        children: [child],
        properties: {}
      });
    } else {
      newChildren.push(child);
    }
  });
  return newChildren;
}

export default plugin;
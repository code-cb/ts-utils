import { assert, Equals, is } from 'common';

declare const document: any;

describe(`is`, () => {
  it(`works`, () => {
    interface Foo {
      foo: string;
    }
    interface Bar {
      bar: string;
    }
    (obj: Foo | Bar) => {
      assert(is<Foo>(obj));
      assert<Equals<typeof obj, Foo>>();
      return obj.foo;
    };
    (obj: Foo | Bar) => {
      assert(is<Bar>(obj));
      assert<Equals<typeof obj, Bar>>();
      return obj.bar;
    };

    interface BrowserNode {
      childNodes: Iterable<BrowserNode>;
      tagName: string;
    }
    interface ServerNode {
      nodeName: string;
      routes: Iterable<ServerNode>;
    }
    const processBrowserNode = ({ childNodes, tagName }: BrowserNode) => {
      console.log(tagName);
      for (const child of childNodes) {
        processBrowserNode(child);
      }
    };
    const processServerNode = ({ nodeName, routes }: ServerNode) => {
      console.log(nodeName);
      for (const route of routes) {
        processServerNode(route);
      }
    };
    (node: BrowserNode | ServerNode) => {
      is<BrowserNode>(node, typeof document !== 'undefined')
        ? processBrowserNode(node)
        : processServerNode(node);
    };
  });
});

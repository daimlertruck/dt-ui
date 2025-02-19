import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import './jest-mock-globals';

// Polyfill DOMRect
if (typeof globalThis.DOMRect === 'undefined') {
  class DOMRectPolyfill implements DOMRect {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;

    constructor(
      x: number = 0,
      y: number = 0,
      width: number = 0,
      height: number = 0
    ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.top = y;
      this.left = x;
      this.right = x + width;
      this.bottom = y + height;
    }

    toJSON(): object {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom,
      };
    }

    static fromRect(other?: DOMRectInit): DOMRect {
      if (other) {
        const { x = 0, y = 0, width = 0, height = 0 } = other;
        return new DOMRectPolyfill(x, y, width, height);
      }
      return new DOMRectPolyfill();
    }
  }

  globalThis.DOMRect = DOMRectPolyfill;
}

expect.extend(matchers);

configure({ defaultHidden: true });

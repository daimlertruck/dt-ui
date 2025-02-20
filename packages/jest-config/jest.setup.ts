import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import './jest-mock-globals';

expect.extend(matchers);

configure({ defaultHidden: true });

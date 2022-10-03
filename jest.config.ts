import { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  transform: { '\\.jsx?|tsx?|cts|mts$': '@codecb/babel-jest' },
};

export default config;

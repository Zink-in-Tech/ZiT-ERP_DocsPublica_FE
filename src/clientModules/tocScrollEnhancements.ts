import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {initTocScrollEnhancements} from '@site/src/utils/tocScroll';

if (ExecutionEnvironment.canUseDOM) {
  initTocScrollEnhancements();
}

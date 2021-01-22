import { library } from '@fortawesome/fontawesome-svg-core';

/**
 * @description
 * Using FA's library allows us to import our icons once into our app rather than individually in components
 * Here's how we can use an icon in a component:
 * import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 * <FontAwesomeIcon icon={['far', 'times']} />
 * https://fontawesome.com/how-to-use/on-the-web/using-with/react
 */

import {
  faTimes,
  faChevronDown,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const fontawesomeConfig = {
  init: () => {
    library.add(faTimes, faExclamationCircle, faChevronDown);
  },
};

export default fontawesomeConfig;

import ACTION_TYPES from './BreadcrumbsActionTypes';

/**
 * Sets breadcrumbs for the application.
 *
 * @param array items
 */
export function setBreadcrumbs(items) {
  return {
    type: ACTION_TYPES.SET_BREADCRUMBS,
    payload: { items },
  };
}

/**
 * Gets breadcrumbs for the application.
 *
 * @param array items
 */
export function getBreadcrumbs() {
  return {
    type: ACTION_TYPES.GET_BREADCRUMBS,
  };
}

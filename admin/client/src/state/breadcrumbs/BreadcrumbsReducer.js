import ACTION_TYPES from './BreadcrumbsActionTypes';

let state = [
  {
    href: 'show/1',
    text: 'Root'
  },
  {
    href: 'show/4',
    text: 'Uploads'
  }
];

function breadcrumbsReducer(state = state, action) {
  switch (action.type) {

    case ACTION_TYPES.SET_BREADCRUMBS:
      const crumbs = [];

      return crumbs.concat(action.items);

    case ACTION_TYPES.GET_BREADCRUMBS:
      return state;

    default:
      return state;

  }
}

export default breadcrumbsReducer;

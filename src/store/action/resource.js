export const SET_RESOURCE = 'SET_RESOURCE';

export function setResource(resource) {
  return {
    type: SET_RESOURCE,
    payload: {
      resource,
    },
  };
}

export const GET_TAB = 'GET_TAB';

export function getTab(tabName) {
  return {
    type: GET_TAB,
    payload: {
      tabName,
    },
  };
}

export const GET_SUBSYSTEM = 'GET_SUBSYSTEM';

export function setSubsystem(id) {
  return {
    type: GET_SUBSYSTEM,
    payload: {
      id,
    },
  };
}

export const SET_FILES = 'SET_FILES';

export function setFiles(file) {
  return {
    type: SET_FILES,
    payload: {
      file,
    },
  };
}

export const DELETE_IMAGE = 'DELETE_IMAGE';

export function deleteImage(index) {
  return {
    type: DELETE_IMAGE,
    payload: {
      index,
    },
  };
}

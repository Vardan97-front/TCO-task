import _ from 'lodash';
import {
  SET_RESOURCE,
  GET_TAB,
  GET_SUBSYSTEM,
  SET_FILES, DELETE_IMAGE,
} from '../action/resource';

const initialState = {
  pageTitle: '',
  plans: [],
  tabs: [],
  files: [],
  pageInfo: {},
  subSystem: {},
  openId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESOURCE: {
      const { resource } = action.payload;

      return {
        ...state,
        pageTitle: resource.page_title,
        plans: resource.plans,
        tabs: resource.tabs,
      };
    }

    case GET_TAB: {
      const { tabs } = state;
      const { tabName } = action.payload;

      const pageInfo = _.find(tabs, (t) => t.title === tabName);

      return {
        ...state,
        pageInfo: pageInfo.data,
      };
    }

    case GET_SUBSYSTEM: {
      const { id } = action.payload;
      const { pageInfo, openId } = state;

      const subSystem = _.filter(pageInfo.subsystems, (p) => p.system_id === id);

      return {
        ...state,
        subSystem,
        openId: openId === id ? null : id,
      };
    }

    case SET_FILES: {
      let { files } = state;
      const { file } = action.payload;

      files = [...file.target.files];

      _.map(files, (f) => {
        f.preview = URL.createObjectURL(f);
      });

      return {
        ...state,
        files,
      };
    }

    case DELETE_IMAGE: {
      const { index } = action.payload;
      const { files } = state;

      files.splice(index, 1);

      return {
        ...state,
        files: [...files],
      };
    }

    default: {
      return state;
    }
  }
}
